function getElementValue(ElementId) {
    const inputField = document.getElementById(ElementId);
    const inputFieldString = inputField.value;
    const inputNum = parseInt(inputFieldString);
    return inputNum;
}
function getElementInnerText(ElementId) {
    const inputField = document.getElementById(ElementId);
    const inputFieldString = inputField.innerText;
    const inputNum = parseInt(inputFieldString);
    return inputNum;
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const inputIncome = getElementValue('income-field');

    const inputFood = getElementValue('food-field');
    const inputRent = getElementValue('rent-field');
    const inputclothes = getElementValue('clothes-field');
    if (
        inputIncome == "" ||
        inputFood == "" ||
        inputRent == "" ||
        inputclothes == "" ||
        inputIncome <= 0 ||
        inputFood <= 0 ||
        inputRent <= 0 ||
        inputclothes <= 0 ||
        isNaN(inputIncome)||
        isNaN(inputFood)||
        isNaN(inputRent)||
        isNaN(inputclothes)
      ) {
        return alert("please enter any valid number");
      }
    // total Expeneses
    const newTotalExpeneses = inputFood + inputRent + inputclothes;
    if(inputIncome<newTotalExpeneses){
        return alert('Cut your Coat according to cloth');
    }

    const totalExpeneses = document.getElementById('total-expenses');
    totalExpeneses.innerText = newTotalExpeneses;
    // Balance: Income-Expenses
    const balance = document.getElementById('balance');
    const newBalance = inputIncome - newTotalExpeneses;
    balance.innerText = newBalance;

})

document.getElementById('btn-save').addEventListener('click', function () {
    // Savings: what percentage of Income
    const inputIncome = getElementValue('income-field');
    const saveInput = getElementValue('save-field');
    if (
        saveInput == "" ||
        saveInput <= 0 ||
        isNaN(saveInput)
      ) {
        return alert("please enter any valid number");
      }
    const newSave = (saveInput / 100) * inputIncome;

    const saving = document.getElementById('saving');
    saving.innerText = newSave;
    const balance = getElementInnerText('balance');
    if(balance<newSave){
        return alert('There is not enough money to save')
    }
    // Remaining: Balance-savings
    const remainingTotal = balance - newSave;
    const remaing = document.getElementById('remaining');
    remaing.innerText = remainingTotal;
})
