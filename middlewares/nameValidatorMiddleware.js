const offensiveWords = ["trump", "macron", "nègre", "bamboula", "feuj", "juif", "negro", "poutine", "fuck", "niquer", "bz", "baise"]; 

const nameValidatorMiddleware = () =>{
    return (req, res, next)=>{

        if(!req.body){
            next(); 
        }
        if(!req.body.name){
            next(); 
        }

        const name = req.body.name.toLowerCase();

        if(offensiveWords.some(word => name.includes(word))){
            res.status(400).json({
                statusCode: 400, 
                message : 'Non mais oh! y a un mot interdit!'
            })
        }
        next();
    }
}
module.exports = nameValidatorMiddleware