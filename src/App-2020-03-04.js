import React from 'react';
import './App.css';
import CategoryItem from './components/categories/CategoryItem';
import axios from 'axios';
import Plant from './components/plant/Plant'

class App extends React.PureComponent {

  constructor(props) {
    super(props);
//Wartosc w konstruktorze sluzy do zainicjalizowania listy ktora bedzie napelniana danymi z bazy 
    this.state = {
      categories: [],
      success:true,
      plants:[]
    }
    
  }
  fetchCategories(){
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/?format=json';

    // Ustawiamy zmienna do pobrania danych w formacie json z bazy danych
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
      // BYl blad zmienila sie wartosc stanu dla success ustawiamy nowy stan 

      .catch((error) => {
         this.setState({success:false})
        //alert("Data couldn't be retrieved");
      });
  }

  fetchPlants(){
    const requestURL='http://gentle-tor-07382.herokuapp.com/categories/?format=json'

    axios.get(requestUrl)
    // jesli sie powiedzie dla then jesli sie nie powiedzie wywolane zostanie catch
    .then((response) => {
      const data = response.data;
      console.log(data);
      const plants = data.map((item) => item.name);
      console.log(plants);
      this.setState({ plants });

    })
    // BYl blad zmienila sie wartosc stanu dla success ustawiamy nowy stan 

    .catch((error) => {
       this.setState({success:false})
      //alert("Data couldn't be retrieved");
    });
  }




  componentDidMount() {
     
    this.fetchCategories;
    
    
  }

  render() {
    const categories = this.state.categories;
    
    return (
      //
     <React.Fragment>
      <Plant 
      //to jest atrybut zwany name
        name="kwiatek"
      />
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
      </React.Fragment>
    )
  }
}


export default App;
