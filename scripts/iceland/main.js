import { countryData } from "../cardList.js";

import { cityData } from "./cities/cities.js";
import { landmarkData } from "./landmarks/landmarks.js";
import { peopleData } from "./people/people.js";

const allCity = cityData();
const allLandmark = landmarkData();
const allPeople = peopleData();

countryData( allPeople, "#icepeople");
countryData(allLandmark, "#iceland");
countryData(allCity, "#icecity");