/*
 * Add enlarge image capability for easier readability
 */
export function expandImageOnClick() {
  // create references to the modal...
  var modal = document.getElementById('expandModal');

  // get all images without class icon or logo, inside or article but also have src `.png`
  // it is most likely that a icon or logo is src `.svg`
  let images = document.querySelectorAll(
    "article img:not(a):not(.icon):not(.logo)[src*='.png']",
  );

  // create reference to add caption
  let captionText = document.getElementById('caption');

  for (let i = 0; i < images.length; i++) {
    let img = images[i];
    // and attach our click listener for this image.
    img.onclick = function () {
      modal.style.display = 'block';
      // add image only when source is defined because of HTTPproofer rules
      let modalImg = document.getElementById('modalImg');
      modalImg.innerHTML = `<img src="${this.src}" class="modal-content">`
      captionText.innerHTML = this.alt;
    };
    img.classList.add('enlarge');
  }

  let span = document.getElementsByClassName('close')[0];
  span.onclick = function () {
    modal.style.display = 'none';
  };
  modal.onclick = function () {
    modal.style.display = 'none';
  };
}
