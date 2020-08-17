import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
audioObj=new Audio();
files=[
  {
    url:'./assests/song/songs1.mp3',
    name:'My Song1'
  },
  {
    url:'./assests/song/songs1.mp3',
    name:'My Song2'
  },
  {
    url:'./assests/song/songs1.mp3',
    name:'My Song3'
  }

];


openFile(url){
  this.audioObj.src=url;
  this.audioObj.load();
  this.audioObj.play();
console.log(url);
}

  // title = 'project';

  play(){
    this.audioObj.play();
 console.log('clicked  Play btn');
  }

  pause(){
    this.audioObj.pause();
    console.log('clicked  Pause btn');
  
  }

  stop(){
    this.audioObj.pause();
    this.audioObj.currentTime=0;
    console.log('clicked  stop btn');
  
  }
}
