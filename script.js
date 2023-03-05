function displayTime(){
    let dateTime = new Date();
    let hour =dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();
    let session = document.getElementById('session');
    //session set
    if(hour >= 12){
        session,innerHTML='PM';
    }
    else{
        session.innerHTML='AM'
    }
    
    document.getElementById('hours').innerHTML = hour;
    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('seconds').innerHTML = second;
}


const timeInterval = setInterval(displayTime,1000)
document.getElementById('stop-btn').addEventListener('click',function(){
    clearInterval(timeInterval)
})
