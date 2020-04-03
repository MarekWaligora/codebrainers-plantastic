import React, { Component } from "react";
import { Button, Input, Label, FormGroup, Row, Col } from "reactstrap";
import "./FormPlantInput.css";
import {
  requiredExposureOptions,
  requiredTemperatureOptions,
  requiredHumidityOptions,
  difficultyLevel
} from "../common/plantOptions";
import SelectComponent from "../common/select";

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

    return (
      <div className="input-form-data">
        <h3>Input form for flower care :</h3>
        <form method="GET">
          <FormGroup>
            <Row>
              <Col lg={3} xs={12}>
                <Label for="plantName">Plant name:</Label>
                <Input
                  className={this.getClassName(plantName)}
                  id="plantName"
                  type="text"
                  name="plantName"
                  value={plantName}
                  onChange={this.inputOnChange}
                />
              </Col>
              <Col lg={3} xs={12}>
                <Label for="categoryType">Category Type:</Label>
                <Input
                  //className={this.getClassName(categoryType)}
                  id="categoryType"
                  type="text"
                  value={categoryType}
                  name="categoryType"
                  onChange={this.inputOnChange}
                />
              </Col>

              <Col lg={6} xs={12}>
                <Label for="category-slug">Slug for categories: </Label>
                <Input
                  //className={this.getClassName(categoryDesc)}
                  id="category-slug"
                  type="text"
                  value={categoryDesc}
                  name="categoryDesc"
                  onChange={this.inputOnChange}
                />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col xs={12}>
                <Label for="room">Room for flower</Label>
                <Input
                  id="room"
                  type="text"
                  name="room"
                  value={room}
                  onChange={this.inputOnChange}
                />
              </Col>
              <Col>
                <Label for="last-watered">Last watered</Label>
                <Input
                  id="last-watered"
                  type="datetime"
                  name="lastWatered"
                  value={lastWatered}
                  onChange={this.inputOnChange}
                />
              </Col>
              <Col>
                <Label for="last-fertilized">Last fertilized: </Label>
                <Input
                  id="last-fertilized"
                  type="datetime"
                  value={lastFertilized}
                  name="lastFertilized"
                  onChange={this.inputOnChange}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                <Label for="watering">Watering in days :</Label>
                <Input
                  className=""
                  id="watering"
                  type="text"
                  name="watering"
                  value={watering}
                  onChange={this.inputOnChange}
                />
              </Col>
              <Col>
                <Label for="fertilizing">Fertilizing in days</Label>
                <Input
                  className=""
                  id="fertilizing"
                  type="text"
                  value={fertilizing}
                  name="fertilizing"
                  onChange={this.inputOnChange}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                <SelectComponent
                  labelDescription="Exposure :"
                  name="exposure"
                  value={exposure}
                  onChange={this.inputOnChange}
                  optionList={requiredExposureOptions}
                />
              </Col>
              <Col>
                <SelectComponent
                  labelDescription="Humidity :"
                  name="humidity"
                  value={humidity}
                  onChange={this.inputOnChange}
                  optionList={requiredHumidityOptions}
                />
              </Col>

              <Col>
                <SelectComponent
                  labelDescription="Temperature :"
                  name="temperature"
                  value={temperature}
                  onChange={this.inputOnChange}
                  optionList={requiredTemperatureOptions}
                />
              </Col>
              <Col>
                <Label for="blooming">Blooming: </Label>
                <Input
                  id="blooming"
                  type="checkbox"
                  //type="text"
                  name="blooming"
                  value={blooming}
                  onChange={this.inputOnChange}
                />
              </Col>
              <Col>
                <SelectComponent
                  labelDescription="Difficulty :"
                  name="difficulty"
                  value={difficulty}
                  onChange={this.inputOnChange}
                  optionList={difficultyLevel}
                />
              </Col>
            </Row>
          </FormGroup>

          <Button type="submit" className="mt-3">
            Wyślij formularz
          </Button>
        </form>
      </div>
    );
  }
}

export default FormPlantInput;
