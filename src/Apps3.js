import React from 'react';
import './App.css';
import axios from 'axios';
import CategoryItem from './components/categories/CategoryItem';
import Plant from './components/plants/Plant';

const CATEGORIES_FETCH_DELAY = 8000;
const PLANTS_FETCH_DELAY = 6000;

class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      plants: [],
      successCategories: true,
      successPlants: true,
      inProgress: true,
    };
  }
  //metoda wywowlywana PO METODZIE render()
  componentDidMount() {
    this.fetchCategories();
    this.fetchPlants();
    //if(this.fetchCategories && this.fetchPlants)

  }

  delayFetch(ms, method) {
    return new Promise((resolve, reject) => setTimeout(() => method(resolve, reject), ms));
  }

  fetchCategories() {
    const requestUrl = 'http://lgentle-tor-07382.herokuapp.com/categories/';

    return this.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
        //Tworzona jest niejawnie obietnica zwrotu danych - obiekt Promise - jesli zwroci .then lub error .catch
        axios.get(requestUrl)
        .then((response) => {
          //okreslamy ze tu przekazamy dane zwrocone przez axiosa
          const data = response.data;
          
          //tutaj przejdzie iteracja po kategoriach i bedzie wyciagac nazwy itemow dla danej kategorii
          const categories = data.map((item) => item.name);
          
          //Po przejsciu na nowo zostaje ustawiony stan komponentu 
          this.setState({categories});
          
          //resolve 
          resolve();
        })
        .catch((error) => {
          this.setState({successCategories: false});
          reject();
        });
    });
  }

  fetchPlants() {
     //Pod tym adresem sa kwiatki - w chwili obecnej w bazie jest 1 element 
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/plants/';

    return this.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const plants = data.map((item) => item.name);
          console.log(data)
          this.setState({ plants });
          resolve();
        })
        .catch((error) => {
          this.setState({successPlants: false});
          reject();
        });
    });
  }

  render() {
    const categories = this.state.categories;
    const plants = this.state.plants;
    let promisePlanst;
    let promiseCategories;

    return (
       //React Fragment  
      <React.Fragment>
        <div className="app-container">
            {
                this.state.inProgress && this.fetchPlants &&
                <p>Trwa ladowanie danych kwiatkow...</p>
            
            }     
            {
            this.state.successPlants &&
            <div className="plants">
              {
                plants.map((plant, index, arr) =>
                  <Plant
                    name={plant}
                    key={index}
                  />
                )
              }
            </div>
            }


          {
            !this.state.successPlants &&
            <p>Nie udalo sie pobrac kategorii</p>
          }
          
          
          {
            !this.state.successCategories &&
            <p>Nie udalo sie pobrac kategorii</p>
          }
          {       
            this.state.successCategories &&
            <div className="categories">
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
          }
        </div>
      </React.Fragment>
    )
  }
}


export default App;
