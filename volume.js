class Volume{
    constructor(){
        this.music_file = document.getElementById("music_file");
        this.music_file.volume = 0.5;

        this.Volume = document.getElementById("volume");
        this.Volume.addEventListener("change" , ()=>{
            this.music_file.volume = this.Volume.value/100
        })
    }
}

onload = new Volume();
