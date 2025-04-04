'use strict';

function votingSystem() {
  let numCandidates = parseInt(prompt("Enter the number of candidates: "));
  let candidates = [];

  for (let i = 1; i <= numCandidates; i++) {
    let candidateName = prompt(`Enter the name for the candidate ${i}:`);
    candidates.push({
      name: candidateName,
      votes: 0
    });
  }
  let numVoters = parseInt(prompt("Enter the number of voters: "));
  for (let i = 1; i <= numVoters; i++) {
      let vote = prompt(`Voter ${i}, vote for the candidate (name):`);

      if (vote === "") {
        console.log("Voter " + i + "voted with an empty vote.");
        continue;
      }

      let candidate = candidates.find(candidate => candidate.name.toLowerCase() === vote.toLowerCase());
      if (candidate) {
        candidate.votes++;
      } else {
        console.log(`Invalid vote: "${vote}" is not a valid candidate.`);
      }
  }

  candidates.sort((a,b) => b.votes - a.votes);

  console.log("\nVoting Results: ");
  candidates.forEach(candidate => {
      console.log(`${candidate.name}: ${candidate.votes} votes.`);
  });

  let winner = candidates[0];
  console.log(`\nThe winner is: ${winner.name} with ${winner.votes} votes.`);
}

votingSystem();