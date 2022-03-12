import { ajaxAdvice } from './advice.js'

const API = 'https://api.adviceslip.com/advice';

const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice'); 


const showAdvice = (error, data) => {
    if( error )  {
        console.log( error );
    }
    else {
        const {advice, id} = data.slip;
        adviceId.innerText = '#' + id;
        adviceText.innerText = '"' + advice + '"';
    }
}

/** API is the url where we will get advice 
 * and showAdvice is a callback function.
*/

ajaxAdvice( API, showAdvice );


