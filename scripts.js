//  Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.

// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']; 

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


// A list of products with prices:
const products = [
  { product: 'banana',  price: "2" },
  { product: 'mango',   price: 6 },
  { product: 'potato',  price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee',  price: 10 },
  { product: 'tea',     price: '' },
]

console.log(
  // products
  products.map(product => product.product).join(', '),

  // Filter by name Length
  products.filter(product => product.name.length <= 5),

  // Price Manipulation
  products
    .filter(product => product.price.trim() !== '')
    .map(product => parseFloat(product.price))
    .reduce((acc, price) => acc + price, 0),

  // Concatenate Product Names
  products.reduce((acc, product) => acc + product.product + ', ', '').slice(0,-2),

  // Find extremes in prices
  (() => {
    const extremes = products.reduce((acc, product) => {
      const price = parseFloat(product.price);
      if (!isNaN(price)){
        if (price > acc.highest) acc.highest = price;
        if (price < acc.lowest) acc.lowest = price;
      }
      return acc;
    }, { highest: -Infinity, lowest: Infinity });
    return `Highest: $${extreme.highest}. Lowest: $${extremes.lowest}.`;
    })(),

  // Object Transformation
  products.reduce((acc, { product, price }) => {
    acc[product] = { name: product, cost: parseFloat(price) };
    return acc;
  }, {})
);

