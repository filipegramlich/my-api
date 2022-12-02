const AppError = require("../utils/AppError");

class UsersController {
    create(request, response){
        const {email, password, name} = request.body;
        
        
        if(!name){
            throw new AppError("Nome é obrigatório!");
        }

        response.status(201).json({name, password, email});
    }
}

module.exports = UsersController;