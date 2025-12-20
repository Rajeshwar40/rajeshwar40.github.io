
const c = document.getElementById("matrix");
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
const letters = "01";
const fontSize = 14;
const columns = c.width / fontSize;
const drops = Array.from({length:columns}).fill(1);

function draw(){
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle = "#22c55e";
  ctx.font = fontSize+"px monospace";
  drops.forEach((y,i)=>{
    const text = letters[Math.floor(Math.random()*letters.length)];
    ctx.fillText(text, i*fontSize, y*fontSize);
    if(y*fontSize > c.height && Math.random()>0.975) drops[i]=0;
    drops[i]++;
  });
}
setInterval(draw,33);
