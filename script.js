document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault()
    // get Value 
    const accountNumber = Number(document.getElementById("account-num").value)

    const accountPin =Number(document.getElementById("account-pin").value)
    // security condition 
    if(accountNumber === 12345678999 && accountPin === 1234){
        window.location.href="./dashboard.html"
    }
    else{
        alert("please input valid numbers")
    }

})