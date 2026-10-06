const valide = (schema,proprty = "body") =>{
    return (req,res,next) =>{
        const {error,value} = schema.validate(req[proprty],{
            abortEarly : false,
            stripUnknow : true
        })

        if(error){
            const errors = error.details.map((detail)=>({
                field : detail.path.join(""),
                message : detail.message
            }))


            res.status(400).json({
                message : "invalide data",
                errors : errors
            })
        }

        req[proprty] = value


        next()
    }
}


module.exports = valide