
digitalClock(5025);
digitalClock(61201);
digitalClock(87000);


function digitalClock(data) {

    const seconds = Math.round(data % 3600 % 60);
    const minutes = Math.round(data % 3600 / 60);
    const hours = Math.round(data / 3600);
    
    if (hours >= 24) console.log(`00:${minutes}:${seconds}`);
    else console.log(`${hours}:${minutes}:${seconds}`);
}