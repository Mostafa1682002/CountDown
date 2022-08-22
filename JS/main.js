let days=document.querySelector(".day .num");
let hours=document.querySelector(".hour .num");
let minutes=document.querySelector(".minute .num");
let seconds=document.querySelector(".second .num");
let congr=document.querySelector(".congratolation");


let countDown=setInterval(()=>{
    let currentTime=new Date().getTime();
    let mybirthday=new Date(`16 Aug ${2023}`).getTime();
    let duration=mybirthday-currentTime;
    if(duration>0){
        let day=Math.floor(duration/(1000*60*60*24));
        let hour=Math.floor((duration %(1000*60*60*24))/(1000*60*60));
        let minute=Math.floor((duration %(1000*60*60))/(1000*60));
        let second=Math.floor((duration %(1000*60))/(1000));
        //Add Timer To Element
        days.innerHTML=day<10?'0'+day:day;
        hours.innerHTML=hour<10?'0'+hour:hour;
        minutes.innerHTML=minute<10?'0'+minute:minute;
        seconds.innerHTML=second<10?'0'+second:second;
    }else{
        clearInterval(countDown);
        congr.style.display="block";
    }
},1000)
