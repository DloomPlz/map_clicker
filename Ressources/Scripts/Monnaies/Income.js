//////CLASS_Income\\\\\\\\\\\\\\\\\\
function Income(){

   // Add object properties
   this.Income = 0;
   this.TotalIncome= 0;
}

	// Add methods
	Income.prototype.getIncome = function(){

		return this.Income;
	};
	Income.prototype.getTotalIncome = function(){
		
		
	    return this.TotalIncome;
	};
	Income.prototype.IncrementIncome = function(){

	    this.Income=this.Income+1;
	    this.TotalIncome=this.TotalIncome+1;
	};
	Income.prototype.setIncome = function(int){

	    this.Income=int;
	    this.TotalIncome=int;
	};


	Income.prototype.AddIncome = function(int){

	    this.Income=this.Income+int;
	    this.TotalIncome=this.TotalIncome+int;
	};
	Income.prototype.Afficher = function(){
		var arrondie = arrondir(this.getIncome());
	    $('#Income').html(arrondie);
	};
	Income.prototype.RemoveIncome = function(int){

		

		this.Income=this.Income-int;
	};

function arrondir(resultat) {
        
	  resultat2 = Math.round(resultat); 

      return resultat2;
}

// Instantiate new objects 
var monIncome = new Income();



