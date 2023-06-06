 var inputStudents = [
    {name:"Saqib", dob:"10-12-1998", email: "saqib@gmail.com"},
    {name:"Zain", dob:"23-01-1999", email: "zain@gmail.com"},
    {name:"Ali", dob:"20-07-1996", email: "ali@gmail.com"}
 ]

      inputStudents["age"] = "20 years"


 var outputStudents = inputStudents.map((students) =>{
    var dob_full = students.dob;
    dob_full = dob_full.split("-");
    dob_full = +dob_full;
   console.log("dob_full is : " + dob_full);

    var dob_day = +dob_full[0];
    console.log(typeof dob_day + " " + dob_day);

    var dob_month = +dob_full[1];
    console.log(typeof dob_month + " " + dob_month);
    
    var dob_year = +dob_full[2];
    console.log(typeof dob_year + " " + dob_year);

    var current_date = new Date ();
    console.log("current_date is : " + current_date);

    var current_day = +current_date.getDate();
    console.log(typeof  current_day + " " + current_day);

    var current_month = +current_date.getMonth();
    console.log(typeof current_month + " " + current_month);

    var current_year = +current_date.getFullYear();
    console.log(typeof current_year + " " + current_year);

    
//    var diffDate = {
//       inDays : function (dob_full,current_year) {
//          var day2 = dob_full.getTime();
//          var day1 = current_year.getTime();

//          return Math.floor((day2 - day1)/ (24 * 3600 * 1000))
//       },
//       inWeek : function (dob_full,current_year) {
//          var day2 = dob_full();
//          var day1 = current_year.getTime();

//          return parseInt((day2 - day1)/ (24 * 3600 * 1000 * 7))
//       },
//       // inDays : function (dob_full,current_year) {
//       //    var day2 = dob_year.getTime();
//       //    var day1 = current_year.getTime();

//       //    return Math.floor((day2 - day1)/ (24 * 3600 * 1000))
//       // },
//       // inDays : function (dob_full,current_year) {
//       //    var day2 = dob_year.getTime();
//       //    var day1 = current_year.getTime();

//       //    return Math.floor((day2 - day1)/ (24 * 3600 * 1000))
//       // },
//    }
// console.log(diffDate);
   //  var difference_between_date = dob_full - current_date; 
    

   //  console.log("difference_between_date is : " + difference_between_date);

   //  inputStudents.push(() => {
   //    this.age = "20 years old";
   //  })
      // var studentsOutput = () => {
      //    inputStudents.push(Age = "20 years old");
      // }

      // console.log(studentsOutput);
 }
 )

 console.log(inputStudents);
 