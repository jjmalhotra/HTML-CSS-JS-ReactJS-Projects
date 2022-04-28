function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

function dispCurrentTime(){
    let todayDate, currTime, dt;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    setInterval(()=>{
        dt = new Date();
        todayDate = dt.toLocaleDateString(undefined,options);
        currTime = addZero(dt.getHours()) + ":" + addZero(dt.getMinutes()) + ":" + addZero(dt.getSeconds());
        document.getElementById('time').innerHTML = currTime + "<br>on " + todayDate;
    },1000); //update on every second
}

function getOptions(tz)
{
    let opt = { hourCycle:"h24", weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12:false};
    switch(tz){
        case 'uk': 
            opt.timeZone = 'Europe/London';
            return opt;        
        case 'us': 
            opt.timeZone = 'America/New_York';
            return opt;
        case 'cn' : 
            opt.timeZone = 'America/Winnipeg';
            return opt;
    }    
}

function showTime(id, tz){
    arr = tz.split(',');    
    document.getElementById(id).innerHTML = arr[2] + "<br>" + arr[0] + "<br>" + arr[1]+" 2022";
}

function browseTime(){
       setInterval(()=>{ 
        dt_tz = new Date();         
        ukTime = dt_tz.toLocaleString('en-GB', getOptions('uk')); 
        usTime = dt_tz.toLocaleString('en-US', getOptions('us')); 
        cnTime = dt_tz.toLocaleString('en-CA', getOptions('cn'));       
            
        showTime("ukTime", ukTime);
        showTime("usTime", usTime);
        showTime("cnTime", cnTime);
   },500); //update on every second
}

window.onload = dispCurrentTime();