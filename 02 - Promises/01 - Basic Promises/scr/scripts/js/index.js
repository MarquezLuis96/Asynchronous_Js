const promise = new Promise(function (resolve, reject) {
    resolve("Hey!");
});

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10 ) {
        resolve(`We have ${cows} cows on the farm. We can meet the demand.`);
    }
    else {
        reject("We don't have the necessary number of cows to meet the demand");
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Finally");
});