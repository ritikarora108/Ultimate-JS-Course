// Promisification : It's the conversion of a function that accepts a callback into a function that returns a promise


function promisify(fn) {
    return function (...args) {
        return new Promise((resolve,reject) => {
            fn(...args, (err, result) => {
                if (err) return reject(err);
                return resolve(result);
            });
        })
    }
}

// Without Promise

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = (err) => callback(err);

    document.head.appendChild(script);
}

const callback = (err,script) => {
    if (err) {
        console.log(err);
        throw new Error(`Error while loading script!`);
    } else {
        console.log(`Script loaded successfully!`);
        console.log(script)
    }
}

// loadScript("test.js", callback);

const loadScriptPromisfied = promisify(loadScript);

// loadScriptPromisfied("test.js")
//     .then((result) => {
//         console.log("Script loaded succesfully!");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log('Error while loading script');
//         console.log(error);
//     });


(async () => {
    try {
        await loadScriptPromisfied('test.js');
        console.log(`Script loaded successfully!`);
    } catch (error){
        console.log(`Error ho gya!`);
        console.log(error);
    }
})();
