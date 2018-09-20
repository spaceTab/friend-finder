//   const friends = require("../data/friends.js");
// //   const reload  = require("reload");
//   const API_API_ROUTES = app => {
  
//     //gets JSON from friends.js
//     app.get("/api/friends", (req, resp) => {
//         resp.json(friends);
//     });

//     app.post("/api/friends", (req, res) => {

//    // console.log(req);
//     let newUsr = req.body;
//     console.log('req', req.body);
//     let differences = [];
//         if (friends.length > 1) {
//         // loop through all cheeses*
//         for(j=0 ; j < friends.length; j++){
//             let total = 0;
           
//             for (let i = 0; i < req.body.score.length; i++) {
//                 let friendScore = friends[j].scores[i];
//                 let usrScore    = parseInt(newUsr.score[i]);
//                 let difference  = +friendScore - +usrScore;
//                 total += Math.abs(difference);
//                 //console.log(`Total diffs: ${total}`);
//             }
//             // pushing total differences into empty array
//             differences.push(total);
//         }//);
//         //find minimum differences
//         let minimum = Math.min.apply(null, differences);
//         // empty array incase there is a tie, we can send more then one 'friend'
//         let bestMatch = [];

//         for (let i = 0; i < differences.length; i++) {
//             if (differences[i] <= minimum) bestMatch.push(friends[i]);
//         }
//         //console.log (bestMatch);
//         res.json (bestMatch);
       
//         //console.log(usrSum);
//     } else {
//         res.json(friends);
//     }
//       friends.push(newUsr);   // reload(app);
//     });

// }

// module.exports = API_API_ROUTES;

const friends = require('../data/friends.js');

const API_ROUTES = (app) => {

    app.get('/api/friends', (req, res) => {

        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
      
        let usrData = req.body;
        let differences = [];
        
      //  if (friends.length > 1){
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
      //  } else {
        //res.json(friends); 
        friends.push(usrData); 
        //}       
       
    });
};

module.exports = API_ROUTES;
