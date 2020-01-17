// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');

headerArray = {
    date: 'March 28th, 2019',
    title: 'Lambda Times',
    temp: '98°'
}

function Header(date, title, temp) {

    const container = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const temperature = document.createElement('span');

    container.classList.add('header');
    headerDate.classList.add('date');
    temperature.classList.add('temp');

    container.append(headerDate);
    container.append(headerTitle);
    container.append(temperature);

    headerDate.textContent = date;
    headerTitle.textContent = title;
    temperature.textContent = temp;

    return container;
}

headerContainer.append(Header(headerArray.date, headerArray.title, headerArray.temp));
