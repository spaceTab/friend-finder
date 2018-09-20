const friends = require('../data/friends.js');

const API_ROUTES = (app) => {

    app.get('/api/friends', (req, res) => {

        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
      
        let usrData = req.body;
        let differences = [];
        
            console.log(friends.length)
            friends.forEach(friendDiff => {
                let total = 0;
                for (let i = 0; i < usrData.scores.length; i++) {
                    let friendScore = friendDiff.scores[i];
                    let usrScore    = parseInt(usrData.scores[i]);
                    let difference  = friendScore - usrScore;
                    total += Math.abs(difference);
                    console.log(`diffrences in cheese->${total}`);
                }
                differences.push(total);
            });
          
            let minimum = Math.min.apply(null, differences);
           
            let bestMatches = [];

            for (let i = 0; i < differences.length; i++) {
                if (differences[i] === minimum) bestMatches.push(friends[i]);
                
            }
            res.json(bestMatches);

        friends.push(usrData); 
    });
};

module.exports = API_ROUTES;
