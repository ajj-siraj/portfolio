
//my custom functions
export const capitalizeFirstLetter = tech => {
  return tech.charAt(0).toUpperCase() + tech.slice(1);
};

export const scrollToRef = source => {
  let alt = source.target.getAttribute("alt");
  let target = document.getElementById(alt);
  window.scrollTo(0, target.offsetTop - 100);
};

export const getImgUrl = (img) => {
  return img.fields.file.url;
}