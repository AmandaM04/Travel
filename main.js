/*Function Names:

printToDom
cardPrint
inputGrab

If else statements if (e.target.id === ‘Bermuda’){
    domOutput = info for Bermuda;

For loop that loops through all of the button class names and adds event listener

Edit button on diary entry displays a prompt dialogue box for replacement text*/






const coolPlaces = [
    {
        title: "Northern California",
        image: "img/NorthernCal.jpg",
        description: "Often abbreviated NorCal, is the northern portion of the U.S. state of California. Spanning the state's northernmost 48 counties, its main population centers include the San Francisco Bay Area, the Greater Sacramento area, and the Metropolitan Fresno area. Northern California also contains redwood forests, along with the Sierra Nevada, including Yosemite Valley and part of Lake Tahoe, Mount Shasta, and most of the Central Valley, one of the world's most productive agricultural regions.",
    },    
    {
        title: "Jordan",
        image: "img/Jordan.jpg", 
        description:  "officially The Hashemite Kingdom of Jordan, is a sovereign Arab state in western Asia, on the East Bank of the Jordan River. Jordan is bordered by Saudi Arabia to the south, Iraq to the north-east, Syria to the north, Israel and Palestine to the west.",
    },
    {
        title: "Abu Dhabi",
        image: "img/AbuDhabi.jpg", 
        description:  "Abu Dhabi is the capital and the second most populous city of the United Arab Emirates (the most populous being Dubai), and also capital of the Emirate of Abu Dhabi, the largest of the UAE's seven emirates. Abu Dhabi lies on a T-shaped island jutting into the Persian Gulf from the central western coast.",
    },
    {
        title: "Tazania",
        image: "img/Tanzania.jpg", 
        description:  "officially the United Republic of Tanzania, is a sovereign state in eastern Africa within the African Great Lakes region. It borders Kenya and Uganda to the north; Rwanda, Burundi, and the Democratic Republic of the Congo to the west; Zambia, Malawi, and Mozambique to the south; and the Indian Ocean to the east. Mount Kilimanjaro, Africa's highest mountain, is in north-eastern Tanzania.",
    },
    {
        title: "South Korea",
        image: "img/SouthKorea.jpg", 
        description: "officially the Republic of Korea, is a sovereign state in East Asia constituting the southern part of the Korean Peninsula.[14] South Koreans lead a distinctive urban lifestyle, with half of them living in high-rises concentrated in the Seoul Capital Area with 25 million residents.",
    },
    {
        title: "Florida",
        image: "img/Florida.png", 
        description: "Spanish for 'land of flowers' is the southernmost contiguous state in the United States. The state is bordered to the west by the Gulf of Mexico, to the northwest by Alabama, to the north by Georgia, to the east by the Atlantic Ocean, and to the south by the Straits of Florida.",
    },
];

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML += domString;
};

const buildDomString = (placesArray) => {
    let domString = '';
    placesArray.forEach((place) => {
       domString += `<div class="card">`;
       domString +=     `<h1>${place.title}</h1>`;
       domString +=     `${place.description}`;
       domString +=     `<img class="image" src="${place.image}" alt="">`;
       domString +=     `<textarea cols="30" rows="10"></textarea>`;
       domString +=     `<button class="card-button">Submit</button>`;
       domString +=  `</div>`;
    });
    printToDom(domString, "card-holder");
};

const addAllEventListeners = () => {
  
    const allTheButtons = document.getElementsByClassName('card-button');

    for (let i=0; i < allTheButtons.length; i++) {
        allTheButtons[i].addEventListener('click', (e) => {
            //Get diary entry from text box above button clicked
            let input = e.target.previousElementSibling.value;
            //Get Place Title
            let inputTitle = e.target.parentElement.firstElementChild.textContent;
            buildDiaryEntry(input, inputTitle);
            //reset text box to empty
            e.target.previousElementSibling.value = '';
        });
    }
};

const buildDiaryEntry = (input, inputTitle) => {
    let domString = '';
       domString += `<div class="diary">`;
       domString +=     `<h1>${inputTitle}</h1>`;
       domString +=     `<p>${input}</p>`;
       domString +=  `</div>`;

    printToDom(domString, "diary-entry");

}

buildDomString(coolPlaces);
addAllEventListeners();
