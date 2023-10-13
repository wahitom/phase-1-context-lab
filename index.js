/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

/*  const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
} */
 
// Define an object to represent an employee record
  

  function createEmployeeRecord(employeeData){

    return{
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents:[] ,
    }

  }

  //create employee records from an array of arrays 
  function createEmployeeRecords(employeesData){
    return employeesData.map(createEmployeeRecord)
  }

  //time in event 
  function createTimeInEvent(dateTime){
    const[date, hour] = dateTime.split(' ');
    this.timeInEvents.push({
      type: 'TimeIn', date,
      hour: parseInt(hour, 10)
    })
    return this; 
  }

  //time out event 
  function createTimeOutEvent(dateTime){
    const [date, hour] = dateTime.split (' ');
    this.timeOutEvents.push({
      type: 'TimeOut', date,
      hour: parseInt(hour, 10)
    });
    return this;
  }
  
  //calculate hrs worked on a specific date 

  function hoursWorkedOnDate(date){
    const timeInEvent = this.timeInEvents.find((event) => event.date === date);
    const timeOutEvent = this.timeOutEvents.find((event) => event.date === date);
    return(timeOutEvent.hour - timeInEvent.hour) / 100;
  }

  //pay Earned 

  function wagesEarnedOnDate(date){
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour
  }

  // calculate all wages for an employee
  function allWagesFor() {
    const dates = this.timeInEvents.map((event) => event.date);
    const totalWages = dates.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
    return totalWages;
  }

  //employee records frm cvs 
  function createEmployeeRecordsFromCsv(csvData){
    return csvData.map((record) => createEmployeeRecord(record)) 
  }

  //find employee with first name
  function findEmployeeByFirstName(employee, firstName){
    return employee.find((employee) => employee.firstName === firstName)
  }

  //calculate payroll for a list of employee records
  function calculatePayroll(employees){
    const totalPayroll = employees.reduce((total, employee) => total + allWagesFor.call(employee), 0)
    return totalPayroll;
  }

  const csvDataEmployees = [
        ["Thor", "Odinsson", "Electrical Engineer", 45],
        ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
        ["Natalia", "Romanov", "CEO", 150],
        ["Darcey", "Lewis", "Intern", 15],
        ["Jarvis", "Stark", "CIO", 125],
        ["Anthony", "Stark", "Angel Investor", 300]
  ];

  const csvTimesIn = [
        ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
        ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
        ["Natalia", ["2018-01-03 1700", "2018-01-05 1800", "2018-01-03 1300"]],
        ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
        ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
        ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
  ]

  const csvTimesOut = [
        ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
        ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
        ["Natalia", ["2018-01-03 2300", "2018-01-05 2300", "2018-01-03 2300"]],
        ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
        ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
        ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
  ]

const employeeRecords = createEmployeeRecordsFromCsv(csvDataEmployees);
//console.log(employeeRecords)

employeeRecords.forEach((record ) => {
  const timesInData = csvTimesIn.find((data) => data[0] === record.firstName)
  const timesOutData = csvTimesOut.find((data) => data[0] === record.firstName)

  timesInData[1].forEach((timeIn) => createTimeInEvent.call(record, timeIn));
  timesOutData[1].forEach((timeOut) => createTimeOutEvent.call(record, timeOut));
})

/* const totalPayroll = calculatePayroll(employeeRecords);
console.log(`Total Payroll: $${totalPayroll}`); */



