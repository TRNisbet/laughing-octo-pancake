function predictStatus(){

    // inputs
    var coll = document.getElementsByClassName("collapsible");
    //var i;
    // var jsonbtn = document.getElementById("jsonbtn");
    // var jsontext = document.getElementsByName("jsontext");
    var CholCheck = document.getElementById("CholCheck");
    var Sex = document.getElementById("Sex");
    var HighBP = document.getElementById("HighBP");
    var HighChol = document.getElementById("HighChol");
    var PhysActivity = document.getElementById("PhysActivity");
    var HvyAlcoholConsump = document.getElementById("HvyAlcoholConsump");
    var AnyHealthcare = document.getElementById("AnyHealthcare");
    var Education = document.getElementById("Education");
    var GenHlth = document.getElementById("GenHlth");
    var Income = document.getElementById("Income");
    var Age = document.getElementById("Age");
    var Fruits = document.getElementById("Fruits");
    var Veggies = document.getElementById("Veggies");
    var NoDocbcCost = document.getElementById("NoDocbcCost");
    var Mental_Health_Range = document.getElementById("Mental_Health_Range");
    var Physical_Health_Range = document.getElementById("Physical_Health_Range");
    var BMI_Range = document.getElementById("BMI_Range");
    var Smoker = document.getElementById("Smoker");
    var Stroke = document.getElementById("Stroke");
    var HeartDiseaseorAttack = document.getElementById("HeartDiseaseorAttack");
    var DiffWalk = document.getElementById("DiffWalk");

    
    var data = {

          "HighBP":parseFloat(HighBP.value),
          "HighChol":parseFloat(HighChol.value),
          "CholCheck":parseFloat(CholCheck.value),
          "BMI_Range":parseFloat(BMI_Range.value),
          "Smoker":parseFloat(Smoker.value),
          "Stroke":parseFloat(Stroke.value),
          "HeartDiseaseorAttack":parseFloat(HeartDiseaseorAttack.value),
          "PhysActivity":parseFloat(PhysActivity.value),
          "Fruits":parseFloat(Fruits.value),
          "Veggies":parseFloat(Veggies.value), 
          "HvyAlcoholConsump":parseFloat(HvyAlcoholConsump.value),
          "AnyHealthcare":parseFloat(AnyHealthcare.value),
          "NoDocbcCost":parseFloat(NoDocbcCost.value),
          "GenHlth":parseFloat(GenHlth.value),
          "Mental_Health_Range":parseFloat(Mental_Health_Range.value),       
          "Physical_Health_Range":parseFloat(Physical_Health_Range.value),
          "DiffWalk":parseFloat(DiffWalk.value),
          "Sex":parseFloat(Sex.value),
          "Age":parseFloat(Age.value),  
          "Education":parseFloat(Education.value),          
          "Income":parseFloat(Income.value)        
      };
  
  
    // outputs
        var diabetesResult = document.getElementById("resultimage");
    
  
    // POST the data to the app
    var $j = jQuery.noConflict(); 

    $j.ajax({
      type: "POST",
      url: "/predict",
      data: JSON.stringify(data),
      contentType: "application/json",
      dataType: 'json',
  
      // update the index page with the results
      success: function(result) {
        // diabetesResult.innerHTML = result.diabetes;
        if (result.diabetes == 1){
          diabetesResult.src="/static/images/result1.jpg";
        }else {
          diabetesResult.src="/static/images/result2.jpg";
        }
        $j("#demo1").collapse("hide");
        $j("#demo2").collapse("show"); 
      }
    });
  };
