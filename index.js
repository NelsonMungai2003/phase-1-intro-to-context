function createEmployeeRecord(array){
    let obj={
        firstName:array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    return obj
}
function createEmployeeRecords(array2D){
    let newArray=[]
   for(const item of array2D){
    newArray.push(createEmployeeRecord(item))
   }
    return newArray
}
function createTimeInEvent(employee,dateStamp){
    const [dates,time]=dateStamp.split(" ")
    const [year,month,day]=dates.split("-")

    let timeInEvents={
        type:"TimeIn",
        hour:parseInt(time),
        date:`${year}-${month}-${day}`
    }
    employee.timeInEvents.push(timeInEvents)
    return employee
}
function createTimeOutEvent(employee,dateStamp){
    const [date,hour]=dateStamp.split(" ")
    const timeOutEvents={
        type:"TimeOut",
        hour:parseInt(hour),
        date:date
    }
    employee.timeOutEvents.push(timeOutEvents)
    return employee
}
function hoursWorkedOnDate(employee,dateStamp){
    const timeIn=employee.timeInEvents.find(e=>e.date=dateStamp)
    const timeOut=employee.timeOutEvents.find(e=>e.date=dateStamp)
    if(!timeIn || !timeOut){
        return 0;
    }
    return timeOut.hour-timeIn.hour
}
const employee = {
    firstName:"Alaric",
    familyName:"Justina",
    title:"SuperVisor",
    payPerHour:25,
    timeInEvents: [
      { type: 'TimeIn', hour: 9, date: '2023-06-15' },
      { type: 'TimeIn', hour: 10, date: '2023-06-16' }
    ],
    timeOutEvents: [
      { type: 'TimeOut', hour: 17, date: '2023-06-15' },
      { type: 'TimeOut', hour: 18, date: '2023-06-16' }
    ]
  };
  
  const wages = wagesEarnedOnDate(employee, '2023-06-15');
  console.log(wages); // Outputs: 8
function wagesEarnedOnDate(employee,date){
    return hoursWorkedOnDate(employee,date)*employee.payPerHour
}

function allWagesFor(employee){
   const datesWorked=employee.timeInEvents.map(e=>e.date)
   const totalWages=datesWorked.reduce((acc,date)=>{
    return acc+wagesEarnedOnDate(employee,date)
   },0)
   return totalWages;
}
function calculatePayroll(employees){
    const payRoll=employees.reduce((acc,employee)=>{
        return acc+allWagesFor(employee)
    },0)
    return payRoll;

}