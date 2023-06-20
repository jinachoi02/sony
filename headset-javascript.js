$('.slider').each(function() {
  var $this = $(this); //현재 슬라이더 요소
  var $group = $this.find('.slide_group'); //슬라이드 그룹 요소
  var $slides = $this.find('.slide'); // 슬라이드 요소들
  var bulletArray = []; //슬라이드 버튼들을 담기 위해 배열
  var currentIndex = 0; //현재 슬라이드 인덱스
  var timeout;
  //move()를 통해 슬라이드를 이동 newIndex 매개변수로 이동할 슬라이드의 인덱스를 받음
  function move(newIndex) {
    var animateLeft, slideLeft;

    advance();

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    bulletArray[currentIndex].removeClass('active'); //현재 버튼에서 active 클래스 제거
    bulletArray[newIndex].addClass('active'); //새로운 버튼에 active 클래스 추가

    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex; //현재 슬라이드 인덱스 업데이트
    });
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }

  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });

  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });

  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');

    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button); //버튼을 배열에 추가
  });

  advance(); //슬라이드 자동 이동
});

// move(newIndex)함수
// advance() 함수를 호출하여 슬라이드 자동 이동을 초기화
// 현재 슬라이드가 이미 애니메이션 중인 경우나 현재 인덱스와 이동할 인덱스가 같은 경우 함수를 종료
// bulletArray에서 현재 버튼에 active 클래스를 제거하고, 이동할 버튼에 active 클래스를 추가
// 이동 방향에 따라 slideLeft와 animateLeft 값을 설정
// 이동할 슬라이드를 보이도록 설정하고, $group 요소를 애니메이션으로 이동시킴
// 애니메이션 완료 후에 이전 슬라이드를 숨기고, 이동한 슬라이드를 보이도록 설정, $group 요소의 위치를 초기화하고, currentIndex 변수를 업데이트

// .previous_btn 버튼을 클릭하면 이전 슬라이드로 이동 현재 슬라이드가 첫 번째 슬라이드가 아닌 경우에는 인덱스를 감소시키고, 첫 번째 슬라이드인 경우에는 마지막 슬라이드로 이동





var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var classname = document.getElementsByClassName("confetti-button");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
}


    const slideImages = {
      blue: ['headset1.png', 'headset2.png', 'headset3.png', 'headset4.png', 'headset5.png'],
      silver: ['headset1-s.png', 'headset2-s.png', 'headset3-s.png', 'headset4-s.png', 'headset5-s.png'],
      black: ['headset1-b.png', 'headset2-b.png', 'headset3-b.png', 'headset4-b.png', 'headset5-b.png']
    };

    // 슬라이드 요소
    const slider = document.querySelector('.slider');
    const slides = Array.from(slider.querySelectorAll('.slide'));

    // 슬라이드 버튼
    const slideButtonsContainer = document.querySelector('.slide_buttons');
    const slideButtons = Array.from(slideButtonsContainer.querySelectorAll('span'));

    // 슬라이드 초기 설정
    let currentIndex = 0;
    slides[currentIndex].classList.add('active');
    slideButtons[currentIndex].classList.add('active');

    // 슬라이드 이동 함수
    function goToSlide(index) {
      slides[currentIndex].classList.remove('active');
      slideButtons[currentIndex].classList.remove('active');
      currentIndex = (index + slides.length) % slides.length;
      slides[currentIndex].classList.add('active');
      slideButtons[currentIndex].classList.add('active');
    }

    // 색깔 버튼을 클릭했을 때의 동작을 설정
    const colorButtons = document.querySelectorAll('.color-button');
    colorButtons[1].style.color = '#D1D1D1';
    colorButtons[2].style.color = '#D1D1D1';

    colorButtons.forEach((button) => {
      button.addEventListener('click', function() {
        // 모든 색깔 버튼의 폰트 색상을 회색으로 변경
        colorButtons.forEach((btn) => {
          btn.style.color = '#D1D1D1';
        });
        
        // 선택된 색깔 버튼의 폰트 색상을 검은색으로 변경
        this.style.color = 'black';

        // 선택된 색깔 값
        const color = this.dataset.color;

        // 슬라이드에 맞는 이미지 경로를 설정
        const imagePaths = slideImages[color];

        // 슬라이드 이미지를 변경
        slides.forEach((slide, index) => {
          const img = slide.querySelector('img');
          img.src = imagePaths[index];
        });

        // 첫 번째 슬라이드로 이동
        goToSlide(0);
      });
    });

const elements = document.querySelectorAll('.element1, .element2, .element3');
const infoFrames = document.querySelectorAll('.info-frame1, .info-frame2, .info-frame3');

elements.forEach((element, index) => {
  element.addEventListener('click', () => {
    // 모든 info-frame을 숨김 처리
    infoFrames.forEach(frame => frame.classList.remove('show-info'));

    infoFrames[index].classList.add('show-info');
  });
});

window.addEventListener("scroll", function() {
  const sectionTags = document.querySelectorAll(".con3");
  sectionTags.forEach(section => {
    let sectionTop = section.getBoundingClientRect().top;
    let sectionMid = sectionTop + section.getBoundingClientRect().height / 2;
    let windowMid = window.innerHeight / 2;

    if (Math.abs(windowMid - sectionMid) < 200) {
      section.querySelector(".unit-container").classList.add("middle");
    } else {
      section.querySelector(".unit-container").classList.remove("middle");
    }
  });
});

const image = document.querySelector(".image-container img");
let rotationAngle = 0;

window.addEventListener("wheel", function(event) {
  const delta = Math.sign(event.deltaY); //360도 회전하기 위함
  const rotationIncrement = 20; //회전 증가량만큼 회전
  
  rotationAngle += rotationIncrement * delta;
  image.style.transform = `rotate(${rotationAngle}deg)`;
});

window.addEventListener("scroll", function() {
  const sectionTags = document.querySelectorAll(".con5");
  sectionTags.forEach(section => {
    let sectionTop = section.getBoundingClientRect().top;
    let sectionMid = sectionTop + section.getBoundingClientRect().height / 2;
    let windowMid = window.innerHeight / 2;

    if (Math.abs(windowMid - sectionMid) < 200) {
      section.querySelector(".multi-frame").classList.add("middle");
    } else {
      section.querySelector(".multi-frame").classList.remove("middle");
    }
  });
});
window.addEventListener("scroll", function() {
  const sectionTags = document.querySelectorAll(".con6");
  sectionTags.forEach(section => {
    let sectionTop = section.getBoundingClientRect().top;
    let sectionMid = sectionTop + section.getBoundingClientRect().height / 2;
    let windowMid = window.innerHeight / 2;

    if (Math.abs(windowMid - sectionMid) < 200) {
      section.querySelector(".text-frame").classList.add("middle");
    } else {
      section.querySelector(".text-frame").classList.remove("middle");
    }
  });
});

