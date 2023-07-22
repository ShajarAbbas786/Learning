const e1=document.getElementById("hours");
const m2=document.getElementById("minutes");
const s3=document.getElementById("seconds");
const am=document.getElementById("ampm");
function updateClock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm="Am"
    if(h>12){
        h=h-12
        ampm="Pm"
    }
    
    e1.innerText=h;
    m2.innerText=m;
    s3.innerText=s;
    am,(innerText=ampm);

    setTimeout(()=>{
       updateClock()
    },1000)
}
updateClock()

