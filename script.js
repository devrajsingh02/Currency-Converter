let inputAmount=document.getElementById("amount");
let fromCurrency=document.getElementById("fromcurrency");
let toCurrency=document.getElementById("tocurrency");
let convertBtn=document.getElementById("convertbtn");
let result=document.getElementById("result");

convertBtn.addEventListener("click", async ()=>{
    const amount=inputAmount.value;
    const from=fromCurrency.value;
    const to=toCurrency.value;

    if(amount==="" || amount<=0){
        result.textContent="Please enter a valid amount";
        return;
    }

    result.textContent="Converting...";

    try{
        const res = await fetch(
            `https://api.exchangerate-api.com/v4/latest/${from}`
        );

        const data=await res.json();
        console.log(data);

        const rate= data.rates[to];

        const converted = amount*rate;

        result.textContent=`${from} ${amount} = ${converted} ${to}`;
    }
    catch(err){
    result.textContent="Error fetching data";
    }


    
});