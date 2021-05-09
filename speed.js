class Speesd{
    constructor(){
        this.music_file = document.getElementById("music_file");
        this.speed_music = document.getElementById("speed");
        this.speed_music.playbackRate = 1;
        this.speed_music.addEventListener("change" , ()=>{
            this.music_file.playbackRate = this.speed_music.value/100;
        })
    }
}

onload = new Speesd();