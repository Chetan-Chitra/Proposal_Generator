
const locations = [
    "under the starlit sky",
    "at our favorite restaurant",
    "where we first met",
    "in the beautiful garden",
    "by the ocean",
    "atop the mountain peak",
    "in the cozy comfort of our home",
    "during sunset at the beach",
    "in the heart of the city"
];

const actions = [
    "I realized",
    "it became clear to me",
    "I knew without a doubt",
    "my heart confirmed",
    "I understood completely",
    "it dawned on me",
    "I discovered"
];

const feelings = [
    "you are my soulmate",
    "you complete me in every way",
    "you are the missing piece in my life",
    "we were meant to be together",
    "you are the one I want to spend forever with",
    "our love story is just beginning",
    "you make every day better just by being in it"
];

const promises = [
    "promise to love you more each day",
    "vow to be your partner in all of life's adventures",
    "promise to always be there for you",
    "commit to making you smile every single day",
    "promise to be your biggest supporter",
    "vow to create a lifetime of beautiful memories with you",
    "promise to choose you every single day"
];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateProposal() {
    const proposal = `${getRandomElement(locations)}, ${getRandomElement(actions)} that ${getRandomElement(feelings)}. I ${getRandomElement(promises)}. Will you marry me?`;
    
    const proposalBox = document.getElementById('proposalText');
    proposalBox.style.opacity = 0;
    
    setTimeout(() => {
        proposalBox.textContent = proposal;
        proposalBox.style.opacity = 1;
    }, 200);

    createHeartAnimation();
}

function createHeartAnimation() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = '24px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.animation = 'float 4s ease-in-out';
    document.body.appendChild(heart);

    setTimeout(() => {
        document.body.removeChild(heart);
    }, 4000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
