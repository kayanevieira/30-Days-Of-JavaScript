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

// 03- Clean the following text and find the most frequent word (hint, use replace and regular expressions).const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

var text =  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"
		const removing = /[%@&$#;']/gi;
		text = text.replace(removing, "");
		console.log(text);
    //find the most frequency
	



// 04- Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const salary = 5000 
const annualBonus = 1000
const onlineCourses = 15000

let sum = (salary + annualBonus + onlineCourses)
let total = (sum * 12)
console.log(total, 'per year')