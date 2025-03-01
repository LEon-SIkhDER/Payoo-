document.getElementById("add-money").addEventListener("click", function (event) {
    event.preventDefault()
    console.log("click hoise")
    const amount = Number(document.getElementById("amount").value)
    const balance = Number(document.getElementById("balance").innerText)
    const pin = Number(document.getElementById("pinnumber").value)
    // console.log(balance)
    // console.log(amount)
    if (pin === 1234) {
        const newBalance = balance + amount
        document.getElementById("balance").innerText = newBalance
        // console.log(newBalance)

    }

})
// toggle js
document.getElementById("cash-out-section").style.display = "none"

document.getElementById("add-money-box").addEventListener("click", function () {
    document.getElementById("addmoney").style.display = "block"
    document.getElementById("cash-out-section").style.display = "none"
    console.log("click hoise add a")

})
document.getElementById("cash-out-box").addEventListener("click", function () {
    document.getElementById("addmoney").style.display = "none"
    document.getElementById("cash-out-section").style.display = "block"
    console.log("click hoise")

})
// cash out js
document.getElementById("cash-out-btn").addEventListener("click", function(event){
    event.preventDefault()
    const cashOutAmmount = document.getElementById("cash-out-ammount").value
    const balance = document.getElementById("balance").innerText
    const newBalance = balance - cashOutAmmount
    document.getElementById("balance").innerText = newBalance
})
