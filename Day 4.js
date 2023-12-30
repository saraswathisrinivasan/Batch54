/* Question No 1: For Given JSON iterate over all for loops (for, for in, for of, for each) */
//create 3 array objects with 3 attributes name, age and company
let obj=[
    {person:"Saraswathi",age:"2",company:"Guvi"},
    {person:"Ravikumar",age:"7",company:"Guvi Geek"},
    {person:"Devaki",age:"10",company:"Guvi Geek Networks"}
 ]


 console.log("\nPrint array object details USing for loop")
 // Iterate object data using for loop
 for(let i=0;i<obj.length;i++)
 {
    console.log("Person Name:"+obj[i].person +"\n"+"Age:"+obj[i].age+"\n"+"Company:"+obj[i].company);
 }
 /* Output
 Person Name:Saraswathi
Age:2
Company:Guvi
Person Name:Ravikumar
Age:7
Company:Guvi Geek
Person Name:Devaki
Age:10
Company:Guvi Geek Networks */

//Iterate array object data using for each loop
console.log("\nPrint array object details USing for Each Loop")
obj.forEach(details=> {
   console.log("Person Name :"+details.person+"\n"+ "Age:"+details.age+"\n"+"Company:"+details.company);
})
/* Output
 Person Name:Saraswathi
Age:2
Company:Guvi
Person Name:Ravikumar
Age:7
Company:Guvi Geek
Person Name:Devaki
Age:10
Company:Guvi Geek Networks */

//Iterate array object data using for in loop
console.log("\nPrint array object details USing for in loop")
for(const key in obj)
{
   console.log("Person Name :"+obj[key].person+"\n"+ "Age:"+obj[key].age+"\n"+"Company:"+obj[key].company);
}
/* Output
 Person Name:Saraswathi
Age:2
Company:Guvi
Person Name:Ravikumar
Age:7
Company:Guvi Geek
Person Name:Devaki
Age:10
Company:Guvi Geek Networks */

//Iterate array object data using for of loop
console.log("\nPrint array object details USing for of loop")
for(const detail of obj)
{
   console.log("Person Name :"+detail.person+"\n"+ "Age:"+detail.age+"\n"+"Company:"+detail.company);
}
/* Output
Print array object details USing for of loop
Person Name :Saraswathi
Age:2
Company:Guvi
Person Name :Ravikumar
Age:7
Company:Guvi Geek
Person Name :Devaki
Age:10
Company:Guvi Geek Networks */

/* Question No 2: Create your own resume data in Json format */
let myProfile={
   "Personal Details": 
   {
      "Name": "S.Saraswathi",
      "Email": "saraswathisrini@gamil.com",
      "Phone": 9382301303,
      "Degree": "P.hD",
      "Location": 
      {
            "Address": "No 7, Navamani Street",
            "PostalCode": 600044,
            "City": "Chennai",
            "State": "Tamilnadu",
            "Country": "India"
      },
      "Experience": 
      [
         {
            "College Name": "Saveetha University",
            "Designation": "Professor",
            "From ": "04/12/2022",
            "endDate": "Till Date",
         },
      ],
   },
   "Academic Details": 
   [
     {
       "College Name": "TAnna University",
       "Department": "Computer Science & Engineering ",
       "Study Type": "Part Time",
       "Passed out": 2021
      }
   ],
   "Software Skills": 
   [
     {
       "Software Names": "Java,C,C++,Python",
       "Level": "Beginer",
       "Thesis": 
       [
         "Anomaly Detection Wireless Sensor Networks"
       ]
     }
   ],
   "Known Languages": 
   [
     {
       "language": "Tamil,English",
     }
   ],
}
 console.log("*******************************My Profile*****************************")
 console.log(myProfile);