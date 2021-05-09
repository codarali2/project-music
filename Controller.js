class Controls{
    constructor(){
        this.isplayed;
        this.body = document.getElementById("body");
        this.logo = document.getElementById("logo");
        this.music_file = document.getElementById("music_file");
        this.title = document.getElementById("title");
        this.play = document.getElementById("play");
        this.play.addEventListener("click" , ()=>{  this.play_pause();  });

        this.next = document.getElementById("next");
        this.next.addEventListener("click" , ()=>{   
            if(this.server<this.source_music.length-1){
                ++this.server;
            }else{
                this.server = 0;
            }
            this.controller_music();
          })

        this.back = document.getElementById("back");
        this.back.addEventListener("click" , ()=>{   
            if(this.server>0){
                --this.server;
            }else{
                this.server = 2;
            }
            this.controller_music();
          });

        this.names_music = [];
        this.names_music[0] = "سوف أحلم من جديد";
        this.names_music[1] = "أفرح و أغني";
        this.names_music[2] = "الحياة أمل";


        this.source_music = [];
        this.source_music[0] = "music1.mp3";
        this.source_music[1] = "music2.mp3";
        this.source_music[2] = "music3.mp3";

        this.image_music = [];
        this.image_music[0] = "music1.jpg";
        this.image_music[1] = "music2.jpg";
        this.image_music[2] = "music3.jpg";

        this.style_music = [];
        this.style_music[0] = "antiquewhite";
        this.style_music[1] = "#75ecf3";
        this.style_music[2] = "rgb(0 18 105)";



        this.server = 0;
        this.controller_music();
    }

    play_pause(){
        if(this.isplayed == false){
            this.music_file.play();
            this.isplayed = true;
            this.play.src = "pause.png"
        }else{
            this.music_file.pause();
            this.play.src = "play.png"
            this.isplayed = false;
        }
    }

    controller_music(){
        this.music_file.src = this.source_music[this.server];
        this.title.innerHTML = this.names_music[this.server];
        this.logo.src = this.image_music[this.server];
        this.body.style.backgroundColor = this.style_music[this.server]
        this.play_pause();
    }
}

onload = new Controls();
