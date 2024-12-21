const date = new Date();

const [month,day,year] =[
    date.getMonth()-1,
    date.getDate()-9,
    date.getFullYear(),
];

console.log(year + '年' + month + '月' + day + '日' );
 