let firstPage = 1;
let lastPage = 48;

booklet(firstPage, lastPage);

function booklet(firstPage, lastPage) {
  let delta = (lastPage - firstPage + 1) % 4;
  let plus = 4 - delta;
  if (delta != 0) {
    console.log(`Error: try booklet(${firstPage},${lastPage + plus}); or booklet(${firstPage - plus},${lastPage});`);
    return 1;
  }
  
  
  let sum = firstPage + lastPage;
  let currentPage = lastPage;
  let str = '';
  let papers = (lastPage - firstPage + 1) / 4;
  let middlePage = firstPage + 2 * papers - 1;

  for (let i = 0; i < 2 * papers; i++) {
    let a = currentPage - 2 * i;
    let b = sum - a;
    str += `${a},${b}`;
    if (((a - 2)!= middlePage)&&(a != firstPage + 1)) str += ',';
    if ((a - 2) == middlePage) str += '\n\n';
  }
  console.log(str);
  console.log('try booklet(,);');
  return 0;
}

/*
booklet(,);   //Enter your first and last page

*/
