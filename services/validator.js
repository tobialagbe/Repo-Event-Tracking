/**
 * Valid request
 */
 const validate = (array) => {
   
 }
 
 const processError = (error) => {
   let sendError = {};
   if (typeof error === 'string') {
     sendError.error = error;
   }else{
     sendError.error = error.error || error.message || 'An '
   }
 }
 
 module.exports = {
   validate,
   processError
 }