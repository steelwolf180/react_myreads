##Udacity Project Features

#### Main Page
1) The main page shows 3 shelves for books.
2) The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance.
3) When the browser is refreshed, the same information is displayed on the page. 

#### Search Page
1) The search page has a search input field. As the user types into the search field, books that match the query are displayed on the page.
2) Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
3) When an item is categorized on the search page, and the user navigates to the main page, it appears on that shelf in the main page.

#### Routing
1) The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
2) The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.

#### Core Functionality
1) Component state is passed down from parent components to child components. 
2) The state variable is not modified directly - setState() function is used correctly.
3) Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
4) All JSX code is formatted properly and functional.

#### Extra Features
1) Book description is available by API call through the book cover image 
2) Books can be transfer from each shelves by the use of detailed view 

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Installation Instructions
1) Clone the repo from the following git repo address
2) Run the command "npm install" at the root folder to install the project dependencies 
3) Go to the root folder and enter "npm start" to start the project