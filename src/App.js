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
    console.log('constructor');
    super(props);
    this.state = {
      categories: [],
      plants: [],
      successCategories: undefined,
      successPlants: undefined,
      inProgress: true,
      value: ''
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

  // inputOnChange = (event) => {
  //   this.setState({ value: event.currentTarget.value});
  // };


  inputOnChange = (event,valueField) => {
    this.setState({ value: event.currentTarget.valueField});
  };

  render() {
    const {
      categories,
      plants,
      inProgress,
      successCategories,
      successPlants,
      value,
    } = this.state;

    console.log('render');

    return (
      <React.Fragment>
        <form method="GET">
          <Label for="plantName">Plant name:</Label>
          <Input
            id="plantName"
            type="text"
            value={value}
            onChange={this.inputOnChange}
          />

          <Label for="categoryType">Category Type:</Label>
          <Input
            id="categoryType"
            type="text"
            value={value}
            onChange={this.inputOnChange}
          />

          <Label for="category-slug">Slug for categories: </Label>
          <Input
            id ="category-slug"
            type="text"
            value={value}
            onChange={this.inputOnChange}
          />  
          <Label for="watering">Watering in days :</Label>
          <Input
            id="watering"
            type="text"
            value={value}
            onChange={this.inputOnChange}
          />  
          <Label for="fertilizing">Fertilizing in days</Label>
          <Input
            id="fertilizing"
            type="text"
            value={value}
            onChange={this.inputOnChange}
          />  
          <Label for="exposure"> Exposure </Label>
          <Input
            id="exposure"
            type="text"
            value={value}
            onChange={this.inputOnChange}
          />  
          <Label for="humidity">Humidity type: </Label>
          <Input
            id="humidity"
            type="text"
            value={value}
            onChange={this.inputOnChange}
          />  
          <Label for="temperature">Temperature type: </Label>
          <Input
            id="temperature"
            type="text"
            value={value}
            onChange={this.inputOnChange}
          />  
          <Label for="blooming">Blooming: </Label>
          <Input
            id="blooming"
            type="text"
            value={value}
            onChange={this.inputOnChange}
          />  
          <Label for="difficulty">Difficulty level: </Label>
          <Input
            id="difficulty"
            type="text"
            value={value}
            onChange={this.inputOnChange}
          />  
          <Label for="room">Room for flower</Label>
          <Input
            id="room"
            type="text"
            value={value}
            onChange={this.inputOnChange}
          />  
          <Label for="last-watered" >Last wateres</Label>
          <Input
          id="last-watered"
          type="datetime"
          value={value}
          onChange={this.inputOnChange}
          />  
          <Label for='last-fertilized'>Last fertilized: </Label>
          <Input
          id="last fertilized"
          type="datetime"
          value={value}
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
