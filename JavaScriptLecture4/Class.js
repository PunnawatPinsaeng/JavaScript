
class Song {

    constructor() {

        this.title;
        this.author;
    }

    play() {

        console.log("Song playing!");
    }
    
    stop() {

        console.log("Song Stopping!");
    }

}

const mySong = new Song();
mySong.play();
mySong.stop();

console.log(mySong.title);
console.log(mySong.author);