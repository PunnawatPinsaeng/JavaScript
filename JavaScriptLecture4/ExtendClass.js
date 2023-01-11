
// ! Parent Class
class Media {

    constructor(info) {

        this.publishDate = info.publishDate;
        this.name = info.name;
    }

}

// ? Child Class
class Song extends Media {

    constructor(songData) {

        super(songData);
        this.artist = songData.artist;
    }

}

const mySong = new Song({

    artist : '1 Million' ,
    name : 'Intro' ,
    publishDate : 2020 ,
});

console.log(mySong);