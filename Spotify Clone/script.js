console.log("WELCOME  TO  SPOTIFY");
//Initializing the variables;
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let gif = document.getElementById("gif");
let currentSong = document.getElementById("currentSong");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songItemPlay = Array.from(document.getElementsByClassName("playSong"));

let songs = [
    { songName: "Humdard", filePath: "songs/2.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "Galat baat hai", filePath: "songs/3.mp3", coverPath: "covers/cover2.jpg" },
    { songName: "Choorey wali bahan", filePath: "songs/4.mp3", coverPath: "covers/cover3.jpg" },
    { songName: "Kadar", filePath: "songs/5.mp3", coverPath: "covers/cover4.jpg" },
    { songName: "Mere rashke kamar", filePath: "songs/6.mp3", coverPath: "covers/cover5.jpg" },
    { songName: "Mini cooper", filePath: "songs/7.mp3", coverPath: "covers/cover1.jpg" }
]

songItems.forEach((element, i) => {
    //console.log(element , i);
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//play pause click
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else {
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
})

//listen to events
audioElement.addEventListener("timeupdate", () => {
    //updating seek bar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressbar.value = progress;
})
myProgressbar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressbar.value * audioElement.duration) / 100;
})

let makeAllPlays = ()=>{
    songItemPlay.forEach((element) => {
        element.classList.remove("fa-circle-pause");
       element.classList.add("fa-circle-play");
})
}
songItemPlay.forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songIndex+2}.mp3`;
        currentSong.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})
document.getElementsByClassName("playSong").addEventListener("change",()=>{
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else {
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
})
document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex <=0){
        songIndex = 0;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+2}.mp3`;
    currentSong.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex >=9){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+2}.mp3`;
    currentSong.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})