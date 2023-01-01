var product_img = document.getElementById("productImg");
var small_img = document.getElementsByClassName("small-img");
small_img[0].onclick = function () {
  product_img.src = small_img[0].src;
};
small_img[1].onclick = function () {
  product_img.src = small_img[1].src;
};
small_img[2].onclick = function () {
  product_img.src = small_img[2].src;
};
small_img[3].onclick = function () {
  product_img.src = small_img[3].src;
};
