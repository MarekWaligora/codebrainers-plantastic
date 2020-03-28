import React, { Component } from "react";
import { Button, Input, Label } from "reactstrap";
import "./FormPlantInput.css";
import {
  requiredExposureOptions,
  requiredTemperatureOptions,
  requiredHumidityOptions,
  difficultyLevel
} from "../common/plantOptions";

// wstrzymnac selectionfields w pola typu select z wlasciwosciami

class FormPlantInput extends Component {
  state = {
    plantName: "",
    categoryType: "",
    categoryDesc: "",
    fertilizing: "",
    exposure: "",
    humidity: "",
    temperature: "",
    blooming: "",
    watering: "",
    difficulty: "",
    room: "",
    lastWatered: "",
    lastFertilized: ""
  };

  isPalindrom(valueText) {
    const tableName = valueText.split("");
    const reverseTable = [...tableName].reverse();
    //kiedy dlugosc stringa jest 0

    if (tableName.length === 0) {
      return "";
    }
    for (let i = 0; i < tableName.length; i++) {
      if (tableName[i] !== reverseTable[i]) {
        return false;
      }
    }

    return true; // value in file is palindrom
  }

  getClassName(name) {
    if (!this.isPalindrom(name)) return "";
    return "greenBorder";
  }

  inputOnChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  selectDataForList(optionList) {
    {
      console.log(optionList);
      return optionList.map(item => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ));
    }
  }

  render() {
    const {
      plantName,
      categoryType,
      categoryDesc,
      fertilizing,
      exposure,
      humidity,
      temperature,
      blooming,
      watering,
      difficulty,
      room,
      lastWatered,
      lastFertilized
    } = this.state;

    //  const nazwaKlasy = this.getClassName(plantName);
    //  console.log(nazwaKlasy);

    return (
      <form method="GET">
        <Label for="plantName">Plant name:</Label>
        <Input
          className={this.getClassName(plantName)}
          //className={this.getClassName(name)}
          id="plantName"
          type="text"
          name="plantName"
          value={plantName}
          onChange={this.inputOnChange}
        />
        <Label for="categoryType">Category Type:</Label>
        <Input
          //className={this.getClassName(categoryType)}
          id="categoryType"
          type="text"
          value={categoryType}
          name="categoryType"
          onChange={this.inputOnChange}
        />
        <Label for="category-slug">Slug for categories: </Label>
        <Input
          //className={this.getClassName(categoryDesc)}
          id="category-slug"
          type="text"
          value={categoryDesc}
          name="categoryDesc"
          onChange={this.inputOnChange}
        />
        <Label for="watering">Watering in days :</Label>
        <Input
          className=""
          id="watering"
          type="text"
          name="watering"
          value={watering}
          onChange={this.inputOnChange}
        />
        <Label for="fertilizing">Fertilizing in days</Label>
        <Input
          className=""
          id="fertilizing"
          type="text"
          value={fertilizing}
          name="fertilizing"
          onChange={this.inputOnChange}
        />
        <Label for="exposure"> Exposure </Label>
        {/* ===============================stad proba wstrzykniecia list */}
        <Input
          className=""
          id="exposure"
          type="select"
          name="exposure"
          value={exposure}
          onChange={this.inputOnChange}
        >
          {this.selectDataForList(requiredExposureOptions)}}
        </Input>
        <Label for="humidity">Humidity type: </Label>
        <Input
          className=""
          id="humidity"
          type="select"
          value={humidity}
          name="humidity"
          onChange={this.inputOnChange}
        >
          {this.selectDataForList(requiredHumidityOptions)}
          {/* ===============================stad proba wstrzykniecia list */}
        </Input>
        <Label for="temperature">Temperature type: </Label>
        <Input
          //className={this.isPalindrom(temperature)}
          id="select"
          type="select"
          value={temperature}
          name="temperature"
          onChange={this.inputOnChange}
        >
          {this.selectDataForList(requiredTemperatureOptions)}>
        </Input>
        <Label for="blooming">Blooming: </Label>
        <Input
          id="blooming"
          //type="checkbox"
          type="text"
          name="blooming"
          value={blooming}
          onChange={this.inputOnChange}
        />
        <Label for="difficulty">Difficulty level: </Label>
        <Input
          //className={this.isPalindrom(plantProps.difficulty)}
          id="difficulty"
          type="select"
          name="difficulty"
          value={difficulty}
          onChange={this.inputOnChange}
        >
          {this.selectDataForList(difficultyLevel)}
        </Input>

        <Label for="last-room">Room for flower</Label>
        <Input
          id="room"
          //className={this.isPalindrom(plantInput.room)}
          type="text"
          name="room"
          value={room}
          onChange={this.inputOnChange}
        />
        <Label for="last-watered">Last watered</Label>
        <Input
          //className={this.isPalindrom()}
          id="last-watered"
          type="datetime"
          name="lastWatered"
          value={lastWatered}
          onChange={this.inputOnChange}
        />
        <Label for="last-fertilized">Last fertilized: </Label>
        <Input
          //className={this.isPalindrom(plantInput.lastFertilized)}
          id="last-fertilized"
          type="datetime"
          value={lastFertilized}
          name="lastFertilized"
          onChange={this.inputOnChange}
        />
        <Button type="submit" className="mt-3">
          Wyślij formularz
        </Button>
      </form>
    );
  }
}

export default FormPlantInput;
