import React, {useState } from 'react'
import axios from 'axios'
import "./app.css"

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (query) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:9000/${query}`);
      setData(response.data);
      // if(query === 'q1'){
      //   alert("This query will find all the Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.")
      // }
      // if(query === 'q2'){
      //   alert("This query will find all the Male Users which have phone price greater than 10,000.")
      // }
      // if(query === 'q3'){
      //   alert("This query will find all the Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.")
      // }
      // if(query === 'q4'){
      //   alert("This query will find all the Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.")
      // }
      // if(query === 'q5'){
      //   alert("This query will Show the data of top 10 cities which have the highest number of users and their average income.")
      // }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <button onClick={() => fetchData('q1')}>Query 1</button>
      <button onClick={() => fetchData('q2')}>Query 2</button>
      <button onClick={() => fetchData('q3')}>Query 3</button>
      <button onClick={() => fetchData('q4')}>Query 4</button>
      <button onClick={() => fetchData('q5')}>Query 5</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr className='trow'>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>City</th>
              <th>Car</th>
              <th>Phone Price</th>
              <th>Income</th>
              <th>Email</th>
              <th>Quote</th>
            </tr>
          </thead>
          <tbody className='tbody'>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.gender}</td>
                <td>{item.city}</td>
                <td>{item.car}</td>
                <td>{item.phone_price}</td>
                <td>{item.income}</td>
                <td>{item.email}</td>
                <td>{item.quote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

}

export default App
