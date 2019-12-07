var createPolitician = function(name, color){ // factory function
  
    var politician = {};
   
     // set name property to the value of the name parameter
    politician.name = name;
    politician.color = color;
    politician.electionResults = null;
    politician.totalVotes = 0;
    
  /*  politician.tallyVotes = function()
  {
        this.totalVotes = 0;
    
        for (var i = 0; i < this.electionResults.length; i++)
    {
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
    
  };*/
    
    return politician;
  }
  
  // declare the candidates
  var veronica = createPolitician("Veronica Johnson", [132, 17, 11]);
  var riley = createPolitician("Riley Emerson", [245, 141, 136]);
  
  veronica.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
  riley.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
  
  // update vote counts in array
  veronica.electionResults[9] = 1;
  riley.electionResults[9] = 28;
   
  veronica.electionResults[4] = 17;
  riley.electionResults[4] = 38;
   
  veronica.electionResults[43] = 11;
  riley.electionResults[43] = 27;
  
  /* console.log(veronica.electionResults);
  console.log(riley.electionResults);
  
  console.log("Veronica's color is: " + veronica.color);
  console.log("Riley's color is: " + riley.color); */
  
  // assign winner of each state
  var setStateResults = function(state) 
  {
    theStates[state].winner = null;
    
    if (veronica.electionResults[state] > riley.electionResults[state]) {
      theStates[state].winner = veronica;
    }
    else if (veronica.electionResults[state] < riley.electionResults[state]) {
    theStates[state].winner = riley;
    }
  
    var stateWinner = theStates[state].winner;
    
    if (stateWinner !== null) {
      theStates[state].rgbColor = stateWinner.color; 
    }
    else {
      theStates[state].rgbColor = [11, 32, 57];
    }
   
  // results for state table
  var stateInfoTable = document.getElementById("stateResults");
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
   
  candidate1Name.innerText = veronica.name;
  candidate2Name.innerText = riley.name;
   
  candidate1Results.innerText = veronica.electionResults[state];
  candidate2Results.innerText = riley.electionResults[state];
   
    if (theStates[state].winner === null){
      winnersName.innerText = "Draw";
    } 
    else {
      winnersName.innerText = theStates[state].winner.name;
    } 
  };
  
  //setStateResults();
  
  // tally up results 
   veronica.tallyVotes = function()
  {
      this.totalVotes = 0;
      
      for (var i = 0; i < this.electionResults.length; i++)
      {
          this.totalVotes = this.totalVotes + this.electionResults[i]; 
          //console.log(veronica.totalVotes);
      }
  };
  
  veronica.tallyVotes();
  
  riley.tallyVotes = function()
  {
      this.totalVotes = 0;
      
      for (var i = 0; i < this.electionResults.length; i++)
      {
          this.totalVotes = this.totalVotes + this.electionResults[i];
          //console.log(this.totalVotes);
      }
  };
  
  riley.tallyVotes(); 
  
  //console.log(veronica.totalVotes);
  //console.log(riley.totalVotes);
  
  // declare the winner
  var winner = "";
  
  if (veronica.totalVotes > riley.totalVotes)
    {
      winner = veronica.name;
      console.log(veronica.name + " is the winner of the election with a total of " + veronica.totalVotes + " votes!");
    }
  else if (veronica.totalVotes < riley.totalVotes)
    {
      winner = riley.name;
      console.log(riley.name + " is the winner of the election with a total of " + riley.totalVotes + " votes!");
    }
  else 
  {
    winner = "Draw"
    console.log("It's a draw- both candidates tied with " + riley.totalVotes + " votes!");
  }
  
  // populate country table at top of map
  var countryInfoTable = document.getElementById('countryResults');
  var row = countryInfoTable.children[0].children[0];
   
  row.children[0].innerText = veronica.name;
  row.children[1].innerText = veronica.totalVotes;
  row.children[2].innerText = riley.name;
  row.children[3].innerText = riley.totalVotes;
  row.children[5].innerText = winner;
  
  //console.log("The winner is: " + winner + "!!!");
    