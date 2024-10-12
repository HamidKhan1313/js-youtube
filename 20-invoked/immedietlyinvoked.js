//  To remove gobal scope pollution  we use "IIFE"

(function chai(){
    // Named IIFE
    console.log(`DB connected `);
    
})();    // for move to second function we must use ";" in IIFE

((name) => {
    // Unnamed IIFE
    console.log(`DB connected  Two  ${name}`);
    
})(`Hamid`)  // this ('hamid') take value as a argument from (function aurcode(name) as passed it 

