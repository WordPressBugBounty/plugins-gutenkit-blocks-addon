window.addEventListener("load",(()=>{const e=document.querySelectorAll(".gkit-nav-menu-hamburger"),t=document.querySelectorAll(".gkit-menu-close"),n=document.querySelectorAll(".gkit-nav-menu-overlay"),s=e=>{e.classList.contains("is-sidebar-open")?requestAnimationFrame((()=>{setTimeout((()=>{e.classList.remove("is-sidebar-open")}),1e3)})):e.classList.add("is-sidebar-open")};e.forEach((e=>{e.addEventListener("click",(function(){this.parentElement.classList.toggle("active"),s(this.parentElement),this.parentElement.classList.contains("lock-scroll-for-offcanvas")&&document.body.classList.add("lock-scroll")}))})),t.forEach((e=>{e.addEventListener("click",(function(){this.closest(".gkit-nav-menu-wrapper").parentElement.classList.remove("active"),s(this.closest(".gkit-nav-menu-wrapper").parentElement),document.body.classList.remove("lock-scroll")}))})),n.forEach((e=>{e.addEventListener("click",(function(){this.parentElement.classList.remove("active"),s(this.parentElement),document.body.classList.remove("lock-scroll")}))})),document.onclick=function(e){if(e.target.classList.contains("gkit-nav-menu-submenu-arrow")){const t=e.target;t?.parentElement.classList.toggle("show-submenu")}if(e.target.parentElement.classList.contains("gkit-nav-menu-submenu-arrow")){const t=e.target.parentElement;t?.parentElement.classList.toggle("show-submenu")}if(e.target.parentElement.parentElement.classList.contains("gkit-nav-menu-submenu-arrow")){const t=e.target.parentElement.parentElement;t?.parentElement.classList.toggle("show-submenu")}}}));