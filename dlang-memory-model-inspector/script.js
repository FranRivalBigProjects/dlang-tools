const res=document.getElementById('res');
function run(){
let txt=(document.getElementById('input').value||'').toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('gc')||txt.includes('garbage')) out+='- Garbage collector behavior detected\n';
if(txt.includes('compile')) out+='- Compile-time execution context\n';
if(txt.includes('memory')) out+='- Memory model considerations\n';
if(txt.includes('thread')||txt.includes('concurrency')) out+='- Concurrency scenario\n';

if(val){
  out+='- Metric: '+val+'\n';
}

out+='- Analyze performance, memory, and concurrency behavior\n';

res.innerText=out;
}