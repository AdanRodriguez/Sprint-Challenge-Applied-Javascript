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


function cardCreator(item) {

    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const imgContainer = document.createElement('div');
    const Image = document.createElement('img');
    const span = document.createElement('span');

    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(imgContainer);
    cardAuthor.appendChild(span);
    imgContainer.appendChild(Image);

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    imgContainer.classList.add('img-container');

    Image.src = item.authorPhoto;
    cardHeadline.textContent = item.headline;
    span.textContent = `By ${item.authorName}`;


    return card;

};

axios.get('https://lambda-times-backend.herokuapp.com/articles')
 .then(data => {
    console.log(data)
    for (let name in data.data.articles) {
        if (data.data.articles.hasOwnProperty(name)) {
          const arr = data.data.articles[name];
          arr.forEach(article => {
    const cards = document.querySelector('.cards-container');
    cards.appendChild(cardCreator(article));
            });
        };
    };
})
.catch(err => console.log(err));
