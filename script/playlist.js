const musicContainer = document.querySelector(".music-container"),
playBtn = document.querySelector("#play"),
prevBtn = document.querySelector("#prev"),
nextBtn = document.querySelector("#next"),
shuffleBtn = document.querySelector("#shuffle"),
audio = document.querySelector("#audio"),
progress = document.querySelector(".progress"),
progressContainer = document.querySelector(".progress-container"),
title = document.querySelector("#title"),
artist = document.querySelector("#artist"),
album = document.querySelector("#album"),
duration = document.querySelector("#duration"),
cover = document.querySelector("#cover"),
tracklist = document.querySelector(".playlist");
var songlist = {
songs: [{
    name: "Save Hut",
    artist: "Kirby Super Star",
    album: "",
    duration: "",
    url: "audio/kirbysuperstar_save_hut.mp3",
    cover_art_url: ""
}, {
    name: "Crysta",
    artist: "Terranigma",
    album: "",
    duration: "",
    url: "audio/03_Hometown.mp3",
    cover_art_url: ""
}, {
    name: "Remains of the Factory",
    artist: "Chrono Trigger",
    album: "",
    duration: "",
    url: "audio/210_Remains_of_the_Factory.mp3",
    cover_art_url: ""
}, {
    name: "World Map",
    artist: "Digimon Dawn / Dusk",
    album: "",
    duration: "",
    url: "audio/digimon-dawndusk-worldmap.mp3",
    cover_art_url: ""
}, {
    name: "Ice Mountain Zone Act 1",
    artist: "Sonic Advance",
    album: "",
    duration: "",
    url: "audio/sonic_advance_ice1.mp3",
    cover_art_url: ""
}, {
    name: "Aquatic Ambiance",
    artist: "Donkey Kong Country",
    album: "",
    duration: "",
    url: "audio/07_Aquatic_Ambiance.mp3",
    cover_art_url: ""
}, {
    name: "Seascape",
    artist: "Knuckles' Chaotix",
    album: "",
    duration: "",
    url: "audio/06_Seascape.mp3",
    cover_art_url: ""
}, {
    name: "Warp Room",
    artist: "Crash Bandicoot 2: N-Tranced",
    album: "",
    duration: "",
    url: "audio/ntranced15.mp3",
    cover_art_url: ""
}, {
    name: "Ripple Field 2",
    artist: "Kirby's Dream Land 3",
    album: "",
    duration: "",
    url: "audio/15_Ripple_Field_2.mp3",
    cover_art_url: ""
}, {
    name: "Select-a-Live",
    artist: "Live-a-Live",
    album: "",
    duration: "",
    url: "audio/02_lal-02.mp3",
    cover_art_url: ""
}, {
    name: "Beachside Dream",
    artist: "M&L: Bowser's Inside Story",
    album: "",
    duration: "",
    url: "audio/17_Beachside_Dream.mp3",
    cover_art_url: ""
}, {
    name: "Stage 2",
    artist: "Sparkster (Genesis)",
    album: "",
    duration: "",
    url: "audio/SparkStage2.mp3",
    cover_art_url: ""
}, {
    name: "World 3",
    artist: "Super Monkey Ball 2",
    album: "",
    duration: "",
    url: "audio/SMB2Ocean.mp3",
    cover_art_url: ""
}, {
    name: "Voice of Awakening",
    artist: "Energy Breaker",
    album: "",
    duration: "",
    url: "audio/02_Voice_of_Awakening.mp3",
    cover_art_url: ""
}, {
    name: "Slideshow (Sparkle)",
    artist: "Nintendo DSi Camera",
    album: "",
    duration: "",
    url: "audio/DSiSparkle.mp3",
    cover_art_url: ""
}, {
    name: "Ahead on Our Way",
    artist: "Final Fantasy VII",
    album: "",
    duration: "",
    url: "audio/FF7AheadOnOurWay.mp3",
    cover_art_url: ""
}, {
    name: "Frost Man",
    artist: "Mega Man 8",
    album: "",
    duration: "",
    url: "audio/MM8FrostMan.mp3",
    cover_art_url: ""
}, {
    name: "Lost Memories",
    artist: "Advance Wars: Days of Ruin",
    album: "",
    duration: "",
    url: "audio/AdvWarsLostMemories.mp3",
    cover_art_url: ""
}, {
    name: "Hang Glider",
    artist: "Pilotwings 64",
    album: "",
    duration: "",
    url: "audio/hangglider.mp3",
    cover_art_url: ""
}, {
    name: "Rydia",
    artist: "Final Fantasy IV",
    album: "",
    duration: "",
    url: "audio/rydia.mp3",
    cover_art_url: ""
}, {
    name: "End of the Journey",
    artist: "Mario & Luigi: Superstar Saga",
    album: "",
    duration: "",
    url: "audio/endofthejourney.mp3",
    cover_art_url: ""
}, {
    name: "Track 15",
    artist: "Tenant Wars",
    album: "",
    duration: "",
    url: "audio/tenantwars15.mp3",
    cover_art_url: ""
}, {
    name: "Strad",
    artist: "Minecraft",
    album: "",
    duration: "",
    url: "audio/strad.mp3",
    cover_art_url: ""
}, {
    name: "Tank 1",
    artist: "Insaniquarium",
    album: "",
    duration: "",
    url: "audio/insaniquarium_tank_1.mp3",
    cover_art_url: ""
}, {
    name: "Aurora Area",
    artist: "Kirby's Return to Dreamland",
    album: "",
    duration: "",
    url: "audio/auroraarea.mp3",
    cover_art_url: ""
}, {
    name: "Happy Birthday",
    artist: "Gimmick!",
    album: "",
    duration: "",
    url: "audio/happybirthday.mp3",
    cover_art_url: ""
}, {
    name: "Stage 3",
    artist: "Asuka 120% Burning Fest",
    album: "",
    duration: "",
    url: "audio/asuka120_stage3.mp3",
    cover_art_url: ""
}, {
    name: "Flowing Lava",
    artist: "New Super Mario Bros.",
    album: "",
    duration: "",
    url: "audio/flowinglava.mp3",
    cover_art_url: ""
}, {
    name: "Overworld",
    artist: "Hebereke",
    album: "",
    duration: "",
    url: "audio/hebereke_overworld.mp3",
    cover_art_url: ""
}, {
    name: "Lakeside",
    artist: "Sparkster (SNES)",
    album: "",
    duration: "",
    url: "audio/lakeside.mp3",
    cover_art_url: ""
}, {
    name: "Macro Sea",
    artist: "Digimon Dawn / Dusk",
    album: "",
    duration: "",
    url: "audio/MacroSea.mp3",
    cover_art_url: ""
}, {
    name: "Minigame 1",
    artist: "M&L: Bowser's Inside Story",
    album: "",
    duration: "",
    url: "audio/minigame1.mp3",
    cover_art_url: ""
}, {
    name: "Stage 3",
    artist: "Rocket Knight Adventures",
    album: "",
    duration: "",
    url: "audio/rka_stage3.mp3",
    cover_art_url: ""
}, {
    name: "Mushroom Town",
    artist: "M&L: Bowser's Inside Story",
    album: "",
    duration: "",
    url: "audio/shortbreakinmushroomtown.mp3",
    cover_art_url: ""
}, {
    name: "Slow Illusion",
    artist: "Gimmick!",
    album: "",
    duration: "",
    url: "audio/slowillusion.mp3",
    cover_art_url: ""
}, {
    name: "Password",
    artist: "Sparkster (SNES)",
    album: "",
    duration: "",
    url: "audio/sparksterpassword.mp3",
    cover_art_url: ""
}, {
    name: "Volcano",
    artist: "Dragon Saber",
    album: "",
    duration: "",
    url: "audio/dragonsaber_volcano.mp3",
    cover_art_url: ""
}, {
    name: "Wario Puzzle 1",
    artist: "Mario's Super Picross",
    album: "",
    duration: "",
    url: "audio/wariopuzzle1.mp3",
    cover_art_url: ""
}, {
    name: "World 3",
    artist: "New Super Mario Bros.",
    album: "",
    duration: "",
    url: "audio/world3.mp3",
    cover_art_url: ""
}, {
    name: "World 7",
    artist: "New Super Mario Bros.",
    album: "",
    duration: "",
    url: "audio/world7.mp3",
    cover_art_url: ""
}, {
    name: "Dire, Dire Docks",
    artist: "Super Mario 64",
    album: "",
    duration: "",
    url: "audio/dirediredocks.mp3",
    cover_art_url: ""
}, {
    name: "Rainbow Castle",
    artist: "Mario Party",
    album: "",
    duration: "",
    url: "audio/marioparty_rainbowcastle.mp3",
    cover_art_url: ""
}
]
};

