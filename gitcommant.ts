import inquirer from "inquirer";


interface userinput {
currencyinput:string,
inputamount:number,
currencyoutput:string,


}let loop = true





let userinput = await inquirer.prompt([{
    type:"list",
    name: "currenciesinput",
    choices:["pakistan","eur","us dollar"],
    message:"select your currency you want to convert"

},
{
    type:"number",
    name:"inputamount",
    message:"enter your amount you to convert"
    
},
{type:"list",
name: "currenciesinput",
choices:["pakistani pkr","saudi riyal","us dollar"],
message:"select your currency you want to convert"

}

])
const input=userinput.currencyinput
const amount=userinput.inputamount
const output=userinput.currencyoutput


if (input==="pakistani pkr") {
if (output==="us dollar") {
console.log('the ${amount}pakistani pkr is ${amount / 275} us dollar' );
    
    
}}else if (output==="us dollar")
console.log('the ${amount}pakistani pkr is ${amount/74}saudi riyal');


if (input==="us dollar") {
    if (output==="pakistani pkr") {
    console.log('the ${amount}us dollar is ${amount *275} pakistani pkr' );
        
        
    }else if (output==="us dollar")
    console.log('the ${amount}us dollaris ${amount*3.75}saudi riyal');
}{if (input==="saudi riyal") {
    if (output==="pakistani pkr") {
    console.log('the ${amount}saudi riyal is ${amount /3.75} us dollar' );
        
        
    }else if (output==="saudi riyal")
    console.log('the ${amount}saudi riyal is ${amount*74}pakistani pkr');}

   }




        
    
    
