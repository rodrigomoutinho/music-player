const songList = [
    {
        title: 'Imagine Dragons - Radioactive',
        src: 'assets/audio/1.mp3',
        img: "assets/img/radioactive.jpg"
    },
    {
        title: 'Imagine Dragons - ENEMY',
        src: 'assets/audio/2.mp3',
        img: "assets/img/enemy.png"
    },
    {
        title: 'Artic Monkeys -  R U MINE?',
        src: 'assets/audio/3.mp3',
        img: 'assets/img/articmonkeys.jpg'
    },
    {
        title: 'Bruno Mars - Thats What I Like',
        src: 'assets/audio/4.mp3',
        img: 'assets/img/bruno-mars.png'
    },
    {
        title: 'Centuries',
        src: 'assets/audio/5.mp3',
        img: 'assets/img/centuries.jpg'
    },
    {
        title: 'Eminem - The Real Slim Shady',
        src: 'assets/audio/6.mp3',
        img: 'assets/img/eminem.jpg'
    },
    {
        title: 'Eminem - Lose Yourself',
        src: 'assets/audio/7.mp3',
        img: 'assets/img/eminem2.jpg'
    },
];

let player = document.getElementById('player');

//lista generalizada 
for(let i = 0; i < songList.length; i++){
    
    let Html = `<div class="song">
    <div class="img">
    <img src="${songList[i].img}" />
    </div>
    <div class="more">
    <audio src="${songList[i].src}" id="music"></audio>
    <div class="song-info">
        <p id="name"> ${songList[i].title}
    </div>
    <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
    </div>
    </div>`

    player.insertAdjacentHTML("beforeend", Html);
}
