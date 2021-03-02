import { countryData } from  "../cardList.js";
import { cityData } from "./cities/citiesData.js";
import { landmarkData } from "./landmarks/landmarksData.js";
import { peopleData } from "./people/peopleData.js";



countryData(cityData(), "#malaysiacity");
countryData(landmarkData(), "#malaysialandmark");
countryData(peopleData(), "#malaysiapeople");