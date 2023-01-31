console.log("linked");
var coll = document.getElementsByClassName("collapsible");
var i;
var jsonbtn = document.getElementById("jsonbtn");
var jsontext = document.getElementsByName("jsontext");
var CholCheck = document.getElementById("CholCheck");
var Sex = document.getElementById("Sex");
var HighBP = document.getElementById("HighBP");
var HighChol = document.getElementById("HighChol");
var PhysActivity = document.getElementById("PhysActivity");
var HvyAlcoholConsum = document.getElementById("HvyAlcoholConsum");
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
var token = {};

jsonbtn.addEventListener("click", function(){
    var data = {
        "Sex":parseFloat(Sex.value),
        "HighBP":parseFloat(HighBP.value),
        "CholCheck":parseFloat(CholCheck.value),
        "HighChol":parseFloat(HighChol.value),
        "PhysActivity":parseFloat(PhysActivity.value),
        "HvyAlcoholConsumP":parseFloat(HighBP.value),       
        "AnyHealthcare":parseFloat(AnyHealthcare.value),    
        "Education":parseFloat(Education.value),
        "GenHlth":parseFloat(GenHlth.value),           
        "Income":parseFloat(Income.value),
        "Age":parseFloat(Age.value),     
        "Fruits":parseFloat(Fruits.value),
        "Veggies":parseFloat(Veggies.value),      
        "NoDocbcCost":parseFloat(NoDocbcCost.value),
        "Mental_Health_Range":parseFloat(Mental_Health_Range.value),       
        "Physical_Health_Range":parseFloat(Physical_Health_Range.value),
        "BMI_Range":parseFloat(BMI_Range.value),
        "Smoker":parseFloat(Smoker.value),
        "Stroke":parseFloat(Stroke.value),
        "HeartDiseaseorAttack":parseFloat(HeartDiseaseorAttack.value),
        "DiffWalk":parseFloat(DiffWalk.value),
    }

    jsontext = JSON.stringify(data)
            console.log(data);
            console.log(jsontext);

localStorage.setItem('jsontext', jsontext);
token = jsontext;
  // var textToSave = jsontext;
  // var hiddenElement = document.createElement('a');

  // hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
  // hiddenElement.target = '_blank';
  // // hiddenElement.download = 'surveyExport.json';
  // localStorage.setItem('jsontext', jsontext);
  // hiddenElement.click();

});



$('.panel-collapse').on('show.bs.collapse', function () {
  $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
  $(this).siblings('.panel-heading').removeClass('active');
});





