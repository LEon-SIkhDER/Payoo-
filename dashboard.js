document.getElementById("add-money").addEventListener("click", function (event) {
    event.preventDefault()
    console.log("click hoise")
    const amount = Number(document.getElementById("amount").value)
    const balance = Number(document.getElementById("balance").innerText)
    const pin = Number(document.getElementById("pinnumber").value)
    console.log(balance)
    console.log(amount)
    if (pin === 1234) {
        const newBalance = balance + amount
        document.getElementById("balance").innerText = newBalance
        console.log(balance)

   }

})
