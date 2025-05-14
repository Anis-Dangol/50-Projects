const container = document.querySelector(".container");
const unsplashURL = 'https://picsum.photos/'
const rows = 5

for(let i = 0; i < rows * 3; i++) {
    const img =document.createElement('img');
    img.src = `${unsplashURL}/id/${getRandomNr()}${getRandomSize()}`;
    container.appendChild(img);
}

function getRandomSize() {
    if (getRandomNr() <= 300)
        return `/${getRandomNr()}/${getRandomNr()}`;
    else 
        return `/300/300`;
}

function getRandomNr() {
    return Math.floor(Math.random() * 1000);
}