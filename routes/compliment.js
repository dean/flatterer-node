exports.compliment_gender = (req, res, next) => {
    //console.log(req)
    //return res.send("Compliment " + req.params['gender']); 
    return res.render('compliment', {gender: req.params['gender']});
}
