let countdownTimer = (function(){
    let newYear = '1 Jan 2022'
    let totalSeconds = 0;

    //cache dom
    let daysEl = document.getElementById('days')
    let hoursEl = document.getElementById('hours')
    let minsEl = document.getElementById('mins')
    let secondsEl = document.getElementById('seconds')

    function countDown(totalSeconds){
        console.log(totalSeconds)
        let days = Math.floor(totalSeconds/3600/24)
        let hours = Math.floor(totalSeconds/3600%24)
        let mins = Math.floor(totalSeconds/60%60)
        let secs = Math.floor(totalSeconds%60)
        daysEl.innerText = days;
        hoursEl.innerText = hours;
        minsEl.innerText = mins;
        secondsEl.innerText = secs;
    }
    timer()

    let timerID = setInterval(timer,1000)

    function timer(){
        let newYearDate = new Date(newYear)
        totalSeconds = Math.floor((newYearDate - new Date())/1000);
        if(totalSeconds !== 0){
            countDown(totalSeconds)
        }
        else{
            clearInterval(timerID)
        }
    }    
    
})()