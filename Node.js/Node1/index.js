// const bodyParser = require('body-parser')
// const express = require ('express');
// const app = express()
// const port = 5000;

// let users=[];

// app.use(bodyParser.urlencoded({extended:false}))

// app.use(bodyParser.json())

// //push the data
// app.post('/user',function(req,res){
//     try{
//         console.log(req.body);
//         const{username, firstname, lastname} = req.body;
//         if(!username|| !firstname || !lastname)
//         return res.status(400).json({"message": "username, firstname and lastname are required."});
        
//         let newUser={
//             username,
//             firstname,
//             lastname,
//             id: users.length
//         }
//         users.push(newUser);
//         return res.status(201).json({
//             message :"user created successfully",
//             data:newUser
//         })
//     }

//     catch(err){
//         res.statusCode(500).json({
//             message:"some error occured",
//         })
//     }
// });

// app.listen(port, function(){
//     console.log("App is listening on port" +port);
// })

// app.get('/user/:id',function(req, res){
//     const {id} = req.params;
//     if(!id) return res.status(400).json({message: "id  is required"});

//     const user = users.find(user=> user.id === Number(id));

//     if(!user) return res.status(404).json({message: "User not found!"});
//     return res.json({
//         message:"Successfully",
//         data:user
//     });
// });

// //update the data
// app.put('/user/:id', function(req, res) {
//     const id = parseInt(req.params.id);
//     const { username, firstname, lastname } = req.body;
  
//     if (!username || !firstname || !lastname) {
//       return res.status(400).json({ message: "username, firstname, and lastname are required" });
//     }
  
//     const index = users.findIndex(user => user.id === id);
  
//     if (index === -1) {
//       return res.status(404).json({ message: `User with ID ${id} not found` });
//     }
  
//     users[index].username = username;
//     users[index].firstname = firstname;
//     users[index].lastname = lastname;
  
//     return res.json({ message: `User with ID ${id} updated successfully`, data: users[index] });
//   });

//   //delete the data 
// app.delete("/user/:id", function (req, res){
//     const {id} = req.params;
//     const newUser = users.filter(user => user.id !== Number(id));
//     if(users.length === newUser.length){
//         users = newUser
//         return res.status(404).json({message: "User not found."})
//     } 
//     users = newUser
//     return res.status(200).json({message: "user Delete Scccesssfully"});
// });
const bodyParser = require('body-parser');
const express = require ('express');

const {userRouter}  = require('./routes/userRoutes');
const { useDataMiddleware } = require('./middleware/useMiddleware');

const app = express();
const port = 5000;

let users =[];
app.use(useDataMiddleware(users));
app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use(userRouter);


app.listen(port, function(){
    console.log("App is listening on port"+port);
});