console.log("linked");
// var coll = document.getElementsByClassName("collapsible");
// var i;
var jsonbtn = document.getElementById("jsonbtn");
var jsontext = document.getElementsByName("jsontext");
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
var machineLearningResult = 0;

jsonbtn.addEventListener("click", function(){
    var data = {
        "Sex":parseFloat(Sex.value),
        "HighBP":parseFloat(HighBP.value),
        "CholCheck":parseFloat(CholCheck.value),
        "HighChol":parseFloat(HighChol.value),
        "PhysActivity":parseFloat(PhysActivity.value),
        "HvyAlcoholConsump":parseFloat(HvyAlcoholConsump.value),       
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


sessionStorage.setItem('jsontext', jsontext);
     
    // var textToSave = jsontext;
    // var hiddenElement = document.createElement('a');
    // hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    // hiddenElement.target = '_blank';
    // hiddenElement.download = 'surveyExport.json';
    // hiddenElement.click();


    console.log(jsontext); 
    localStorage.setItem('jsontext', jsontext);
});



surveybtn.addEventListener("click", function Func() {

        fetch('../results/results.json')
          .then((res) => {
            return res.json();
          })

        .then((data) => {
          machineLearningResult = data.result[0];
          console.log(machineLearningResult);
          document.getElementById('im1').src = './static/images/result'+ machineLearningResult + '.jpg';
        });

});


$('.panel-collapse').on('show.bs.collapse', function () {
  $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
  $(this).siblings('.panel-heading').removeClass('active');
});





