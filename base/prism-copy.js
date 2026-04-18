/* ============================================================
   prism-copy.js — copy button icon swap for Prism.js
   Include this after prism-copy-to-clipboard.min.js
   ============================================================ */

document.addEventListener("click", function (e) {
  const btn = e.target.closest("div.code-toolbar .toolbar-item button");
  if (!btn) return;

  // switch to checkmark icon via CSS class
  btn.classList.add("copied");

  // revert after 2.5 seconds
  setTimeout(() => {
    btn.classList.remove("copied");
  }, 2500);
});
