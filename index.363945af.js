!function(){var e,t=document.querySelector(".form"),n=document.querySelector(".list"),c="message";function o(e){var t=a();t.push(e),r(t)}function a(){var e=localStorage.getItem(c);return e?JSON.parse(e):[]}function r(e){localStorage.setItem(c,JSON.stringify(e))}function i(e){return{value:e,id:Date.now(),checked:!1}}function u(e){return e.map((function(e){var t=e.value,n=e.id,c=e.checked;return'<li class="item '.concat(c?"checked":"",'" data-id="').concat(n,'">\n  <input type="checkbox" class="btndelete checkbox"></input><p class="text">').concat(t,'</p>\n  <button type="button" class="button btndelete">x</button>\n</li>')})).join("")}function l(e){n.insertAdjacentHTML("beforeend",e)}t.addEventListener("submit",(function(e){e.preventDefault();var n=t.elements.message.value.trim();if(n){var c=i(n);o(c),l(u([c])),t.reset()}})),n.addEventListener("click",(function(e){if("BUTTON"===e.target.tagName){var t=e.target.closest(".item"),n=t.dataset.id;t.remove(),r(a().filter((function(e){return e.id!==Number(n)})))}})),l(u(e=a())),console.log(e),document.querySelectorAll(".checkbox").forEach((function(e){e.addEventListener("change",(function(){e.nextSibling.classList.toggle("done")}))}))}();
//# sourceMappingURL=index.363945af.js.map
