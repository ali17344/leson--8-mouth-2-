let dateNow = new Date()
let dateLine = new Date(2024, 6, 19)
let day = document.getElementById('day')
let hour = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let timeLeft = dateLine.getTime() - dateNow.getTime()
    day.textContent = (timeLeft / 1000 / 60 / 60 / 24).toFixed(0)
    hour.textContent = ((timeLeft / 1000 / 60 / 60) % 24).toFixed(0)
    min.textContent = ((timeLeft / 1000 / 60) % 60).toFixed(0)
    sec.textContent = (((timeLeft / 1000) % 60).toFixed(0)) ; 
    let time = setInterval(() => {
        sec.textContent -=1;
        if(sec.textContent == 0){
            min.textContent -=1;
            sec.textContent = 60 
        }
        if(min.textContent == 0){
            hour.textContent -=1;
            min.textContent = 60;
        }else if(hour.textContent == 0){
            day.textContent -=1;
            hour.textContent = 24
        }else if(day.textContent == 0){
            clearInterval(time)
        }
    }, 1000)
