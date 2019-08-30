const friends = require("../data/friends");

module.exports = function(app) {
  
  // API GET Request
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  // API Post
  app.post("/api/friends", (req, res) => {
      const bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

   
    const userData = req.body;
    const userScores = userData.scores;
    let totalDifference;

   
    for (let i = 0; i < friends.length; i++) {
      const currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      for (let j = 0; j < currentFriend.scores.length; j++) {
        const currentFriendScore = currentFriend.scores[j];
        const currentUserScore = userScores[j];

        
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }


    friends.push(userData);

  
    res.json(bestMatch);
  });
};