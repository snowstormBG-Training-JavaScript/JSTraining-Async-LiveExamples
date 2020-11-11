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

//Promise.race , just like the name suggests:
// we take an array of promises
// and we return the data of the first that finishes execution

// Promise.race([
//     getPosition(),
//     setTimer(4000)
// ])
//     .then(data => {
//             console.log(data);
//         }
//     );



//Promise.all wants every promise in the array to resolve before moving onto the .then()
// this means either ALL resolve or at least 1 rejected

// Promise.all([
//     getPosition(),
//     setTimer(4000)
// ])
//     .then(promiseData => {
//             console.log('Promise all returned data:');
//             console.log(promiseData);
//         }
//     );



//Promise.allSettled runs all and returns an array with the return data of the promises. Like a report.

Promise.allSettled([
    getPosition(),
    setTimer(4000)
])
    .then(promiseData => {
            console.log('Promise all returned data:');
            console.log(promiseData);
        }
    );


