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

