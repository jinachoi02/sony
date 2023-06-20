var $html = $("html");
 
var page = 1;
 
var lastPage = $(".content").length; //마지막페이지번호
 
$html.animate({scrollTop:0},10); //문서가 로드되면 첫 페이지 시작
$(window).on("wheel", function(e){
 
  if($html.is(":animated")) return;//아래에서 호출된 .animate 메서드로 생성된 스크롤 효과가 쌓이지 않도록 스크롤이 진행되는 동안 발생하는 wheel이벤트는 무시
 //e(제이커리 반환).원래이벤트. 델타y(굴린휠) 
  if(e.originalEvent.deltaY > 0){
    if(page== lastPage) return;
 
    page++;
  }else if(e.originalEvent.deltaY < 0){
    if(page == 1) return;//마지막페이지 핸들러종료
 
    page--;
  }
  var posTop = (page-1) * $(window).height();//이동할 페이지 번호에 스크롤할 위치 계산
 
  $html.animate({scrollTop : posTop});
 
});

const menuTag = document.querySelector(".toggle-menu")
const closeTag = document.querySelector(".toggle-close")
const asideTag = document.querySelector("aside")


menuTag.addEventListener("click", function(){

  asideTag.classList.add('open');
  menuTag.style.display = 'block';
})//메뉴토글
closeTag.addEventListener("click", function(){

  asideTag.classList.remove('open');
  closeButton.style.display = 'none';
})//닫기 토글




  function showImage(objectId) {
    var imageElement = document.getElementById("object-image" + objectId.slice(-1));
    imageElement.classList.remove("hidden");
  }

  function hideImage(objectId) {
    var imageElement = document.getElementById("object-image" + objectId.slice(-1));
    imageElement.classList.add("hidden");
  }//호버시 다른각도사진
  var imageElement = document.getElementById("object-image");
  var imageIndex = 1;
  var timer;

  function startAnimation() {
    timer = setInterval(changeImage, 800);
  }

  function stopAnimation() {
    clearInterval(timer);
  }

  function changeImage() {
    if (imageIndex === 1) {
      imageElement.src = "object1_1m.png";
    } else if (imageIndex === 2) {
      imageElement.src = "object1_1b.png";
    } else if (imageIndex === 3) {
      imageElement.src = "object1_1w.png";
    }//이미지 바뀌게

    imageIndex++;

    if (imageIndex > 3) {
      imageIndex = 1;
    }//다시 오브젝트1w로
  }
  imageElement.addEventListener("mouseover", stopAnimation);
  imageElement.addEventListener("mouseout", startAnimation);
  startAnimation();//호버시 잠시멈춤
  

  var imageContainer = document.querySelector(".mouse");
  var mouseCircle = document.querySelector(".mouse-circle");
  var arrow = document.querySelector(".arrow");

  imageContainer.addEventListener("mousemove", function(event) {
    var containerRect = imageContainer.getBoundingClientRect();
    var mouseX = event.clientX - containerRect.left;
    var mouseY = event.clientY - containerRect.top;

    mouseCircle.style.transform = `translate(${mouseX - 40}px, ${mouseY - 40}px)`;
    arrow.style.transform = `translate(${mouseX - 40}px, ${mouseY - 40}px)`;
  });
//마우스따라다니는 원

  

imageContainer.addEventListener('mouseenter', function() {
  mouseCircle.style.display = 'block';
  arrow.style.display = 'block'; // 영역에 들어갈 때 원 표시
});

imageContainer.addEventListener('mouseleave', function() {
  mouseCircle.style.display = 'none';
  arrow.style.display = 'none'; // 영역에서 나올 때 원 숨김
});

// 롤링 배너 복제본 생성
let roller = document.querySelector('.rolling-list');
roller.id = 'roller1'; // 아이디 부여

let clone = roller.cloneNode(true)
// cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
clone.id = 'roller2';
document.querySelector('.wrap').appendChild(clone); // wrap 하위 자식으로 부착

document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';
// offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

roller.classList.add('original');
clone.classList.add('clone');

