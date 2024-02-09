#### error 1
{

    error : cannot destructure fullName as it is undefined in req.body(),
    file : auth.controller.js
    function : signup
    solution : app.use(express.json()) above any api route.

}
#### error 2
{
    error : Error in signup controller Expected "payload" to be a plain object.,
    file : generateToken.js & auth.controller.js;
    function : token->jwt.sign
    solution : As we are passing newUser._id as a string we need to deconstruct the object when putting it in payload as it is expecting a plain object and not a string. 

}
