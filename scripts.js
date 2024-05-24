//  Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.

// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']; 

// log each name and province to the console 
// provinces.forEach( (province) => console.log(province));
// names.forEach((name) => console.log(name))

// sort the name of the provinces
// provinces.sort();
// console.log(provinces)

// Remove the provinces containing "Cape"
// const newProvinces = provinces.filter(province => !province.includes("Cape"));
// console.log(newProvinces);

// names.forEach((name, index) => {
//   console.log(`${name} (${provinces[index]})`)
// })

// create a new array of provinces with uppercase

// const uppercaseProvince = provinces.map(item => item.toUpperCase());
// console.log(uppercaseProvince);

// Create a new array that contains the length of each name.
// const nameLength = names.map( names => console.log(names.length));

// Create a boolean array indicating if each name contains the letter 'S'
const containsS = names.map(name => name.split('').some(char => char.toLowerCase() === 's'));

console.log(containsS);


// A list of products with prices:
const products = [
  { product: 'banana',  price: "2" },
  { product: 'mango',   price: 6 },
  { product: 'potato',  price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee',  price: 10 },
  { product: 'tea',     price: '' },
]