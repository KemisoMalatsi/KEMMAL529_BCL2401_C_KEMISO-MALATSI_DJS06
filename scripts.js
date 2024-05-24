//  Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.

// A list of provinces:
const provinces = [
  'Western Cape', 
  'Gauteng', 
  'Northern Cape', 
  'Eastern Cape', 
  'KwaZulu-Natal', 
  'Free State'
];


// A list of names:
const names = [
  'Ashwin', 
  'Sibongile', 
  'Jan-Hendrik', 
  'Sifso', 
  'Shailen', 
  'Frikkie'
]; 

// A list of products with prices:
const products = [
  { product: 'banana',  price: "2" },
  { product: 'mango',   price: 6 },
  { product: 'potato',  price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee',  price: 10 },
  { product: 'tea',     price: '' },
]

// log each name and province to the console 
provinces.forEach( (province) => console.log(province));
names.forEach((name) => console.log(name))

// sort the name of the provinces
provinces.sort();
console.log(provinces)

// Remove the provinces containing "Cape"
console.log(newProvinces);

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`)
})

// create a new array of provinces with uppercase

const uppercaseProvince = provinces.map(item => item.toUpperCase());
console.log(uppercaseProvince);

// Create a new array that contains the length of each name.
const nameLength = names.map( names => console.log(names.length));

// Create a boolean array indicating if each name contains the letter 'S'
const containsS = names.map(name => name.split('').some(char => char.toLowerCase() === 's'));

console.log(containsS);

const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

// console.log(nameProvinceMapping);




console.log(
  // logging products
  products.map((p) => p.product.length <= 5),

  // filter name lengths
  products.filter((p) => p.product.length <= 5),

  // manipulate price
  "Total price:" +
    products
      .filter((p) => p.price && !isNaN(p.price))
      .reduce((sum, p) => sum + Number(p.price), 0),

  // combine arrays for product names
  products.reduce((str, p) => str + p.product, ""),

  // find prices that are extreme
  // Use Infinity for empty prices
  "Highest: " +
    Math.max(...products.map((p) => Number(p.price) || -Infinity)) +
    ". Lowest: " +
    Math.min(...products.map((p) => Number(p.price) || Infinity)),

  // Transformation Object
  Object.fromEntries(
    Object.entries(products).map(([key, { product, price }]) => [
      key,
      { name: product, cost: price },
    ])
  )
);

