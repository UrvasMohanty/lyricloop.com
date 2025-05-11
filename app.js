const music = new Audio('audio/1.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` Tu Hai Toh Main Hoon <br>
        <div class="subtitle">Arijit Singh,Afsana Khan</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Aaj Bhi 2<br>
        <div class="subtitle">Vishal Mishra</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Dil<br><div class="subtitle">Raghav Chaitanya,Kaushik,Guddu</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Kaun Tujhe<br><div class="subtitle">Palak Muchhal</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Unstoppable<br><div class="subtitle">Dhanda Nyoliwala</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Jale 2<br><div class="subtitle">Shiva Choudhary,Sapna Choudhary</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Galliyan Returns<br><div class="subtitle">Ankit Tiwari</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Suna Hai <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `O Saki Saki<br><div class="subtitle">Neha Kakkar,Tulsi Kumar, B Praak</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Tu Tu Hai Wohi<br><div class="subtitle">RUUH,Joh,Jubin Nautiyal,Jonita Gandhi </div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Besos<br><div class="subtitle">Shreya Ghosal,Karl Wine</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Naina <br><div class="subtitle">Diljit Dosanjh,Badshah</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Papa Meri Jaan<br><div class="subtitle">Sonu Nigam</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `Laal Pari<br><div class="subtitle">Yo Yo Honey Singh,Alfaaz,Simar Kaur</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg",
    },
    {
        id:"16",
        songName: `Meri Zindagi Hai Tu <br><div class="subtitle">Jubin Nautiyal,Neeti Mohan</div>`,
        poster: "img/16.jpg",
    },
    {
        id:"17",
        songName: `Zarrori Tha<br><div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster: "img/17.jpg",
    },
    {
        id:"18",
        songName: `Passori<br><div class="subtitle">Ali Sethi,Shae Gill</div>`,
        poster: "img/18.jpg",
    },
    {
        id:"19",
        songName: `Insane<br><div class="subtitle">AP Dhillon</div>`,
        poster: "img/19.jpg",
    },
    {
        id:"22",
        songName: `Khairiyat<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/22.jpg",
    },
    {
        id:"36",
        songName: `Nashe Se Chadh Gayi<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/36.jpg",
    },
    {
        id:"37",
        songName: `Chal Ghar Chalen<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/37.jpg",
    },
    {
        id:"38",
        songName: `Nasha<br><div class="subtitle">Jasmine Sandals,Sachet Tandon,Jaani</div>`,
        poster: "img/38.jpg",
    },
    {
        id:"39",
        songName: `Shopping List<br><div class="subtitle">Leo Grewal,Yo Yo Honey Singh</div>`,
        poster: "img/39.jpg",
    },
    {
        id:"40",
        songName: `Aaj Ki Raat<br><div class="subtitle">Amitabh Bhattacharya,Sachin-Jigar,Divya Kumar,Madhubanti Bagchi</div>`,
        poster: "img/40.jpg",
    },
    {
        id:"41",
        songName: `Money Money<br><div class="subtitle">Yo Yo Honey Singh</div>`,
        poster: "img/41.jpg",
    },
    {
        id:"42",
        songName: `100 Million<br><div class="subtitle">Karan Aujla,Divine</div>`,
        poster: "img/42.jpg",
    },
    {
        id:"43",
        songName: `Maniac<br><div class="subtitle">Yo Yo Honey Singh,Ragini Vishwakarma</div>`,
        poster: "img/43.jpg",
    },
    {
        id:"20",
        songName: `Chi Chi Lo(EDM Tapori Mix)<br><div class="subtitle">DJ Sibu Nayagarh</div>`,
        poster: "img/20.jpg",
    },
    {
        id:"21",
        songName: `Gajara Gava Bali(Circuit Mix)<br><div class="subtitle">DJ Guddu Bhadrak,DJ Balaram</div>`,
        poster: "img/21.jpg",
    },
    {
        id:"23",
        songName: `Akhi Palake Mo Tu(Hybrid Trance)<br><div class="subtitle">DJ Pabitra,DJ Sushant</div>`,
        poster: "img/23.jpg",
    },
    {
        id:"24",
        songName: `Chandaru Chandini(Circuit Mix)<br><div class="subtitle">DJ Babu,DJ Shibu</div>`,
        poster: "img/24.jpg",
    },
    {
        id:"25",
        songName: `Choliya Ke Hook Raja Ji(Bhojpuri Mix)<br><div class="subtitle">DJ X-Black</div>`,
        poster: "img/25.jpg",
    },
    {
        id:"26",
        songName: `Faguna Ra Sata Ranga<br><div class="subtitle">DJ Subham</div>`,
        poster: "img/26.jpg",
    },
    {
        id:"27",
        songName: `Jhia Ra Echha Achi(EDM X Trance)<br><div class="subtitle">DJ Lucifer Remix</div>`,
        poster: "img/27.jpg",
    },
    {
        id:"28",
        songName: `Jhipi Jhipi Meghare <br><div class="subtitle">DJ Bapi</div>`,
        poster: "img/28.jpg",
    },
    {
        id:"29",
        songName: `Lekhichi Na Tora(EDM X Trance)<br><div class="subtitle">DJ Suman,DJ Rajesh</div>`,
        poster: "img/29.jpg",
    },
    {
        id:"30",
        songName: `Palang Sagwan Ke(Circuit Mix)<br><div class="subtitle">DJ Liku</div>`,
        poster: "img/30.jpg",
    },
    {
        id:"31",
        songName: `Peelings(Dance Mix)<br><div class="subtitle">DJ Appu</div>`,
        poster: "img/31.jpg",
    },
    {
        id:"32",
        songName: `Ragicha Ki Katha Heuna(Circuit Mix)<br><div class="subtitle">DJ Lucifer,DJ Ultra</div>`,
        poster: "img/32.jpg",
    },
    {
        id:"33",
        songName: `Tipi Tipi Barsha Pani(Circuit Mix)<br><div class="subtitle">DJ Liku,DJ Lex</div>`,
        poster: "img/33.jpg",
    },
    
    {
        id:"34",
        songName: `To Sana Bhauni Bebina(Trap Mix)<br><div class="subtitle">DJ Sorry,DJ Satya</div>`,
        poster: "img/34.jpg",
    },
    {
        id:"35",
        songName: `A Ganpat Bazana(EDM X Tapori Mix)<br><div class="subtitle">DJ Lucifer,DJ Max</div>`,
        poster: "img/35.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    // console.log(poster);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.dataset.id = id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>
    `;
    search_results.appendChild(card);
    
});
// Add this after your card creation code
Array.from(document.getElementsByClassName('card')).forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        
        index = this.dataset.id;
        makeAllPlays();
        
        // Find and update the corresponding play button in the playlist
        const playButton = document.getElementById(index);
        if (playButton) {
            playButton.classList.remove('bi-play-circle-fill');
            playButton.classList.add('bi-pause-circle-fill');
        }
        
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        
        let song_title = songs.filter((ele) => {
            return ele.id == index;
        });

        song_title.forEach(ele => {
            let {songName} = ele;
            title.innerHTML = songName;
        });
        
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 170, .1)";
    });
});
// Modify the event listener to include this
Array.from(document.getElementsByClassName('card')).forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        // ... existing code ...
        
        // Hide search results after selection
        search_results.style.display = "none";
        input.value = ""; // Clear the search input
    });
});




let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
        
    }
})
// search data end 



let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
       case "repeat": 
       shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
       case "random": 
       shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});



const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href =  `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}
const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href =  `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href =  `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}



music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
})
