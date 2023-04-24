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
