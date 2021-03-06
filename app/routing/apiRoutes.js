const friends = require('../data/friends.js');

const API_ROUTES = (app) => {

    //get data from friends.js
    app.get('/api/friends', (req, res) => {

        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        //grabs the users name / picture / score
        let usrData = req.body;
        let differences = [];
        
            console.log(friends.length)

            /* loops through friends object, setting a total for each obj
            ** then loops throught the users score -> calculating the scores
            ** of the object and user
            */
            friends.forEach(friendDiff => {
                let total = 0;
                for (let i = 0; i < usrData.scores.length; i++) {
                    let friendScore = friendDiff.scores[i];
                    let usrScore    = parseInt(usrData.scores[i]);
                    let difference  = friendScore - usrScore;
                    total += Math.abs(difference);
                    console.log(`diffrences in cheese->${total}`);
                }
                differences.push(total); //pushes total value to differences array
            });
          
            let minimum = Math.min.apply(null, differences);
           
            let bestMatches = [];

            //finds the minum differnces
            for (let i = 0; i < differences.length; i++) {
                if (differences[i] === minimum || differences[i] <= minimum){
                     bestMatches.push(friends[i]);
                }
            }
            res.json(bestMatches);
        
            //push user data to the friends array
        friends.push(usrData); 
    });
};

module.exports = API_ROUTES;
