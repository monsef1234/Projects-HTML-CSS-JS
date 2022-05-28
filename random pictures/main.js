const imgsContainer = document.getElementsByClassName("imgs")[0];
const getRandomNum = () => {
  return Math.trunc(Math.random() * 10 + 300);
};
for (let i = 0; i < 12; i++) {
  const img = document.createElement("img");
  img.src = `https://source.unsplash.com/random/${getRandomNum()}x${getRandomNum()}`;
  imgsContainer.append(img);
}
