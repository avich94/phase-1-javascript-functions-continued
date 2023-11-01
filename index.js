function saturdayFun(param1 = 'roller-skate') {
    return `This Saturday, I want to ${param1}!`;
  }
saturdayFun();

function mondayWork(param2 = "go to the office") {
    return `This Monday, I will ${param2}.`
}
mondayWork();

function wrapAdjective(wrap = "*") {
    return function(greeting) {
       return `You are ${wrap}${greeting}${wrap}!`;
     };
   }
  wrapAdjective("%")("a dedicated programmer");