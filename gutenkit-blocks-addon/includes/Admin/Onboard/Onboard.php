<?php

namespace Gutenkit\Admin\Onboard;

use Gutenkit\Helpers\InstallTracker;

defined('ABSPATH') || exit;

class Onboard
{
	const STATUS            = 'gutenkit_onboard_status';
	const EMAIL             = 'gutenkit_onboard_email';
	const EMAIL_ID          = 'gutenkit_onboard_email_id';
	const NOTICE            = 'gutenkit_onboard_notice';
	const SLUG              = 'gutenkit-blocks-addon';

	/**
	 * Saves the onboarding payload.
	 *
	 * Every plugin the user opted into is recorded in the shared Wpmet
	 * registry so the other plugins do not ask the user to onboard again;
	 * only GutenKit subscribes the collected email.
	 *
	 * @param array $data Onboarding payload.
	 * @return array Response for the REST route.
	 */
	public function submit($data)
	{
		if (empty($data)) {
			return [
				'status'  => 'success',
				'message' => __('Onboard data saved successfully.', 'gutenkit-blocks-addon')
			];
		}

		update_option(Onboard::STATUS, 'onboarded');

		$email = !empty($data['userMail']) && is_email($data['userMail'])
			? sanitize_email(wp_unslash($data['userMail']))
			: '';

		$permissions = !empty($data['pluginPermission']) && is_array($data['pluginPermission'])
			? $data['pluginPermission']
			: [];

		$tracked = $this->track_plugins($permissions);

		if (empty($email)) {
			return [
				'status'  => 'success',
				'tracked' => $tracked,
				'message' => __('Onboard data saved successfully.', 'gutenkit-blocks-addon')
			];
		}

		$response = $this->subscribe_email($email);

		if (is_wp_error($response)) {
			return [
				'status'  => 'error',
				'tracked' => $tracked,
				'message' => __('Failed to send onboard data.', 'gutenkit-blocks-addon')
			];
		}

		InstallTracker::mark_subscribed(Onboard::SLUG, $email);
		$this->store_subscription($email);

		return [
			'status'  => 'success',
			'tracked' => $tracked,
			'message' => __('Onboard data saved successfully.', 'gutenkit-blocks-addon')
		];
	}

	/**
	 * Handles the onboarding notice shown on the dashboard.
	 *
	 * Accepting subscribes the address collected by any Wpmet onboarding, or
	 * the site admin address when none was collected. Dismissing only records
	 * that the notice was answered so it stays hidden.
	 *
	 * @param bool $accepted Whether the user accepted the notice.
	 * @return array Response for the REST route.
	 */
	public function submit_notice($accepted)
	{
		if (!$accepted) {
			update_option(Onboard::NOTICE, 'dismissed', false);

			return [
				'status'  => 'success',
				'message' => __('Onboard notice dismissed.', 'gutenkit-blocks-addon')
			];
		}

		$collected = get_option('wpmet_onboard_collected_email');
		$email     = is_email($collected) ? sanitize_email($collected) : sanitize_email(get_option('admin_email'));

		if (!is_email($email)) {
			return [
				'status'  => 'error',
				'message' => __('No email address available to subscribe.', 'gutenkit-blocks-addon')
			];
		}

		$response = $this->subscribe_email($email);

		if (is_wp_error($response)) {
			return [
				'status'  => 'error',
				'message' => __('Failed to send onboard data.', 'gutenkit-blocks-addon')
			];
		}

		$this->store_subscription($email);
		update_option(Onboard::NOTICE, 'accepted', false);

		return [
			'status'  => 'success',
			'email'   => $email,
			'message' => __('Onboard data saved successfully.', 'gutenkit-blocks-addon')
		];
	}

	/**
	 * Records every plugin the user opted into in the shared Wpmet registry.
	 *
	 * Only GutenKit subscribes the collected email; the other plugins are
	 * tracked and get their own onboarding status completed, nothing is sent
	 * to their CRM from here.
	 *
	 * @param array $permissions Permission map from the onboarding payload, slug => granted.
	 * @return array The tracked plugin files.
	 */
	private function track_plugins($permissions)
	{
		$tracked = [];

		foreach ($permissions as $slug => $granted) {
			$slug = sanitize_key($slug);

			if (empty($slug) || !rest_sanitize_boolean($granted)) {
				continue;
			}

			$plugin_file = InstallTracker::mark($slug);

			if (!empty($plugin_file)) {
				$tracked[] = $plugin_file;
			}
		}

		return $tracked;
	}

	/**
	 * Stores the subscribed email.
	 *
	 * The EMAIL option holds the literal `subscribed` flag the dashboard reads
	 * to hide its subscribe form, and the address itself goes to EMAIL_ID.
	 *
	 * @param string $email Sanitized email address that was subscribed.
	 * @return void
	 */
	private function store_subscription($email)
	{
		update_option(Onboard::EMAIL, 'subscribed');
		update_option(Onboard::EMAIL_ID, $email);
	}

	/**
	 * Sends the collected email to the Wpmet subscribe endpoint.
	 *
	 * @param string $email Sanitized email address.
	 * @return array|\WP_Error The remote response, or the request error.
	 */
	private function subscribe_email($email)
	{
		return PluginDataSender::instance()->sendEmailSubscribeData([
			'email' => $email,
			'slug'  => Onboard::SLUG,
		]);
	}
}
