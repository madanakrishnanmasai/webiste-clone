// const config = {
//   type: 'carousel',
//   perView: 3,
// };
// new Glide('.glide', config).mount();

//
const glide = document.querySelectorAll('.glide');

Object.values(glide).map((gl) => {
  const config = {
    type: 'carousel',
    perView: 3,
  };
  new Glide(gl, config).mount();
});
