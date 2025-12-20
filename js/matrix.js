const c=document.getElementById("matrix"),x=c.getContext("2d");
c.width=window.innerWidth;c.height=window.innerHeight;
const l="01",fs=14,cols=c.width/fs,d=Array(Math.floor(cols)).fill(1);
setInterval(()=>{x.fillStyle="rgba(0,0,0,.05)";x.fillRect(0,0,c.width,c.height);
x.fillStyle="#22c55e";x.font=fs+"px monospace";
d.forEach((y,i)=>{x.fillText(l[Math.random()*2|0],i*fs,y*fs);
if(y*fs>c.height&&Math.random()>.975)d[i]=0;d[i]++;});},33);