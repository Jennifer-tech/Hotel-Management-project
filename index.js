const express = require('express');
const app = express();

app.use(express.json());

const rooms = [
   { 
      id: 1, 
      name: 'VIP',
      price: 20000,
      roomType: {
         size: "Big"
      }
   },
   { 
      id: 2, 
      name: 'Town',
      price: 15000,
      roomType: {
         size: "Big"
      }
   },
   
]
app.get('/', (req, res) => {
   res.send('Hello World!!') 
});

//Get all room
app.get('/api/rooms', (req, res) =>{
   res.send(rooms);
});

//Create room
app.post('/api/rooms', (req, res) => {
   
    const room ={
       id: rooms.length + 1,
       name: req.body.name,
       price: req.body.price,
      roomType: {
         size: req.body.roomType.size,
      },
    };
    rooms.push(room);
    res.send(room);
});

//Update room
app.put('/api/rooms/:id', (req, res) => {
   const room = rooms.find(r => r.id === parseInt(req.params.id));

   if(room){
      let updated ={
         id: room.id,
         name: req.body.name,
         price: req.body.price,
         roomType: {
            size: req.body.roomType.size,
         }
      }
      let targetIndex = rooms.indexOf(room);
      room.splice(targetIndex, 1, updated);
      res.sendStatus(204);
   }else{
      res.sendStatus(404);
   }

});

//Get room id
app.get('/api/rooms/:id', (req, res) => {
   const room = rooms.find(r => r.id === parseInt(req.params.id));
   if(!room) res.status(404).send('The room with the given id was not found')
   res.send(room);
});

//Delete room
app.delete('/api/rooms/:id', (req, res) => {
   const room = rooms.find(r => r.id === parseInt(req.params.id));
   // room.splice(room, 1);

if(room){
   let targetIndex = rooms.indexOf(room);
   rooms.splice(targetIndex, 1)
}
res.sendStatus(204);
});
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
