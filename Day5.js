// Task 1 Movie Class
class Movie{
    title=""
    studio=""
    rating=""
    constructor(title,studio,rating="PG")
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    setTitle(title)
    {
        this.title=title
    }
    setStudio(studio)
    {
        this.studio=studio
    }
    setRating(rating)
    {
        this.rating=rating
    }
    getPG()
    {
        if(this.rating=="PG")
        return this.title 
    }

}
const movie1=new Movie("Good Bye","Twin Productions","PG13")
console.log(movie1.title);
console.log(movie1.studio);
console.log(movie1.rating);
const movie2=new Movie("Day after tomorrow","Engle Production");
console.log(movie2.rating);
console.log(movie2.getPG())
const movie3=new Movie("Casino Royale","Eon Productions","PG13")
console.log(movie3.title);
console.log(movie3.studio);
console.log(movie3.rating);

// Output
// Good Bye
// Twin Productions
// PG13
// PG
// Day after tomorrow
// Casino Royale
// Eon Productions
// PG13
// 1
// 2.2
// red
// blue

// Task 2 Circle Class

class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
            this.radius = radius;
    }
    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color = color;
    }
    get toString(){
        return `"Circle[radius=${this.radius},colors=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle(){
        return 2 * Math.PI * this.radius;
    }
}
var obj1 = new Circle(1.0,"red");

console.log(obj1.radiusCircle);
obj1.radiusCircle = 2.2
console.log(obj1.radiusCircle);

console.log(obj1.colorCircle);
obj1.colorCircle = "blue";
console.log(obj1.colorCircle);

console.log(obj1.toString);

console.log(obj1.areaCircle);

console.log(obj1.circumferenceCircle);

// Output
// "Circle[radius=2.2,colors=blue]"
// 15.205308443374602
// 13.823007675795091

//Task 3 Person Class
class Person{
    constructor(firstname,lastname,Dob,location)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.Dob = Dob;
        this.location = location;
    }
}
var person1 = new Person("Divya", "Bharathi", "2-06-1996" , "chennai");
var person2 = new Person("Swetha", "sekaran", "1-1-1998" , "chennai");
var person3 = new Person("Saratha", "Gokul", "9-10-1995" , "Salem");
var person4 = new Person("johnson", "George", "7-10-2001" , "Salem");
var person5 = new Person("Kumar", "Pandian", "8-7-1995" , "Ooty");

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.Dob);
console.log(person1.location);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.Dob);
console.log(person2.location);

console.log(person3.firstname);
console.log(person3.lastname);
console.log(person3.Dob);
console.log(person3.location);

console.log(person4.firstname);
console.log(person4.lastname);
console.log(person4.Dob);
console.log(person4.location);

console.log(person5.firstname);
console.log(person5.lastname);
console.log(person5.Dob);
console.log(person5.location);


console.log(`All the Person Names are \n "person1" : ${person1.firstname}
"person2":${person2.firstname}
"person3":${person3.firstname}
"person4":${person4.firstname}
"person5":${person5.firstname}`)

// Output
// Divya
// Bharathi
// 2-06-1996
// chennai
// Swetha
// sekaran
// 1-1-1998
// chennai
// Saratha
// Gokul
// 9-10-1995
// Salem
// johnson
// George
// 7-10-2001
// Salem
// Kumar
// Pandian
// 8-7-1995
// Ooty
// All the Person Names are
//  "person1" : Divya
// "person2":Swetha
// "person3":Saratha
// "person4":johnson
// "person5":Kumar


// Task 5 Uber Class
class UberPriceCalculator {
    constructor() {
      this.baseFare = 60;
      this.costPerKilometer = 15;
      this.costPerMinute = 2.5;
      this.bookingFee = 30;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      // Calculate the fare based on distance and time
      const distanceCost = this.costPerKilometer * distanceInKilometers;
      const timeCost = this.costPerMinute * timeInMinutes;
  
      // Calculate the total price
      const totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
  
      return totalPrice;
    }
  }
  
  // Example usage:
  const calculator = new UberPriceCalculator();
  const distanceInKilometers = 6.0; // Distance in kilometers
  const timeInMinutes = 10; // Time in minutes
  
  const estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);



  // Output
//   Estimated Uber price in INR: ₹205