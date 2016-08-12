(function(){
	// 'angular' --> AngularJS library
	// 'module' --> creates a module
	// 'store' --> name of the module
	// [] --> used to include any dependencies if needed (other libraries)
	var app = angular.module('gemStore', ['store-products-directives']);
	var gem = [
	{ 
		name: 'Audi', 
		price: 2.95,
		description:'The Audi emblem with its four rings identifies one of Germanys oldest-established automobile manufacturers. It symbolizes the amalgamation in 1932 of four previously independent motor-vehicle manufacturers: Audi, DKW, Horch and Wanderer. These companies form the roots of what is today AUDI AG.',
		version:'A5',
		color: 'Black',
		reviews:[{
			stars: 5,
			body: "I love this Audi!",
			author: "joe@example.org",
			createdOn: 1397490980837
		}, {
			stars: 1,
			body: "This Audi sucks.",
			author: "tim@example.org",
			createdOn: 1397490980837
		}],
		images: [
			"assets/audi/a5.jpg",
			"assets/audi/a4.jpg",
			"assets/audi/a6.jpg"
		]
	},
	{ 
		name: 'BMW', 
		price: 5.95,
		description:'The 5 GT serves as a combination of a sport sedan, an SUV, and a Gran Turismo. The concept was equipped with individual rear seats separated by the center console, whereas the production model has 5 seats.',
		version:'5 series',
		color: 'Red',
		reviews: [{
			stars: 5,
			body: "I love this Benz!",
			author: "joe@example.org",
			createdOn: 1397490980837
		}, {
			stars: 1,
			body: "This Benz sucks.",
			author: "tim@example.org",
			createdOn: 1397490980837
		}],
		images: [
			"assets/bmw/b4.jpg",
			"assets/bmw/b5.jpg",
			"assets/bmw/b6.jpg"
		]
	},
	{ 
		name: 'Benz', 
		price: 3.95,
		description: 'The G-class was developed as a military vehicle from a suggestion by the Shah of Iran (at the time a significant Mercedes shareholder) to Mercedes[4] and offered as a civilian version in 1979. In this role it is sometimes referred to as the "Wolf" and LAPV Enok. The Peugeot P4 is a variant made under license, with a Peugeot engine and different parts.',
		version: 'G5',
		color: 'Red',
		reviews: [{
			stars: 5,
			body: "I love this Benz!",
			author: "joe@example.org",
			createdOn: 1397490980837
		}, {
			stars: 1,
			body: "This Benz sucks.",
			author: "tim@example.org",
			createdOn: 1397490980837
		}],
		images: [
			"assets/benz/be4.jpg",
			"assets/benz/be5.gif",
			"assets/benz/be6.jpg"
		]
	}
	];
	
	// Store Controller
	app.controller('StoreController', function(){
		this.products = gem;
	});
	
	//Gallery Controller
	
	
	// Review controller
	app.controller('ReviewController', function(){
		this.review = {};
		
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	
	

})();