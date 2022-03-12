
/** older version 
 * Javascript older version, Use ajax to get data
 * from server.
 * 
*/


/**
 * 
 * @param {*} url 
 * @param {*} callback
 * 
 * readyState has five diferent states.
 *  0: request no initialized.
 *  1: server connect established
 *  2: request received
 *  3: processing request
 *  4: request finished and response ready
 * 
 * Status: Commun status:
 * 200: "ok"
 * 403: "Forbidden"
 * 404: "Page not found"
 * 
 */
const ajaxAdvice = (url, callback ) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(event) {
        if( this.readyState == 4 ) {
            if( this.status == 200 ) {
                return callback(null, JSON.parse(this.responseText));
            }
            else {
                return callback( 'Somthing wrong', null );
            }
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
}




export { ajaxAdvice }