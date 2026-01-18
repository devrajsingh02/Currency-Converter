let inputAmount=document.getElementById("amount");
let fromCurrency=document.getElementById("fromcurrency");
let toCurrency=document.getElementById("tocurrency");
let convertBtn=document.getElementById("convertbtn");
let result=document.getElementById("result");

convertBtn.addEventListener("click", ()=>{
    const amount=inputAmount.value;
    const from=fromCurrency.value;
    const to=toCurrency.value;

    const rate=83;
    const convertedAmount=amount*rate;

    result.textContent=`${amount} ${from} = ${convertedAmount} ${to}`;
})