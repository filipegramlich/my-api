const {Router} = require("express");

const usersRoutes = Router();

usersRoutes.post("/",(request, response)=>{

    const {email, password,name} = request.body;
    response.json({name, password, email});
        
    }
);

module.exports = usersRoutes;