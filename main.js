const profileCard = document.getElementById('profileCard');

const followCount = document.getElementById('followCount');
const retweetCount = document.getElementById('retweetCount');
const likeCount = document.getElementById('likeCount');

const likeIcon = document.getElementById('likeIcon');
const retweetIcon = document.getElementById('retweetIcon');
const followIcon = document.getElementById('followIcon');

profileCard.addEventListener('mouseenter', () => {
    setTimeout(animateNumbers, 250);
});

profileCard.addEventListener('mouseleave', () => {
    removeColor();
});

function resetNumbers() {
    followCount.innerText = "0.0K";
    retweetCount.innerText = "0.0K";
    likeCount.innerText = "0.0K";
}

function animateNumbers() {
    addColor();
    initiateCounter(followCount, 16345);
    initiateCounter(retweetCount, 13400);
    initiateCounter(likeCount, 7900);
}

function addColor() {
    likeIcon.classList.add("pulsate");
    retweetIcon.classList.add("spin");
    followIcon.classList.add("wiggle");
}

function removeColor() {
    likeIcon.classList.remove("pulsate");
    retweetIcon.classList.remove("spin");
    followIcon.classList.remove("wiggle");
}

function initiateCounter(element, limitCount) {
    let count = 0;
    let incerement = 675;

    let interval = setInterval(() => {

        count += incerement;

        element.innerText = count > 1000 ? Math.round(count / 1000) + "." + Math.floor(Math.random() * 10) + "K" : count;

        if (count > limitCount) {
            clearInterval(interval);
        }
    }, 30);
}