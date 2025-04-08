//Callback 
// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data fetched from server");
//         callback();
//     },  2000);
// }

// function processData() {
//     console.log("Processing Data ....");
// }

// fetchData(processData)

//Promise
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched from server");
//         }, 2000);
//     });
// }

// fetchData()
//     .then((message) => {
//         console.log(message);
//         return "Processing data...";
//     })
//     .then((message) => {
//         console.log(message);
//         return "Displaying data...";
//     })
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });

//async/await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched from server");
        }, 2000);
    });
}

async function handleData() {
    try {
        const data = await fetchData();
        console.log(data);
        console.log("Processing data...");
        console.log("Displaying data...");
    } catch (error) {
        console.error("Error:", error);
    }
}

handleData();