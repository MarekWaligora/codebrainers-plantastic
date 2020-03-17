import React from 'react';
import './App.css';
import axios from 'axios';
import { Button, Input, Label } from 'reactstrap';
import CategoryItem from './components/categories/CategoryItem';
import Plant from './components/plants/Plant';

const CATEGORIES_FETCH_DELAY = 50;
const PLANTS_FETCH_DELAY = 50;

class App extends React.PureComponent {

  constructor(props) {
    //console.log('constructor');
    super(props);
    this.state = {
      categories: [],
      plants: [],
      successCategories: undefined,
      successPlants: undefined,
      inProgress: true,
      //value: '',
      plantInput:{plantName:'' , categoryType: '',categoryDesc:'',
          fertilizing:'',exposure:'',humidity:'',temperature:'',blooming:'',watering:'',
          difficulty:'',room:'',lastWatered:'',lastFertilized:''
          }
     
    };
  }

  componentDidMount() {
    console.log('componentDidMount');

    const stopProgress = () => {
      console.log('stopProgress');
      this.setState({ inProgress: false });
    };

    const allPromises = Promise.allSettled([
      this.fetchCategories(),
      this.fetchPlants()
    ]).then(stopProgress);

  }

  delayFetch(ms, method) {
    return new Promise((resolve, reject) => setTimeout(() => method(resolve, reject), ms));
  }

  fetchCategories() {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';

    return this.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const categories = data.map((item) => item.name);
          const successCategories = true;
          this.setState({categories, successCategories});
          resolve();
        })
        .catch((error) => {
          this.setState({successCategories: false});
          reject();
        })
        .finally(() => {
          console.log('Resolved');
        });
    });
  }

  fetchPlants() {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/plants/';

    return this.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const plants = data.map((item) => item.name);
          const successPlants = true;
          this.setState({ plants, successPlants });
          resolve();
        })
        .catch((error) => {
          this.setState({successPlants: false});
          reject();
        });
    });
  }

  /* inputOnChange = (event) => {
    this.setState({ value: event.currentTarget.value});
  }; */


inputOnChange = (e,name) =>{
  //Tworzymy klona obiektu plantInput
  const plantInput ={...this.state.plantInput}
  //Dla wlasciwosci plantName w obiekcie plantInput ustawiamy wartosc wprowadzona w polu Input
  plantInput[e.currentTarget.name]=e.currentTarget.value
  //kiedy juz to jest ustawiamy state dla obiektu plantInput
  this.setState({plantInput})
  // Sluzy do wyswietlenia i pokazania stanu plantInput.plantName 
  console.log({plantInput})
}  

  /* inputOnChange = (event,name,value) => {
    this.setState({ value: event.currentTarget.valueField});
  };  */

  render() {
    const {
      categories,
      plants,
      inProgress,
      successCategories,
      successPlants,
      value,
    } = this.state;

    /* console.log('Currently in render  ' + this.state.value); */


    return (
      <React.Fragment>
        <form method="GET">
          <Label for="plantName">Plant name:</Label>
          <Input
            id="plantName"
            type="text"
            name="plantName"
            value={this.state.plantInput.plantName}
            onChange={this.inputOnChange}
          />

          <Label for="categoryType">Category Type:</Label>
          <Input
            id="categoryType"
            type="text"
            value={this.state.plantInput.categoryType}
            name="categoryType"
            onChange={this.inputOnChange}
          />
 
          <Label for="category-slug">Slug for categories: </Label>
          <Input
            id ="category-slug"
            type="text"
            value={this.state.plantInput.category}
            name="categoryDesc"
            onChange={this.inputOnChange}
          />  
          <Label for="watering">Watering in days :</Label>
          <Input
            id="watering"
            type="text"
            name="watering"
            value={this.state.watering}
            onChange={this.inputOnChange}
          />  
          <Label for="fertilizing">Fertilizing in days</Label>
          <Input
            id="fertilizing"
            type="text"
            value={this.state.fertilizing}
            name="fertilizing"
            onChange={this.inputOnChange}
          />  
          <Label for="exposure"> Exposure </Label>
          <Input
            id="exposure"
            type="text"
            name="exposure"
            value={this.state.exposure}
            onChange={this.inputOnChange}
          />  
          <Label for="humidity">Humidity type: </Label>
          <Input
            id="humidity"
            type="text"
            value={this.state.humidity}
            name="humidity"
            onChange={this.inputOnChange}
          />  
          
          <Label for="temperature">Temperature type: </Label>
          <Input
            id="temperature"
            type="text"
            value={this.state.temperature}
            name="temperature"
            onChange={this.inputOnChange}
          />  
          <Label for="blooming">Blooming: </Label>
          <Input
            id="blooming"
            type="text"
            name="blooming"
            value={this.state.blooming}
            onChange={this.inputOnChange}
          />  
          <Label for="difficulty">Difficulty level: </Label>
          <Input
            id="difficulty"
            type="text"
            name="difficulty"
            value={this.state.difficulty}
            onChange={this.inputOnChange}
          />  
          <Label for="room">Room for flower</Label>
          <Input
            id="room"
            type="text"
            name="room"
            value={this.state.difficulty}
            onChange={this.inputOnChange}
          />  
          <Label for="last-watered" >Last wateres</Label>
          <Input
          id="last-watered"
          type="datetime"
          name='lastWatered'
          value={this.state.difficulty}
          onChange={this.inputOnChange}
          />  
          <Label for='last-fertilized'>Last fertilized: </Label>
          <Input
          id="last-fertilized"
          type="datetime"
          value={this.state.lastFertilized}
          name='lastFertilized'
          onChange={this.inputOnChange}
          />  
          <Button type="submit" className="mt-3">Wyślij formularz</Button>
        </form>
        <div className="app-container">
          {
            inProgress && <p>Loading data...</p>
          }
          {
            successCategories === false &&
            <p>Nie udało się pobrać Kategorii</p>
          }
          {
            successPlants === false &&
            <p>Nie udało się pobrać Kwiatow</p>
          }
          {
            successPlants &&
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
            successCategories &&
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
