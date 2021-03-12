const teaOrder = {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 3
};

const { price, quantity, teaName } = teaOrder;

const { brewTemp = 175 } = teaOrder;

const { teaName: tea } = teaOrder;

// ------------------- //

function checkout(tea) {
    const {quantity, price} = tea;
    return quantity * price;
}

checkout(teaOrder)

// ------------------- //

const students = [
    {name: ''}
]

const [topStudent] = students;

const { Rated: { rating, advisory }} = movie;
const { 
    Ratings: [ 
        { Value: imdbRating },
        { Value: rtRating },
        { Value: metaRating} 
    ] 
} = movie;

// swapping 
let delicious = 'Mayo'
let disgusting = 'Whipped Cream'

let both = [delicious, disgusting]
[disgusting, delicious] = both;

// swap syntax
[disgusting, delicious] = [delicious, disgusting]