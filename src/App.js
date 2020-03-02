import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './ExercFirstComponent';
import FunctionalComponent from './FunctionalComponent';
import './Functionalcomponent.css';
import ClassComponent from './ClassComponent';
import './Classcomponent.css'
import CategoryItem from './components/categories/CategoryItem'


class App extends Component {
 

  render() {
    let categories=['Cacti','Tillansia','Succulent','Orchids'];
    // METODA FOR EACH JEST ITERATOREM
    //categories.forEach()
    function inner(item,index,arr){
      console.log(item);
    }
//Jak stworzyuc Arrow function 
// 1. const inner=function(item,index, arr){
//   console.log(item)

// }import React from 'react';
import './App.css';
import CategoryItem from './components/categories/CategoryItem';

class App extends React.PureComponent {

  render() {
    const categories = ['Cacti', 'Tillandsia', 'Succulents', 'Orchids', 'm'];

    return (
      <div className="app-container">
        {
          categories.map((item, index) =>
            <CategoryItem category={item} label='category' key={index} />
          )
        }
      </div>
    )
  }
}


export default App;
// categories.forEach
// // 2. Usuwamy zbedene elementy 
// const inner=function(item){
//   console.log(item)
// }

// 3.Zastyepujemy function porzez arrow function tj =>
// const inner=(item)=>{
//   console.log(item)
// };
// categories.forEach

// // 4.Poniewaz mamy tylko 1 parametr do funkcji, usuwamy nawiasy obejmujace parametry
// const inner=(item)=>{
//   console.log(item)
// };
// categories.forEach(inner);

// //5. Poniewaz w xiele funkcji mamy jedno wywolanie mozemy pozbyc sie nawiasow jklamrowych 
// const inner=(item)=>console.log(item);
// ;


    //Arrow function
   // const inner=item =>console.log(item);
 //6. Funkcja jest krotka i mozemy ja przekazac od razu do forEach    
    //categories.map();
    categories.forEach(item =>console.log(item));
// for Each tylkoprzechodzi przez tablice zwraca za to map()

    return (
      <div className='app-container'>
        {
          //1.Mega przydatne do iterowania bez udzialu petli
          //Metoda forEach
          categories.map(item=><CategoryItem category={item} label="Category"/>)
        }
{/* 
    Szczegolowa rozpiska jak to dziala
        {
          categories.map(function(item,index,arr)){
              return (<CategoryItem={item} label="Category"/>)
          }
        } 
         */}


        <CategoryItem name='Cacti' label='Category'/>
        <CategoryItem name='Tilantsia' label='Category'/>
        <CategoryItem name ='Succulent'  label='Category'/>
        <CategoryItem name='Orchids' label='Category'/>
        
      </div>
    );
  }
}

export default App;