window.onload = function() {
    shufflePlaylist();
    //songlist.songs.sort((a, b) => a.artist.localeCompare(b.artist));  (this puts artist in alphabetical order)
}

/*
function change() {
    document.getElementById("playlist_display").innerHTML = text;
}
*/

JSON.stringify(songlist);
let songIndex = 0;

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function printTrackList() {
    printList = "";
    for (i = 0; i < songlist.songs.length; i++) {
        printList += `<li data-index="${i}" onclick="setTrack(${i})">${songlist.songs[i].name} - ${songlist.songs[i].artist}`;
    }
    document.getElementById("tracklist").innerHTML = printList;
}

function shufflePlaylist(play) {
    shuffle(songlist.songs);
    songIndex = 0;
    printTrackList();
    loadSong(0);
    if (play){
        playSong(0);
    }
    return;
}

function loadSong(e) {
title.innerText = songlist.songs[e].name, artist.innerText = songlist.songs[e].artist, album.innerText = songlist.songs[e].album, duration.innerText = songlist.songs[e].duration, audio.src = songlist.songs[e].url, cover.src = songlist.songs[e].cover_art_url, audio.volume = .5;
document.getElementById("musictitle").innerHTML = [`${title.innerText}<br>${artist.innerText}<br>${album.innerText}`];
}

