
for(let i = 0; i < 15; i++) {

  const left = (i * 2) + 1;
  const anim = Math.floor(Math.random() * 75 + 400);
  const height = Math.floor(Math.random() * 20 + 3);
  console.log(height);

  document.querySelector(
      '#bars').innerHTML += `<div class="bar" style="left:${left}px;animation-duration:${anim}ms;height:${height}px"></div>`;
}
