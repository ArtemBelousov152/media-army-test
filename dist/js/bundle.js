!function(){"use strict";window.addEventListener("DOMContentLoaded",(()=>{(()=>{let e=!1;const s=document.querySelector(".hamburger"),t=document.querySelector(".menu__close"),c=document.querySelector(".dropDown"),n=document.querySelector(".btn__menu"),o=document.querySelector(".menu__services"),r=document.querySelector(".serviceMenu");s.addEventListener("click",(()=>{c.classList.add("dropDown_active"),s.classList.add("hamburger_hide"),t.classList.add("menu__close_show"),n.classList.add("btn__menu_active"),o.classList.add("menu__services_disable"),document.querySelector(".menu").classList.add("menu__active"),e=!0})),t.addEventListener("click",(()=>{c.classList.remove("dropDown_active"),s.classList.remove("hamburger_hide"),t.classList.remove("menu__close_show"),n.classList.remove("btn__menu_active"),o.classList.remove("menu__services_disable"),document.querySelector(".menu").classList.remove("menu__active"),e=!1})),o.addEventListener("mouseover",(s=>{e||(r.classList.add("serviceMenu_show"),document.querySelector(".menu").classList.add("menu__active"))})),o.addEventListener("mouseout",(s=>{e||(r.classList.remove("serviceMenu_show"),document.querySelector(".menu").classList.remove("menu__active"))}))})()}))}();
//# sourceMappingURL=bundle.js.map