function playSong() {
musicContainer.classList.add("play"), playBtn.innerHTML.replace("pause"), audio.play()
}

function pauseSong() {
musicContainer.classList.remove("play"), audio.pause()
}

function prevSong() {
--songIndex < 0 && (songIndex = songlist.songs.length - 1), loadSong(songIndex), playSong();
}

function nextSong() {
++songIndex > songlist.songs.length - 1 && (songIndex = 0), loadSong(songIndex), playSong();
}

function updateProgress(e) {
const {
    duration: t,
    currentTime: n
} = e.srcElement, s = n / t * 100;
progress.style.width = `${s}%`
}

function setProgress(e) {
const t = this.clientWidth;
console.log(t);
const n = e.offsetX,
    s = audio.duration;
audio.currentTime = n / t * s, console.log(e.srcElement)
}

function setTrack(e) {
loadSong(e), playSong(), songIndex = e;
let t = tracklist.getElementsByTagName("li");
for (i = 0; i < songlist.songs.length; i++) {
    t[i].getAttribute("data-index") == songIndex ? t[i].className += " activeSong" : t[i].className = t[i].className.replace(" activeSong", "")
}
}
loadSong(songIndex), playBtn.addEventListener("click", () => {
musicContainer.classList.contains("play") ? pauseSong() : playSong()
}),
prevBtn.addEventListener("click", prevSong),
nextBtn.addEventListener("click", nextSong),
shuffleBtn.addEventListener("click", shufflePlaylist)
audio.addEventListener("timeupdate", updateProgress),
progressContainer.addEventListener("click", setProgress),
audio.addEventListener("ended", nextSong);
let tracklistItems = tracklist.getElementsByTagName("li");
for (i = 0; i < songlist.songs.length; i++) {
let e = tracklistItems[i].getAttribute("data-index"),
    t = tracklistItems[i].getElementsByClassName("trackTitle"),
    n = tracklistItems[i].getElementsByClassName("trackArtist"),
    s = tracklistItems[i].getElementsByClassName("trackDuration");
t[0].innerHTML = songlist.songs[e].name, n[0].innerHTML = songlist.songs[e].artist, s[0].innerText = songlist.songs[e].duration, e == songIndex ? tracklistItems[i].className += " activeSong" : tracklistItems[i].className = tracklistItems[i].className.replace(" activeSong", "")
}
