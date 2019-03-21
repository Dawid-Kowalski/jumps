const calculateDistancePoints = (distance, hillSize, kPoint) => {
	
	let distancePoints = 0;
	let hillPoints = 0;
	let basicPoints = 0;


	switch(hillSize) {
		case "normalna":
			hillPoints = 2;
			basicPoints = 60;
			break;
		case "duża":
			hillPoints = 1.8;
			basicPoints = 60;
			break;
		case "mamucia":
			hillPoints = 1.2;
			basicPoints = 120;
			break;
		default:
			return "nieznana skocznia";
	}

	distancePoints = (distance>=kPoint) ? basicPoints+(round(distance)-kPoint)*hillPoints : basicPoints - (kPoint - round(distance))*hillPoints;

	function round(number){

		let roundNumber = 0;

		if((number*10)%10 >= 0) {
			roundNumber = Math.floor(number);
		}

		if((number*10)%10 >= 2.5) {
			roundNumber = Math.floor(number) + 0.5;
		}

		if((number*10)%10 >= 5) {
			roundNumber = Math.floor(number) + 0.5;
		}

		if((number*10)%10 >= 7.5) {
			roundNumber = Math.floor(number) + 1;
		}

		return roundNumber;

	}

	return distancePoints;
};

module.exports = calculateDistancePoints;