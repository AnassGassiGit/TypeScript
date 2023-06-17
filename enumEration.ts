enum ContractStatus {
    Permanent=1,
    Temp,
    Apprentice
}
//example of comment 
let employeeStatus: ContractStatus = ContractStatus.Temp;

console.log(ContractStatus[employeeStatus]);