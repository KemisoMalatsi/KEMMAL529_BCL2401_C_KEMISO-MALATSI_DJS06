/* 
 ****Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console
 */




// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']; 

// log each name and province to the console 
// provinces.forEach( (province) => console.log(province));
// names.forEach((name) => console.log(name))

// names.forEach((name, index) => {
//   console.log(`${name} (${provinces[index]})`)
// })

// create a new array of provinces with uppercase

const uppercaseProvince = provinces.map(item => item.toUpperCase());
console.log(uppercaseProvince);

// A list of products with prices:
const products = [
  { product: 'banana',  price: "2" },
  { product: 'mango',   price: 6 },
  { product: 'potato',  price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee',  price: 10 },
  { product: 'tea',     price: '' },
]