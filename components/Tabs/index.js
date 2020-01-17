// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');



function tabCreator(array){
    // Create Elements
    const tab = document.createElement('div');

    // Create Class Name
    tab.classList.add('tab');

    
    tab.textContent = array;

    return tab;
}

// forEach Statement to implement each element in Axios Array into our website

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response =>{
    console.log("Tabs Data: ", response.data);
    response.data.topics.forEach(tabName =>{
        topics.append(tabCreator(tabName));
    })
})
.catch(error => {
    console.log("The data was not returned: ", error)
})