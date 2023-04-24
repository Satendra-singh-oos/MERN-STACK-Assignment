 # MERN STACK Assignment  


![](https://img.shields.io/badge/-Task--1-brightgreen)

```- Create a “Node.js” Application using Express Framework and MongoDB Database and Connect it to your Frontend Application (Which can be developed using either React or Nextjs)

Use the provided sample data to load your Database. Please refer to sample data file “sample_data.json”. This file is attached separately. 

- You must fetch the following data using the API and display it on the frontend in a table format: 

1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
2. Male Users which have phone price greater than 10,000.
3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
5. Show the data of top 10 cities which have the highest number of users and their average income.
```

- Following Dependencies are used 
1. React.js
2. Cors
3. Node.js
4. Express.js
5. Axios

## Getting Started 

**Prerequisites**
- Node.js (v14 or higher) must be installed on your machine.

**Installation**
1. Clone this repository to your local machine.
2. In the root directory, run the command npm install to install all the necessary dependencies.
3. Run npm start to start the server and the client-side application.
4. Open your browser and go to http://localhost:3000 to see the app in action.


**Backend**
- The backend is implemented using Node.js and Express, and it reads sample data from a JSON file as provided. The data is filtered based on the query provided by the user, and the filtered data is returned as a JSON response.

- It has five different routes for the five queries, each using the Array.filter() method to filter the data according to specific criteria. The filtered data is then sent as a response to the client.

- The server is running on port 9000, and there are four available queries:

1. q1: This query filters the data to find users with a low income and a luxury car (BMW or Mercedes).
2. q2: This query filters the data to find male users with an expensive phone.
3. q3: This query filters the data to find users with a last name that starts with "M", a long quote, and an email that includes their last name.
4. q4: This query filters the data to find users with a luxury car (BMW, Mercedes, or Audi) and an email that contains no digits


**Frontend**

- The frontend is built using React, and it allows users to query the data using the pre-defined filters. The user can click on one of the five buttons to run a specific query, and the filtered data is displayed in a table.

- Axios are used to make HTTP requests to the API and retrieve the filtered data. The app has five buttons, each calling a specific query and displaying the data in a table below. When a button is clicked, an alert is shown describing what the query does.

- While the data is being loaded, a loading message is displayed. Once the data has been loaded, it is displayed in a table with the following columns: ID, First Name, Last Name, Gender, City, Car, Phone Price, Income, Email, and Quote.

**Output**

- The frontend of this project is hosted on Netlify at the following URL: https://luminous-dango-4c6d7f.netlify.app/

- The backend of this project is hosted on Render at the following URL: https://assignment-4x5m.onrender.com/q1
 **`(change the route from q1 to q2,q3,q4,q5 for desired json data)`**


**Output of query 1 which will show the data of all the Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”**
![](./out/out(q1).png)