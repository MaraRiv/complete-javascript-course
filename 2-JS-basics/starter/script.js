var marksWeight = 90.72;
var johnsWeight = 81.65;
var marksHeight = 1.49;
var johnsHeight = 1.61;

var marksBMI = (marksWeight / (marksHeight*marksHeight));
var johnsBMI = (johnsWeight / (marksHeight*marksHeight));

var isMarkMoreFit = marksBMI > johnsBMI

console.log('Is Mark\'s BMI greater than Johns? ' + isMarkMoreFit);

// Challenge 2

var johnsTeamScores = [89,120,103];
var mikesTeamScores = [116,94,123];
var marysTeamScores = [120,120,103]
console.log(johnsTeamScores[0],johnsTeamScores[1],johnsTeamScores[2])
console.log(mikesTeamScores[0],mikesTeamScores[1],mikesTeamScores[2])
var johnsTeamAverage = (johnsTeamScores[0]+johnsTeamScores[1]+johnsTeamScores[2])/3;
var mikesTeamAverage = (mikesTeamScores[0]+mikesTeamScores[1]+mikesTeamScores[2])/3;
var marysTeamAverage = (marysTeamScores[0]+marysTeamScores[1]+marysTeamScores[2])/3;
console.log(johnsTeamAverage);
console.log(mikesTeamAverage);
if (johnsTeamAverage === mikesTeamAverage && mikesTeamAverage === marysTeamAverage) {
	console.log('They Tied!!!');
} else if (johnsTeamAverage > mikesTeamAverage && johnsTeamAverage > marysTeamAverage) {
	console.log('Johns team is better!');
} else if (mikesTeamAverage > johnsTeamAverage && mikesTeamAverage > marysTeamAverage) {
	console.log('Mikes team is better!');
} else if (marysTeamAverage > johnsTeamAverage && marysTeamAverage > mikesTeamAverage) {
	console.log('Marys team is better!')
} else {
	console.log('all over the place')
}

// Challenge 3

function discoverTip(billAmount) {
	var tip;
	if (billAmount < 50) {
		tip = billAmount*.20;
	} else if (billAmount >= 50 && billAmount <= 200 ) {
		tip = billAmount*.15;
	} else {
		tip = billAmount*.10;
	}

	return tip; //could have just set percentage then returned billAmount*tipPercentage
}

var johnsBills = [124,48,268];
var johnsTips = [];
var johnsTotals = [];

johnsTips.push(discoverTip(johnsBills[0]));
johnsTips.push(discoverTip(johnsBills[1]));
johnsTips.push(discoverTip(johnsBills[2]));
//could have done this in the arrary tips[discoverTip(),discoverTip(),discoverTip()]

johnsTotals.push(johnsBills[0] + johnsTips[0]);
johnsTotals.push(johnsBills[1] + johnsTips[1]);
johnsTotals.push(johnsBills[2] + johnsTips[2]);
//same as above
console.log(johnsBills,johnsTips,johnsTotals);


//Challenge 4

john = {
	fullName: 'John Snow',
	mass:120,
	hight: 1.61,
	bmiCalc: function(){
		this.bmi = this.mass / (this.hight*this.hight);
		return this.bmi;
	}
}

mike = {
	fullName: 'Mike White',
	mass: 90.72,
	hight: 1.49,
	bmiCalc: function(){
		this.bmi = this.mass / (this.hight*this.hight);
		return this.bmi;
	}
}
john.bmiCalc();
mike.bmiCalc();

if (john.bmi > mike.bmi) {
	console.log(john.fullName + ' has a better bmi with ' + john.bmi + ' at ' + john.hight + ' meters tall and ' +john.mass+ ' kg');
} else if (mike.bmi > john.bmi) {
	console.log(mike.fullName + ' has a better bmi with ' + mike.bmi + ' at ' + mike.hight + ' meters tall and ' +mike.mass+ ' kg');
} else {
	console.log('They have the same BMI');
	console.log(john);
	console.log(mike);
}

//Challenge 5
function averageCalculator(avrages) {
	var avrage=0;
	for(i=0;i<avrages.length;i++){
		avrage+=avrages[i];
	}
	return (avrage/avrages.length);
}

johnsFamilyTrip = {
	bills: [124,48,268,180,42],
	tips: [],
	totals: [],
	tipCalc: function(){
		for(i=0;i<this.bills.length;i++) {
			var tipPercentage;
			// could have made a variable for this.bills[i] so you dont have to type it over and over again
			if (this.bills[i] < 50) {
				tipPercentage = .20
			} else if (this.bills[i] >= 50 && this.bills[i] <= 200 ) {
				tipPercentage = .15;
			} else {
			tipPercentage = .10;
			}
			// also could have added each value like tips[i] = blah
			// this could have done totals[i] = this.bills[i] + tips[i]
			tip = this.bills[i] * tipPercentage;
			this.tips.push(tip);
			this.totals.push(this.bills[i] + tip);
		}
		return this.tips;
	}
}

johnsFamilyTrip.tipCalc();

console.log(johnsFamilyTrip);

marksFamilyTrip = {
	bills: [77,375,110,45],
	tips: [],
	totals: [],
	tipCalc: function(){
		for(i=0;i<this.bills.length;i++) {
			var tipPercentage;
			if (this.bills[i] < 100) {
				tipPercentage = .20
			} else if (this.bills[i] >= 100 && this.bills[i] <= 300 ) {
				tipPercentage = .10;
			} else {
			tipPercentage = .25;
			}
			tip = this.bills[i] * tipPercentage;
			this.tips.push(tip);
			this.totals.push(this.bills[i] + tip);
		}
		return this.tips;
	}
}

marksFamilyTrip.tipCalc();

console.log(marksFamilyTrip);

//should have added it to the object lol
johnsAvrageTipAmount = averageCalculator(johnsFamilyTrip.tips);
marksAvrageTipAmount = averageCalculator(marksFamilyTrip.tips);

if(johnsAvrageTipAmount > marksAvrageTipAmount) {
	console.log('Johns Family tipped more than Marks Family. Johns Family Tipped: ' + johnsAvrageTipAmount);
} else if (marksAvrageTipAmount > johnsAvrageTipAmount) {
	console.log('Marks Family tipped more than Johns Family. Marks Family Tipped: ' + marksAvrageTipAmount);
} else {
	console.log('Both Families Tipped the same! Marks Family Tipped ' + marksAvrageTipAmount + '. Johns Family Tipped ' + johnsAvrageTipAmount + '.')
}
