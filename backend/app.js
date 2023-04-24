const express = require('express');
const cors = require("cors");
const app = express();
const port = 9000;
app.use(cors())
// Import JSON data from data.json
const data = require('./sample_data.json');



app.get('/q1', (req, res) => {
  //res.send(data)
  const filteredUsers = data.filter(user => {
    const income = parseFloat(user.income.replace('$', ''));
    const hasLowIncome = income < 5;
    const hasLuxuryCar = user.car === "BMW" || user.car === "Mercedes";

    return hasLowIncome && hasLuxuryCar;
  });

  res.json(filteredUsers);

});  

app.get('/q2',(req,res)=>{
    const filteredUsers = data.filter(user => {
        const isMale = user.gender === "Male";
        const hasExpensivePhone = parseInt(user.phone_price, 10) > 10000;
      
        return isMale && hasExpensivePhone;
      });
      
      res.json(filteredUsers);
})

app.get('/q3',(req,res)=>{
    const filteredUsers = data.filter(user => {
        const lastNameStartsWithM = user.last_name.startsWith("M");
        const hasLongQuote = user.quote.length > 15;
        const emailIncludesLastName = user.email.includes(user.last_name.toLowerCase());
      
        return lastNameStartsWithM && hasLongQuote && emailIncludesLastName;
      });
      
      res.json(filteredUsers);
})


app.get('/q4',(req,res)=>{
    const filteredUsers = data.filter(user => {
        const hasLuxuryCar = ["BMW", "Mercedes", "Audi"].includes(user.car);
        const emailHasNoDigit = !(/\d/.test(user.email));
      
        return hasLuxuryCar && emailHasNoDigit;
      });
      
      res.json(filteredUsers)
})


/* app.get("/q5",(req,res)=>{
     
    const cityData={};
    data.forEach({user}=>{
      const city =user.city;
      const income= parseFloat(user.income.replace('$', ''));
      
    })  
      
  })
*/

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
