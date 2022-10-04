// alert(`Welcome to the NO OOP Quiz!\nYou will see 3 questions.`)
function Question(title, answers, correctAnswer) {
    this.title = title
    this.answers = answers
    this.correctAnswer = correctAnswer
    this.getBody = function() {
        let body = this.title.toUpperCase() + '\n'
        for (let i=0; i<this.answers.length; i++) {
             body += (i+1) + '. ' + this.answers[i] + '\n'
        }
        return body
    }
    this.addAnswer = function(answer) {
        // this.answers[this.answers.length] = answer
        this.answers.push(answer)
    }
    this.isCorrectAnswer = function(userAnswer) {
        if (this.correctAnswer == userAnswer) return true
        else return false
    }
}

let question1 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question2 = new Question('A list of instructions that enable a computer to perform a specific task is a...', ['Computer Program', 'Machine Code', 'Algorithm', 'Binary Code'], 3)
let question3 = new Question('Before a computer can understand a program it must be...', ['Translated into its machine code', 'Translated into a low level language', 'Translated into a high level language'], 1)
question1.addAnswer("C++")
let userAnswer = prompt(question1.getBody())
console.log(question1.isCorrectAnswer(userAnswer))


// for (let i=0; i<questions.length; i++) {
//     let userResponse = prompt(questions[i])
//     if (userResponse == correctResponses[i]) {
//         console.log('You won! 🥳')
//         counter++
//     } else {
//         console.log('You lost! 😔')
//     }
// }

// alert(`You got ${counter} points!`)


