import React from 'react';
import './App.css';
import CategoryItem from './components/categories/CategoryItem';
import axios from 'axios';

class App extends React.PureComponent {

  constructor(props) {
    super(props);
//Wartosc w konstruktorze sluzy do zainicjalizowania listy ktora bedzie napelniana danymi z bazy 
    this.state = {
      categories: [],
      success:true
    }
    
  }

  componentDidMount() {
    // Ustawiamy zmienna do pobrania danych w formacie json z bazy danych 
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/?format=json';


    // pobieramy dane przy pomocy get podstawiajac adres url w stalej requestURL
    axios.get(requestUrl)
      // jesli sie powiedzie dla then jesli sie nie powiedzie wywolane zostanie catch
      .then((response) => {
        const data = response.data;
        console.log(data);
        const categories = data.map((item) => item.name);
        console.log(categories);
        this.setState({ categories });

      })
      // BYl blad 
      .catch((error) => {
         this.setState({success:false})
        //alert("Data couldn't be retrieved");
      });
  }

  render() {
    const categories = this.state.categories;
    
    return (
      <div className="app-container">
        
        {
          //jesli jest false nie powinno wyswietlac 
          !this.state.success &&
          <p>Nie wyświetlany element</p>
        }

        {
          categories.map((item, index, arr) =>
            <CategoryItem
              category={item}
              label='category'
              key={index}
              isLastItem={arr.length - 1 === index}
              index={index}
            />
          )
        }

       
      </div>
    )
  }
}


export default App;
