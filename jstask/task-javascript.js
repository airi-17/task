window.addEventListener("load", function() {
  const btn = document.getElementById('btn');
  const techgeekheader = document.getElementById('techgeek-header');
  btn.addEventListener("click", function() {
    techgeekheader.innerHTML = '<h1>テックギーク</h1>';
  })
})
