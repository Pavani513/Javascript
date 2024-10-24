var person = {
firstname : "chinni", 
lastname : "pulicharla", 
age : 22
}
console.log(Object.entries(person)[0])
person.city = "newyork";
console.log(person)

// Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.

var product ={
    name : "realme",
    price : 24000,
    instock : true
}
product.price = 19000;
console.log(product)
delete(product.instock)
console.log(product)

// 3.Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.


var library ={
    fantasy_genre : ["algebra","probability"],
    mystery_genre:["history","geography"]  
}
library.scienceFiction = ["avatar","star wars"]
console.log(library.fantasy_genre[0])
delete(library.mystery_genre)
console.log(library)

// 4.Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.

var user ={
    username : "pavani",
    email : "pavani@gmail.com"
}
var address ={
    city : "guntur",
    state : "andhra pradesh",
    zip : 522001
}
Object.freeze(user)
user.email = "pulicharla@gmail.com"
console.log(Object.isFrozen(user))
user.phone = "0123456789"
console.log(user)

// 5.Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.isSealed().
// Modify the price property, and check if the object is still extensible using Object.isExtensible()

var car ={
    make : "ford",
    Model : "jetta",
    price : 2400000
}
Object.seal(car)

delete(car.make)
console.log(Object.isSealed(car))
car.price =1900000
console.log(car)
console.log(Object.isExtensible(car))

const store = {
    name: "SuperMart",
    products: {
      electronics: {
        phones: {
          apple: {
            iPhoneX: { price: 999, stock: 20 },
            iPhone12: { price: 1099, stock: 15 },
          },
          samsung: {
            galaxyS21: { price: 799, stock: 25 },
            galaxyNote20: { price: 999, stock: 10 },
          },
        },
        laptops: {
          dell: {
            XPS13: { price: 1200, stock: 10 },
            Inspiron15: { price: 800, stock: 30 },
          },
          hp: {
            SpectreX360: { price: 1300, stock: 5 },
            Pavilion15: { price: 750, stock: 20 },
          },
        },
      },
      groceries: {
        fruits: {
          apples: { price: 2, stock: 100 },
          bananas: { price: 1, stock: 150 },
        },
        vegetables: {
          carrots: { price: 1.5, stock: 200 },
          spinach: { price: 1, stock: 100 },
        },
      },
    },
  };
  console.log(store.products.groceries.vegetables.spinach.stock);
  console.log(store.products.electronics.laptops.hp.Pavilion15.price);
  

  


var fruits = ["Orange", "Apple", "Mango"];
fruits.push("kiwi","guava")
fruits.pop("")

fruits.unshift("cherry","papaya")
var rev_str=fruits.reverse()

var fruits = ["Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Mango"))
var fruits = ["Orange", "Apple", "Mango"];
console.log(fruits.includes("Orange"))
var fruits = ["Orange", "Apple", "Mango"];
console.log(fruits.sort());

var fruits_join =["Orange", "Apple", "Mango"];
console.log(fruits_join(","));

var fruits_1 = ["Orange", "Apple", "Mango"];
var fruits_2 = ["kiwi", "guava", "papaya"];
var combinedFruits = fruits_1.concat(fruits_2);
combinedFruits.sort();
combinedFruits.pop();
console.log(combinedFruits);
