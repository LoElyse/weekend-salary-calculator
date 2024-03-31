function employeeInfo(event){
    event.preventDefault();

    let firstNameInput = document.getElementById("firstNameText").value;
    let lastNameInput = document.getElementById("lastNameText").value;
    let idInput = document.getElementById("idText").value;
    let titleInput = document.getElementById("titleText").value;
    let annualSalaryInput = document.getElementById("salaryText").value;



    let newEmployeeInfo = `
    <tr> 
        <td>${firstNameInput}</td>
        <td>${lastNameInput}</td>
        <td>${idInput}</td>
        <td>${titleInput}</td>
        <td>${annualSalaryInput}</td>
        <td><button onclick="deleteEmployeeInfo(event)">Delete</button></td>
    </tr>`;

    
  let tableLocation = document.getElementById("tableBody")
  console.log(tableBody);
        
  tableLocation.innerHTML += newEmployeeInfo;
  
  document.getElementById('firstNameText').value='';
  document.getElementById('lastNameText').value ='';
  document.getElementById('idText').value = '';
  document.getElementById('titleText').value = '';
  document.getElementById('salaryText').value = '';
  
updatedMonthlyCost(annualSalaryInput);
}


function deleteEmployeeInfo(event){
   let buttonWeClicked = event.target;
   let toDoToDelete = buttonWeClicked.parentElement.parentElement;
  
    toDoToDelete.remove();
  
}
let totalCost = 0
function updatedMonthlyCost(annualSalary) {
    let monthlyCost = Number(annualSalary) / 12
  
    
    totalCost += monthlyCost;
  
  
    let monthlyCostLocation = document.getElementById("monthlyCost");
    monthlyCostLocation.textContent = Math.round(totalCost);
  
    let footer = document.getElementById("footer");
  
   
    if (totalCost > 20000) {
      footer.classList.toggle("over-budget");
}

}

   