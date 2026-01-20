const express = require('express'); 
const app = express(); 
const PORT = 3000; 
 
app.get('/', (req, res) =
  res.json({ message: 'Roblox Cashback API Running' }); 
}); 
 
app.listen(PORT, () =
  console.log('Server running on http://localhost:' + PORT); 
