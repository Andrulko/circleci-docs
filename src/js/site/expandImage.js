/*
 * All images have an expand button option
 */
export function expandImageOnClick() {
  // create references to the modal...
  var modal = document.getElementById('expandModal');
  // get all images without class icon or logo, inside or article but also have src `.png`
  // it is most likely that a icon or logo is src `.svg`
  let images = document.querySelectorAll(
    "article img:not(a):not(.icon):not(.logo)[src*='.png']",
  );
  // the image in the modal
  var modalImg = document.getElementById('modalImg');
  // and the caption in the modal
  var captionText = document.getElementById('caption');

  for (let i = 0; i < images.length; i++) {
    let img = images[i];
    // and attach our click listener for this image.
    img.onclick = function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };
    img.classList.add('enlarge');
  }

  var span = document.getElementsByClassName('close')[0];
  span.onclick = function () {
    modal.style.display = 'none';
  };
}
