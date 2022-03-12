import { ajaxAdvice, promiseAdvice } from './advice.js'

const API = 'https://api.adviceslip.com/advice';

const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice'); 


/** Maybe the most easiest way XD */
const getData = ( url ) => {
    return fetch(url)
    .then( response => response.json());
}


const renderAdvice = async (url) => {
    try {
        const data = await getData(url);
        const {advice, id} = data.slip;
        adviceId.innerText = '# ' + id;
        adviceText.innerText = '"' + advice + '"';
    }
    catch( err ) {
        console.error(err);
    }
}

renderAdvice(API);

/*


const showAdvice = (error, data) => {
    if( error )  {
        console.log( error );
    }
    else {
        const {advice, id} = data.slip;
        adviceId.innerText = '# ' + id;
        adviceText.innerText = '"' + advice + '"';
    }
}

/** API is the url where we will get advice 
 * and showAdvice is a callback function.
*/

/** 
ajaxAdvice( API, showAdvice );
*/

/** Show advice using promise */
/*
promiseAdvice(API)
    .then(data => {
        const {advice, id} = data.slip;
        adviceId.innerText = '# ' + id;
        adviceText.innerText = '"' + advice + '"';
    })
    .catch( error => console.error(error));

*/

/** Show advice using aync and await */

/*
const asyncAdvice = async () => {
    try {
        const data = await promiseAdvice(API);
        console.log('Im here ');
        const {advice, id} = data.slip;
        adviceId.innerText = '# ' + id;
        adviceText.innerText = '"' + advice + '"';
    }
    catch ( error ) {
        console.error(error);
    }
}

asyncAdvice();




/** Async await */
/*
const adviceAsync = () => {
    return new Promise( (resolve, reject) => {
        (true) ? setTimeout( () => resolve("Do something"), 2000)
        : reject( new Error('Uppps!!!'));
    });
}

const doSomething = async () => {
    try {
        const something = await adviceAsync();
        console.log(something);
    }
    catch (error) {

    }
}

console.log("Before");
doSomething();
console.log("After");





/**  Promises */
/** a promise has three states
 * 
 */



/*
 const advicePromise = () => {
    return new Promise( (resolve, reject) => {
     if( true ) {
         setTimeout( () => {
             resolve('Heyyyyyy');
         }, 2000);
     }
     else {
         reject('Uppps!!!');
     }
    });
 }

 
 advicePromise()
    .then( response => console.log(response))
    .catch( err => console.error(err));


Promise.all([advicePromise(),advicePromise()])
 .then( response => console.log(response))
 .catch( error => console.error(error));
 */