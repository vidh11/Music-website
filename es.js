console.log("Welcome to spotify")
let songIndex=0;
let audioElement=new Audio("https://paglasongs.com/files/download/type/192/id/3537");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songs=[{
    songName:"let me love you", filePath:"https://paglasongs.com/files/download/type/192/id/3537"
},
{songName: "perfect", filePath:"https://www.naijagreen.com/wp-content/uploads/music/2021/08/Ed_Sheeran_-_Perfect_[NaijaGreen.Com]_.mp3"},
{songName: "dandelions", filePath:"https://pagalworld.com.vc/files/download/type/128/id/2532"},
{songName: "Runaway", filePath:"https://luvmp.com/wp-content/uploads/2021/09/Aurora_-_Runaway_Luvmp.com_.mp3"},
{songName: "Girls Like you", filePath:"https://www.mostmags.com/download/10717/"}]
//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
gif.style.opacity=1;
}
else{
    audioElement.pause();
masterPlay.classList.remove('fa-pause-circle');
masterPlay.classList.add('fa-play-circle');
gif.style.opacity=0;
}
})
audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

