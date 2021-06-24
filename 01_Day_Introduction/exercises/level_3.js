// 01 -'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let numberOfTimes = (loveSentence.match(/love/gi))

for (i = 0; i < numberOfTimes.length; i++){
    console.log(i)
}

// 02- Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const becauseSentence = 'You cannot end a sentence with because because because is a conjunction'
const countTime = becauseSentence.match(/because/gi)
console.log(countTime.length)




