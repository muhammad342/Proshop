import bcrypt from 'bcryptjs'


const users =[
    {
        name:"admin",
        email:"admin@example.com",
        // password:bcrypt.hash('123456',10),
        password:"123456",
        isAdmin:true,
    },
    {
        name:"ali",
        email:"ali@example.com",
        password:"123456",
        // password:bcrypt.hash('123456',10),
    },
    {
        name:"ahmed",
        email:"ahmed@example.com",
        password:"123456",
        // password:bcrypt.hash('123456',10),
    }
]

export default users