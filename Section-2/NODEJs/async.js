const fetchDate = () =>{
    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Done');
    }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log("Timer is done!")
    fetchDate()
    .then(text => {
        console.log(text);
        return fetchDate();
    })
    .then(text2 =>{
        console.log(text2);
    });
}, 2000)

console.log("Hello");
console.log("Hi");