import { cardData } from "./card.js";


export const countryData = (dataList, tagId) => {
    const DOMLocation = document.querySelector(tagId);
    let HTMLRep = `<div>`;
    for (const data of dataList) {
        HTMLRep += cardData(data);
    }
    HTMLRep += "</div>";

    DOMLocation.innerHTML += HTMLRep;
}


//************* Jeremiah's code ***********************//
// import { cardData } from "./card.js";
// // const getElementTag = (datum, country, type) => {
// //     const dataFilter = [];
// //     for (const dat of datum) {
// //         if (dat.country === country && datum.type === type) {
// //             dataFilter.push(dat);
// //             //     } else if (country === "*" && datum.type === type) {
// //             //         dataFilter.push(dat);
// //             //     } else if (dat.country === country && type === "*") {
// //             //         dataFilter.push(dat);
// //             //     } else if (country === "*" && type === "*") {
// //             //         dataFilter.push(dat);
// //         }
// //     }
// //     return dataFilter;
// // }


// export const listData = (dataList, country, type) => {
//     let arrayFiltered = dataList.filter( x => x.country === country);
//     arrayFiltered = arrayFiltered.filter(x => x.type === type);
//     console.log(arrayFiltered);
//     let HTMLRep = `<div>`;
//     for (const data of arrayFiltered) {
//         //  The if statement around the HTML build up was an initial filtering.  
//         //  Using the lambda function before the the for loop allows filters the content needed
//         //  Next thoughts is how to include wild card to get all of one country or type
//        // if (data.type === type && data.country === country) {
//             HTMLRep += cardData(data);
//       //  }
//     }
//     HTMLRep += "</div>";
//     const DOMLocation = document.querySelector(`#${type}${country}`);
//     DOMLocation.innerHTML += HTMLRep;
// }