// alert(`Welcome to the NO OOP Quiz!\nYou will see 3 questions.`)

let question1 = {
    title: "What is the only thing that computers understand?",
    answers: ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"],
    correctAnswer : 1,
    getBody: function() {
        let body = this.title.toUpperCase() + '\n'
        for (let i=0; i<this.answers.length; i++) {
             body += (i+1) + '. ' + this.answers[i] + '\n'
        }
        return body
    },
    addAnswer: function(answer) {
        // this.answers[this.answers.length] = answer
        this.answers.push(answer)
    },
    isCorrectAnswer: function(userAnswer) {
        if (this.correctAnswer == userAnswer) return true
        else return false
    }
}
let question2 = {
    title: "What is the only thing that computers understand?",
    answers: ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"],
    correctAnswer : 1,
    getBody: function() {
        let body = this.title.toUpperCase() + '\n'
        for (let i=0; i<this.answers.length; i++) {
             body += (i+1) + '. ' + this.answers[i] + '\n'
        }
        return body
    },
    addAnswer: function(answer) {
        // this.answers[this.answers.length] = answer
        this.answers.push(answer)
    },
    isCorrectAnswer: function(userAnswer) {
        if (this.correctAnswer == userAnswer) return true
        else return false
    }
}

question1.addAnswer("C++")
let userAnswer = prompt(question1.getBody())
console.log(question1.isCorrectAnswer(userAnswer))

let questions = [
`What is the only thing that computers understand?
1. Machine Code
2. High Level Languages
3. Low Level Languages
4. Algorithms
`,
`A list of instructions that enable a computer to perform a specific task is a...
1. Computer Program
2. Machine Code
3. Algorithm
4. Binary Code`,
`Before a computer can understand a program it must be...
1. Translated into its machine code
2. Translated into a low level language
3. Translated into a high level language`
]

let correctResponses = [1, 3, 1]
let counter = 0

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


