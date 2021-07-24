const array = [
  {
    img: "/img/beach-1853939__480.jpg",
    naamofpic: "beach",
    nums: 7,
    id: 0,
  },
  {
    img: "/img/dice-1502706__480.jpg",
    naamofpic: "dice",
    nums: 9,
    id: 1,
  },
  {
    img: "/img/laptop-1209008__480.jpg",
    naamofpic: "laptop",
    nums: 11,
    id: 2,
  },
  {
    img: "/img/music-3507317__480.jpg",
    naamofpic: "music",
    nums: 15,
    id: 3,
  },
  {
    img: "/img/tv-5571609__480.jpg",
    naamofpic: "tv",
    nums: 6,
    id: 4,
  },
  {
    img: "/img/pocket-watch-2061228__480.jpg",
    naamofpic: "pocket-watch",
    nums: 2,
    id: 5,
  },
  {
    img: "/img/smartphone-2212963__480.jpg",
    naamofpic: "smartphone",
    nums: 8,
    id: 6,
  },
  {
    img: "/img/pexels-photo-6896518.jpeg",
    naamofpic: "meat",
    nums: 3,
    id: 7,
  },
];

// intialazing and declilering
const firstImg = document.querySelector(".firstImg");
const secondImg = document.querySelector(".secondImg");
const rightImg = document.querySelector(".rightImg");
const wrongImg = document.querySelector(".wrongImg ");

let index = 0;
let index2 = 0;

// score for the game
const scoreReader = document.querySelector(".scoresup #num");
const score = document.querySelector(".mainboard #num");


// buttons
const retryBtn = document.querySelector(".retry button");
const quitBtn = document.querySelector(".quit button");

let arrayClone = array.filter((idx, val) => {
  if (val % 2 === 0) {
    return idx;
  }
});

let arrayClone2 = array.filter((idx, val) => {
  if (val % 2 !== 0) {
    return idx;
  }
});
document.addEventListener("DOMContentLoaded",function(){
  loadFistImg(arrayClone);
  loadSecondImg(arrayClone2);



// FIRST IMAGE

// const sum = index2 + index
firstImg.addEventListener("click", function () {
  if (isGreater(index, index2)) {
    index2++;
    loadSecondImg(arrayClone2, index2);
    console.log(index);
    displayInfo()
  } else {
    console.log("ERROR , WRONG DONT CHANGE");
    wrongImg.classList.add("active");
    score.textContent = index + index2;
  }
});


// SECOND IMAGE
secondImg.addEventListener("click", function () {
  if (!isGreater(index, index2)) {
    index++;
    loadFistImg(arrayClone, index);
    
    displayInfo()
   
  } else {
    console.log("ERROR ,WRONG DONT CHANGE");
    wrongImg.classList.add("active");
    score.textContent = index + index2;
  }
});


retryBtn.addEventListener("click", () => {
  wrongImg.classList.remove("active");
});
quitBtn.addEventListener("click", () => {
  wrongImg.classList.remove("active");
});


})

function displayInfo(){
  scoreReader.textContent = index + index2;
    rightImg.classList.add("act")
    setTimeout(function () {
      rightImg.classList.remove("act");
    }, 500);
}

function isGreater(idx = 0, idx2 = 0) {
  console.log(
    `first : ${arrayClone[idx].nums} second : ${arrayClone2[idx2].nums}`
  );
  if (arrayClone[idx].nums > arrayClone2[idx2].nums) {
    console.log(arrayClone[idx].nums);
    return true;
  } else {
    console.log(arrayClone2[idx2].nums);
    return false;
  }
}

function loadFistImg(arrayClone, idx = 0) {
  firstImg.innerHTML = `<img src="${arrayClone[idx].img}" alt="${arrayClone[idx].naamofpic}">
  <p>${arrayClone[idx].naamofpic}</p>
  `;
}
function loadSecondImg(arrayClone2, idx = 0) {
  secondImg.innerHTML = `<img src="${arrayClone2[idx].img}" alt="${arrayClone2[idx].naamofpic}">
  <p>${arrayClone2[idx].naamofpic} </p>
  `;
}
