/**
 * Created by liujin834 on 2/13/16.
 */
var fs = require('fs');

var argv = process.argv;
argv.shift(argv);
argv.shift(argv);

var v1 = argv.shift(argv);
var v2 = argv.shift(argv);
var v3 = argv.shift(argv);

var total = v1 ? v1 : 100;
var num = v2 ? v2 : 20;
var execTimes = v3 ? v3 : 5;

function getAmount(money,num){

    money = parseFloat(money);
    num = parseInt(num);

    var maxMoneyS1 = (money/num) * 2;
    var maxMoneyS2 = (money/num) * num - 1;
    var maxMoneyS3 = (money/num) * (num * 0.5);

    var max = parseFloat(maxMoneyS1.toFixed(2));
    var min = 0.01;

    return parseFloat( ((Math.random() * (max * 100 - min * 100)) / 100).toFixed(2) );
}

function testAmount(money,num){
    var total = 0;

    var amounts = [];
    var index = 0;
    for(num;num>0;num--){

        index++;

        if(num > 1){
            var amount = getAmount(money,num);

            if(amount < 0.01){
                amount = 0.01
            }

            money -= amount;

            total += amount;

            amounts.push([index,amount]);

            continue;
        }

        amount = parseFloat(money.toFixed(2));

        total += amount;

        amounts.push([index,amount]);
    }


    return amounts;
}
console.log("[");
var times = execTimes;
for( var i= 1; i <= times; i ++){
    console.log('{"name":"'+i+'",');
    console.log('"data":');
    console.log(testAmount(total,num));
    if(times != i)
        console.log('},');
    else
        console.log('}');
}
console.log("]");