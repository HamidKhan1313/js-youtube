const myNum = [1, 2, 3, 4, 5, 6, 7, 8]

// const newNum = myNum.filter((num) => num > 5 )


// arrow.js we discuss about explicit return // we use return when we use scope
// const newNums = myNum.filter((num) => {
//  return num > 4
// })

// use foreach loop
// const newNums = []
// newNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books =  [
    {title: 'Book one', genre: 'Friction', puslish: 1999,
   edition: 2004 },
   {title: 'Book two', genre: 'Non Friction', puslish: 1995,
    edition: 2000},
    {title: 'Book three', genre: 'History', puslish: 2000,
        edition: 2001 },
        {title: 'Book four', genre: 'Non Friction', puslish: 1989,
            edition: 1994 },
            {title: 'Book five', genre: 'Science', puslish: 2009,
                edition: 2013 },
                {title: 'Book six', genre: 'Friction', puslish: 1999,
                    edition: 2005 },
                    {title: 'Book seven', genre: 'History', puslish: 1997,
                        edition: 2001 },
                        {title: 'Book eight', genre: 'Science', puslish: 2001,
                            edition: 2007 }
];
let userBooks =  books.filter((bk) => bk.genre === 'History' )

 userBooks = books.filter((bk) =>{
    return bk.puslish >= 2000  && bk.genre === 'History' 
})
console.log(userBooks);


