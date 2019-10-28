const profileCard = document.getElementById('profileCard');
const followCount = document.getElementById('followCount');
const retweetCount = document.getElementById('retweetCount');
const likeCount = document.getElementById('likeCount');

window.onload = () => {
    console.log("Ready");
}

profileCard.addEventListener('mouseover', () => {
    initiateCounter(followCount, 150, 6500);
    initiateCounter(retweetCount, 150, 13400);
    initiateCounter(likeCount, 150, 7900);
});

function initiateCounter(element, startCount, limitCount) {
    let incerement = limitCount / startCount * 1000;
    let interval = setInterval(() => {
        element.innerText = startCount > 1000 ? Math.round(startCount / 1000) + "." + (Math.floor(Math.random() * 10)) + "K" : startCount;
        startCount += incerement;

        if (startCount > limitCount) {
            clearInterval(interval);
        }
    }, 20);
}