// Exercise #1: Decrease the Student Scores
const scores = [89, 70, 60, 50, 100, 71];
const newScores = [];
// Start coding here
for (let i = 0; i < scores.length; i++) {
  let studentScores = scores[i] - 10;
  newScores.push(studentScores);
}
console.log(newScores);
