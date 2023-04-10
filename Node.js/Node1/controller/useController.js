const getAllUsers=(req, res)=>{
    const { users } = req.body;
    res.json(users);
}
 
const createUser =(req, res)=>{
try{
        const{username, firstname, lastname,users} = req.body;
    if(!username|| !firstname || !lastname)
    return res.status(400).json({"message": "username, firstname and lastname are required."});
    let newUser={
        username,
        firstname,
        lastname,
        id: users.length 
    }
    users.push(newUser);
    return res.status(201).json({
        message :"user created successfully",
        data:newUser
    })
}

catch(err)
{
    res.statusCode(500).json({
        message:"some error occured",
    })
}

}


const getUserById =(req,res, users)=>{
const {id} = req.params;
    if(!id) return res.status(400).json({message: "id  is required"});

    const user = users.find(user=> user.id === Number(id));

    if(!user) return res.status(404).json({message: "User not found!"});
    return res.json({
        message:"Successfully",
        data:user
    });

}

const updateUser = (req, res, users) =>{
try 
{
  const userId = req.params.id;
  const {username, firstname, lastname} = req.body;
  if (!username || !firstname || !lastname) 
  {
    return res.status(400).json({message: 'Username, firstname, and lastname are required.'});
  }
  const userToUpdate = users.find(user => user.id === parseInt(userId));
  if (!userToUpdate) 
  {
    return res.status(404).json({message: 'User not found.'});
  }
  userToUpdate.username = username;
  userToUpdate.firstname = firstname;
  userToUpdate.lastname = lastname;
  return res.status(200).json({
    message: 'User updated successfully',
    data: userToUpdate
  });
} 
catch (err) 
{
  return res.status(500).json({message: 'Some error occurred.'});
}
}
