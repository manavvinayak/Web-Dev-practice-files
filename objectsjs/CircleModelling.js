var circle = {
	radius: 10,
  	circumference(){
    var Circum = 2 * Math.PI * this.radius;
		console.log(Circum.toFixed(2)); // For Precision to 2 decimal point
  },
	area(){
	var Area =  Math.PI * (this.radius ** 2);
  		console.log(Area.toFixed(2)); // For Precision to 2 decimal point
	}
};

circle.circumference();
circle.area();