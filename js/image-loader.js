
  window.onload = function() {
    var imageElement = document.querySelector('.image-large'),
    small = imageElement.querySelector('.image-small')
    var fullRes = new Image();
    fullRes.src = imageElement.dataset.large; 
    fullRes.onload = function () {
      setTimeout(function(){       
        fullRes.classList.add('loaded');
      }, 600);
    };
    imageElement.appendChild(fullRes);
  } 