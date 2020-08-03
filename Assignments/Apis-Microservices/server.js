const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(bodyParser.json())
app.use(cors());

app.get('/dateValues:dateVal', (req, res, next) => {
    var dateVal = req.params.dateVal;
    
    var dateFormattingOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    if(isNaN(dateVal)){
      var naturalDate = new Date(dateVal);
      
      naturalDate = naturalDate.toLocalDateString("en-us", dateFormattingOptions);
      var unixDate = new Date(dateVal).getTime()/1000;
    }else {
      var unixDate = dateVal;
      var naturalDate = new Date(dateVal * 1000);
      naturalDate = naturalDate.toLocalDateString("en-us", dateFormattingOptions);
    }
    res.json({unix: unixDate, natural: naturalDate});
  })

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));