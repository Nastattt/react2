import './App.css';
import { userState, use } from 'react';

// State
import './App.css';
import React, { useState } from 'react'; 

function App() {
    let constName = 'Vasya';

    const state = useState('prod');
    const name = state[0];
    const setName = state[1];
    
    const [age, setAge] = useState(0); 
    
    const [inCart, setInCart] = useState(false);


    const [value1,setValue1] = useState(0)
    const [value2,setValue2] = useState(0)
    const [res, setRes] = useState()

    function changeName(name) {
        constName = name;
        setName(name);
    }

    function changeAge() {
        setAge(age + 1);
    }
    const[value,setValue] = useState('')

    function changeValue(event){
        setValue(event.target.value)
    }

    function summElems(){
        setRes(+value1 + +value2)
    }

    

    return (
        <>
        <input type="text" placeholder='value1' onChange={(event) => setValue1(event.target.value)}
        value={value1}/>
         <input type="text" placeholder='value2' onChange={(event) => setValue2(event.target.value)}
        value={value2}/>

        <button onClick={summElems}>Result</button>
        <p>{res}</p>

            {/* <p>Продукт {inCart ? 'в корзине ' : 'не в корзине'}</p>
            <button onClick={() => setInCart(!inCart)}>Добавить в корзину</button>
            <p>{age}</p>
            <p>{name}</p>
            <p>{constName}</p>
            <button onClick={changeAge}>change</button>
            <hr/>
            <button onClick={() => changeName('Petya')}>change</button>
            <input type="text" placeholder='Name' value={value} onChange={changeValue}/> */}
        </>
    );
}

export default App;







































// ВВедение в React
// const products = [
//     {id: 1, title: 'Product1', description: 'Descriprtion1', price: 100},
//     {id: 2, title: 'Product2', description: 'Descriprtion2', price: 200},
//     {id: 3, title: 'Product3', description: 'Descriprtion3', price: 300},
//     {id: 4, title: 'Product4', description: 'Descriprtion4', price: 400},
//     {id: 5, title: 'Product5', description: 'Descriprtion5', price: 500},
//     {id: 6, title: 'Product6', description: 'Descriprtion6', price: 600},
//     {id: 7, title: 'Product7', description: 'Descriprtion7', price: 700},
//     {id: 8, title: 'Product8', description: 'Descriprtion8', price: 800},
//     {id: 9, title: 'Product9', description: 'Descriprtion9', price: 900},
//     {id: 10, title: 'Product10', description: 'Descriprtion10', price: 1000},
// ]

// let isAuth = true

// function App(){
//     let printProd = products.map((product,index) =>{
//         return (
//             <div key={index}>
//                 <p>{product.title}</p>
//                 <p>{product.description}</p>
//                 <p>{product.price}</p>
//                 {isAuth && <button>Order</button>}
//             </div>
//         )
//     })

//     return (
//         <>
//         <div className='row'>
//             {printProd}
//         </div>
       
//         </>
//     )
// }
// function App() {
//   const elem = <p className='App-logo'>I learn react</p>;
//   const obj = {1:'one',2:'two',3:'tree'}
//   const part =(
//     <>
//     <p>P</p>
//     <div>
//         <button>Send</button>
//     </div>
//     </>

//   ) 
//   const status = true
// //   arr = [1,2,3]  
// // const main = <main> Content</main>
// // return main

//   return (
//     <div className="App">
//       {elem}
//       <p className={status ?'new' :''}> I love React</p>
//       I love React
//       <input type="text" placeholder='fghbn'/>
//       {/* <p>{arr[1]}</p> */}
//       <p>{obj[3]}</p>
      
//     </div>
    
//   );
// // }

// function App(){
//     let text;
//     const show = true
//     const text2 = 'Text2'
//     if (show){
//         text = 'gvhbjnk'
//     }
//     else{
//         text = '123455'
//     }

//     function sqrdfj(num){
//         return num**2
//     }

//     const res = sqrdfj(28)

//     function btnClick(){
//         alert('Hello')
//     }

//     function helloUser(user=''){
//         alert(`"Hello"${user}`)
//     }

//     function ev(event){
//         console.log(event)
//     }

//     let arr =[]

//     // function createMass(){
//         for (let i=0; i<10;i++){
//             arr.push = <p>{i}</p>
//         }

//         // const arr1 = [1,2,3]
//         // let newArr = arr1.map((item,index) => {
//         //    return (
//         //     div
//         // })
//         //    )
           
//     // }

//     return (
//         <div>
//             {text}
//             {show && <p>text2</p>}
//             <p>{sqrdfj(15)}</p>
//             <p>{res}</p>
//             <button onClick={btnClick}>Click</button>
//             <button onClick={() => helloUser('user1')}>User1</button>
//             <button onClick={(event) => ev('ghjklknbvbnm',event)}>Click1</button>
//         </div>
//     )
// }


// export default App;
