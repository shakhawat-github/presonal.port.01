// ====================== pre-loader start ==========================

setTimeout(function(){
  $('body').addClass('loaded');
}, 2000);

// ====================== pre-loader ended ==========================

// ====================== cursor start ==========================
let trailCursor = document.querySelector("#trail-cursor");
let circles = trailCursor.getAttribute("data-circle");
let coords = {
  x: 0,
  y: 0
};
for (i = 0; i < circles; i++) {
  let div = document.createElement("div");
  div.className = "circle";
  trailCursor.appendChild(div);
}
let allCricles = document.querySelectorAll(".circle");
allCricles.forEach((el) => {
  el.x = 0;
  el.y = 0;
});
window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});
function animeCircle() {
  let x = coords.x;
  let y = coords.y;
  
  allCricles.forEach((el, index) => {
    el.style.left = x - el.clientHeight / 2 + "px";
    el.style.top = y - el.clientHeight / 2 + "px";
    
    el.style.scale = (allCricles.length - index) / allCricles.length;
    
    el.x = x;
    el.y = y;
    
    let nxtCrcl = allCricles[index + 1] || allCricles[0];
    x += (nxtCrcl.x - x) * 0.3;
    y += (nxtCrcl.y - y) * 0.3;
  });
  requestAnimationFrame(animeCircle);
}
animeCircle();
// ====================== cursor ended ==========================

// ====================== typing txt start ==========================
const greeting = ['Designer', 'Developer', 'Coder' , 'Thank you'];
let currentGreetingIndex = 0;
let currentCharacterIndex = 0;
let isDeleting = false;
let isPaused = false;
let pauseEnd = 0;

function typeWriterEffect() {
    const greetingElement = document.querySelector('.animatedText');

    if (isPaused && Date.now() > pauseEnd) {
        isPaused = false;
    if (isDeleting) {
      currentGreetingIndex = (currentGreetingIndex + 1) % greeting.length;
      isDeleting = false;
    } else {
      isDeleting = true;
    }
  }

  if (!isPaused && !isDeleting && currentCharacterIndex === greeting[currentGreetingIndex].length) {
      isPaused = true;
    pauseEnd = Date.now() + 800; 
    return setTimeout(typeWriterEffect, 50);
  }

  if (!isPaused && isDeleting && currentCharacterIndex === 0) {
    isPaused = true;
    pauseEnd = Date.now() + 200; 
    return setTimeout(typeWriterEffect, 50);
  }
  
  const timeout = isDeleting ? 100 : 200;
  greetingElement.innerText = greeting[currentGreetingIndex].substring(0, currentCharacterIndex);
  currentCharacterIndex = isDeleting ? currentCharacterIndex - 1 : currentCharacterIndex + 1;
  setTimeout(typeWriterEffect, timeout);
}

typeWriterEffect();
// ====================== typing txt ended ==========================


// ====================== two div scroll start ==========================

  let navscroll = document.getElementById('navscroll');
  let bodyscroll = document.getElementById('bodyscroll');

  navscroll.addEventListener('scroll', function () {
    bodyscroll.scrollTop = navscroll.scrollTop;
    console.log(navscroll.scrollTop)
  });

  bodyscroll.addEventListener('scroll', function () {
    navscroll.scrollTop = bodyscroll.scrollTop;
  });

// ====================== two div scroll ended ==========================


// ====================== about counter start ==========================

let counter = document.querySelectorAll('.count');
let arr = Array.from(counter);
arr.map((item)=>{
  console.log(item.innerHTML)
  let count = item.innerHTML;
  item.innerHTML = "";
  let countNumber = 0;
  function counterUp() {
    item.innerHTML = countNumber++;
    if (countNumber > count) {
      clearInterval(stop);
    }
  }
  let stop = setInterval(() => {
    counterUp();
  }, item.dataset.speed / count);
});

// ====================== about counter ended ========================== 




// ====================== about skill bar start ========================== 

(function() {
  
  var SkillsBar = function( bars ) {
    this.bars = document.querySelectorAll( bars );
    if( this.bars.length > 0 ) {
      this.init();
    } 
  };
  
  SkillsBar.prototype = {
    init: function() {
      var self = this;
      self.index = -1;
      self.timer = setTimeout(function() {
        self.action();
      }, 500);
      
      
    },
    select: function( n ) {
      var self = this,
      bar = self.bars[n];
      
      if( bar ) {
        var width = bar.parentNode.dataset.percent;
        
        bar.style.width = width;
          bar.parentNode.classList.add( "complete" ); 
        }
    },
    action: function() {
      var self = this;
      self.index++;
      if( self.index == self.bars.length ) {
        clearTimeout( self.timer );
      } else {
        self.select( self.index );  
      }
      
      setTimeout(function() {
        self.action();
      },500);
    }
  };
  
  window.SkillsBar = SkillsBar;
  
})();

(function() {
  document.addEventListener( "DOMContentLoaded", function() {
    var skills = new SkillsBar( ".skillbar-bar" );
  });
})();


// ====================== about skill bar ended ========================== 



