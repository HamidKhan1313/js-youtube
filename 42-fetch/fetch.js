// 404 code always taken in response not in resolve or reject => important for interview


// (microtask/priority queue) makes for fetch thats why fetch can early excute then set timeout

// fetch divided into two parts
//(1)-->  web browser apis handle/ native node base apis handle
// network request ---> goes to network  onfulfilled[] or not goes to network -> on Rejection[] 
//(2)--> variables --> memories -->  data space reserved 
// arrays:- onfulfilled[fn] --> promise --> resolve / on Rejection[fn] --> promise --> reject
// function -->  Are responsible for data fufilled

// fetch('https://example.com/', {method: 'GET', body: new formData(),});

// https://fetch.spec.whatwg.org/#fetch-method  --> method that read browser/sfari and then 
// implement request/reject or other


// js Engine
// memory heap               call stack
//                 function function function  globalexcutioncontext   
//                -> call -> set timeout -> register callback -> task queue(call back) 
//              call back -> event loop -> check task queue either full or not -> timeup -> work

