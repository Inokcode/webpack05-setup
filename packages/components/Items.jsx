import { useState } from "react";
const itemOne ={
    apple: 2,
    orange: 2,
    mango: 1,
}


const itemTwo ={
    ...itemOne,
    cherry: 2,
    grape: 1,
}

console.log(itemOne);
console.log(itemTwo);

const Items = () => {
    const [fruits, setFruits] = useState(itemOne);
  
    return (
      <div>
        <h3>Current Recipe:</h3>
        <button onClick={() => setFruits(itemOne)}>Fruit Box one</button>
        <button onClick={() => setFruits(itemTwo)}>
        Fruit Box Two
        </button>
  
        <ul>
          {Object.keys(fruits).map((item) => (
            <li key={item}>
              {item}: {fruits[item]}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Items;