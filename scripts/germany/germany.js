import { countryData } from "../cardList.js";
import { cityData } from "./cities/cities.js";
import { landmarkData } from "./landmarks/landmarks.js";
import { peopleData } from "./people/people.js";
export const germanData = () => {
    countryData(cityData(), "#germanCities");
    countryData(landmarkData(), "#germanLandmarks");
    countryData(peopleData(), "#germanPeople");
}


germanData();