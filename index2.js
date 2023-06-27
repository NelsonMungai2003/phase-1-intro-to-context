// // Your code here
// function createEmployeeRecord(array){
//     const employee={
//         firstName:array[0],
//         familyName:array[1],
//         title:array[2],
//         payPerHour:array[3],
//         timeInEvents:[],
//         timeOutEvents:[]
//     }
// return employee
// }
// function createEmployeeRecords(nestedArray){
//     const arrayOfObjects=[]
//     for(const item of nestedArray){
//         arrayOfObjects.push(createEmployeeRecord(item))
//         console.log("done")
//     }
//     console.log(arrayOfObjects)
// }
// const nestedArray=[["Jasper","Justina","Supervisor",12],["Francis","peterson","Supervisor",12]]
// createEmployeeRecords(nestedArray)
// function createTimeInEvent(employee,dateStamp){
// // add object with keys to the timeInEvent array on object
// const [date,time]=dateStamp.split(' ')
// const [year,month,day]=date.split('-')
// const [hour,min]=time.match(/\d+/g)
// const timeInEventObj={
//     type:"TimeIn",
//     hour:parseInt(hour),
//     date:`${year}-${month}-${day}`
// }
// employee.timeInEvents.push(timeInEventObj)
// return employee
// }
// //createTimeOutEvent
// function createTimeOutEvent(employee,dateStamp){
//     // add object with keys to the timeInEvent array on object
//     const [date,time]=dateStamp.split(' ')
//     const [year,month,day]=date.split('-')
//     const [hour,min]=time.match(/\d+/g)
//     const timeOutEventObj={
//         type:"TimeOut",
//         hour:parseInt(hour),
//         date:`${year}-${month}-${day}`
//     }
//     employee.timeOutEvents.push(timeOutEventObj)
//     return employee
// }
// function hoursWorkedOnDate(employe,dateStamp){
//     const timeInEvent=employe.timeInEvents.find(e=>e.date===dateStamp)
//     const timeOutEvent=employe.timeOutEvents.find(e=>e.date===dateStamp)
//     if((!timeInEvent|| !timeOutEvent)||(timeInEvent===timeOutEvent)){
//         return 0;
//     }
//     const timeInHour=timeInEvent.hour;
//     const timeOutHour=timeOutEvent.hour;
//     const hoursWorked=(timeOutHour-timeInHour)
// return hoursWorked;
// }
// // Usage example
// const employee = {
//     name: 'John Doe',
//     timeInEvents: [
//       { type: 'TimeIn', hour: 9, date: '2023-06-15' },
//       { type: 'TimeIn', hour: 10, date: '2023-06-16' }
//     ],
//     timeOutEvents: [
//       { type: 'TimeOut', hour: 17, date: '2023-06-15' },
//       { type: 'TimeOut', hour: 18, date: '2023-06-16' }
//     ]
//   };
  
//   const hoursWorked = hoursWorkedOnDate(employee, '2023-06-15');
//   console.log(hoursWorked); // Outputs: 8


// QUESTION 
// -Given an array of int (return indices of 2 numbers such that 
// they add up to a specific target)
function hasTargetSum(nums,target){
    const comp=new Set()
    const len=nums.length
    for(let i=0;i<len;i++){
        if(comp.has(target-nums[i])){
            return true
        }
    comp.add(nums[i])
    }
    return false
}

const nums=[2,7,2,7]
const target=9
console.log(hasTargetSum(nums,target))
// test cases 
// target=>9
// cc:[].[]
// cc:[1,1]=>[]
// [2,7,2,7]=>[0,1]