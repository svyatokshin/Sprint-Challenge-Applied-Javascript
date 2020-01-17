// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

function cardCreator(obj) {
    // Create Elements
    let card = document.createElement('div');
    let cardHeadline = document.createElement('div');
    let cardAuthorContainer = document.createElement('div')
    let cardImgContainer = document.createElement('div');
    let cardImg = document.createElement('img');
    let cardAuthor = document.createElement('span');

    // Attach classes to respective elements created
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthorContainer.classList.add('author');
    cardImgContainer.classList.add('img-container');

    // Append everything to main card so that it can be exported to HTML
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthorContainer);
    cardAuthorContainer.appendChild(cardImgContainer);
    cardAuthorContainer.appendChild(cardAuthor);
    cardImgContainer.appendChild(cardImg);

    // Adding content to all the elements
    cardHeadline.textContent = obj.headline;
    cardImg.src = obj.authorPhoto;
    cardAuthor.textContent = `By ${obj.authorName}`;

    return card;
}


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    // console.log("Object Array: ", response.data);
    let articles = response.data.articles;
    console.log(articles);
    for (topic in articles) {
        articles[topic].forEach(info => {
            cardsContainer.appendChild(cardCreator(info));
            console.log(articles[topic]);
        });
    }
})
.catch(error => {
    console.log("Data was not returned: ", error);
})