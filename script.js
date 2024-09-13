function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = 'AM';  

    if (hours >= 12) {
        period = 'PM';
    }

    // Convert to 12-hour format
    if (hours > 12) {
        hours = hours - 12;  
    }
    if (hours === 0) {
        hours = 12; 
    }

    // Add leading zeros if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const currentTime = `${hours}:${minutes}:${seconds} ${period}`;
    clockElement.innerHTML = currentTime;
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Display Clock
updateClock();
