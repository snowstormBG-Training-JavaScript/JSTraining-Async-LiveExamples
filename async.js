const button = document.querySelector('button');
const output = document.querySelector('p');

button.addEventListener('click', trackUserHandler);

const getPosition = (opts) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
                resolve(success);
            }, error => {
                reject(error);
            }, opts
        );
    });
};

const setTimer = duration => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("Promise Done!");
            }, duration
        );
    });
}

async function trackUserHandler() {
    let timerData;
    let posData;
    try {
        posData = await getPosition();
        timerData = await setTimer(2000);
    } catch (error) {
        console.log(error);
    }
    console.log(timerData, posData);
}
