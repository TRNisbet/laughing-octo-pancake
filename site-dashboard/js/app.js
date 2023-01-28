console.log("linked");
var coll = document.getElementsByClassName("collapsible");
var i;
var jsonBtn = document.getElementById("jsonbtn");
var jsonText = document.getElementById("jsontext");
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


jsonBtn.addEventListener("click", function(){
    var data = {
        "Sex":Sex.value,
        "HighBP":HighBP.value,
        "CholCheck":CholCheck.value,
        "HighChol":HighChol.value,
        "PhysActivity":PhysActivity.value,
        "HvyAlcoholConsumP":HighBP.value,       
        "AnyHealthcare":AnyHealthcare.value,    
        "Education":Education.value,
        "GenHlth":GenHlth.value,           
        "Income":Income.value,
        "Age":Age.value,     
        "Fruits":Fruits.value,
        "Veggies":Veggies.value,      
        "NoDocbcCost":NoDocbcCost.value,
        "Mental_Health_Range":Mental_Health_Range.value,       
        "Physical_Health_Range":Physical_Health_Range.value,
        "BMI_Range":BMI_Range.value,
        "Smoker":Smoker.value,
        "Stroke":Stroke.value,
        "HeartDiseaseorAttack":HeartDiseaseorAttack.value,
        "DiffWalk":DiffWalk.value,
    }
    jsonText.innerHTML = JSON.stringify(data)
            console.log(data);
})

















$('.panel-collapse').on('show.bs.collapse', function () {
  $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
  $(this).siblings('.panel-heading').removeClass('active');
});





