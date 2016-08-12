(function(){

	var app = angular.module('store-products-directives', []);
	// Custom Directive <product-title>
	app.directive('productTitle', function(){
		
		// return a configuration object defining how the directive should work
		return{
			restrict: 'E', // type of directive, E => element (<product-title>)
			templateUrl: 'product-title.html' // url of the template which should be rendered by the directive.
		};		
	});
	
	// Custom Directive <product-description>
	app.directive("productDescription", function(){
		return{
			restrict: 'E',
			templateUrl: 'product-description.html'
		};
	});
	
	// Custom Directive product-specs attribute
	app.directive("productSpecs", function(){
		return{
			restrict: 'A',
			templateUrl: 'product-specs.html'
		};
	});
	
	// Custom Directive <product-review>
	app.directive("productReviews", function(){
		return{
			restrict: 'E',
			templateUrl: 'product-reviews.html'
		};
	});
	
	// Custom Directive <product-tabs>
	app.directive("productTabs", function(){
		return{
			restrict: 'E',
			templateUrl: 'product-tabs.html',
			controller: function(){
				// Initializing tab for higlight by default to 1.
				this.tab = 1;
		
				// Set tab, to see which one is selected.
				this.setTab = function(selectTab){
					this.tab = selectTab;
				};
		
				//checking which tab is selected.
				this.isSet= function(selectedTab){
					return this.tab === selectedTab;
				};
			},
			controllerAs: 'tab'
		};
	});
	
	// Custom Directive <product-gallery>
	app.directive("productGallery", function(){
		return{
			restrict: 'E',
			templateUrl: 'product-gallery.html',
			controller: function(){
				this.current = 0;
				this.setCurrent = function(index){
					this.current = index;
				};
			},
			controllerAs: 'gallery'
		};
	});
})();