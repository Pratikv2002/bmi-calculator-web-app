let calBtn = document.getElementById("calculate");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let outputBmi = document.getElementById("outBmi")
let outputCategory =document.getElementById("outCategory")
let outputRisk =document.getElementById("outRisk")
let errorI = document.getElementById("errorIn")
calBtn.addEventListener('click',calculatebBmi);
let finalBmi = 0;
function calculatebBmi(){
     let finalBmi = weight.value/(height.value**2/10000);
     finalBmi = finalBmi.toFixed(2)
     outputBmi.value =finalBmi;
    if(height.value==''|| weight.value==''){
        errorI.textContent = "Please Enter Height And Weight both"
        outputBmi.value =0;
        outputCategory.value="....."
        outputRisk.value = "....."

    
    }else{
        errorI.textContent = ""
        if(finalBmi<16){
            outputCategory.value = "Severe Thinness"
            outputCategory.style.color  = "yellow"
            outputCategory.style.backgroundColor  = "black"
            outputRisk.style.color  = "yellow"
            outputRisk.style.backgroundColor  = "black"
            outputRisk.value = " High-Risk"
        }
        else if(finalBmi>=16&&finalBmi<=17){
            outputCategory.value = "Moderate Thinness"
            outputCategory.style.color  = "yellow"
            outputCategory.style.backgroundColor  = "black"
            outputRisk.style.color  = "yellow"
            outputRisk.style.backgroundColor  = "black"
            outputRisk.value = " Moderate-Risk"
        }
        else if(finalBmi>=17.1&&finalBmi<=18.4){
            outputCategory.value = "Mild Thinness"
            outputCategory.style.color  = "yellow"
            outputCategory.style.backgroundColor  = "black"
            outputRisk.style.color  = "yellow"
            outputRisk.style.backgroundColor  = "black"
            outputRisk.value = "Low-Risk"
        }
        else if(finalBmi>=18.5&&finalBmi<=25){
            outputCategory.value = "Normal"
            outputRisk.value = "Healdhy Person"
            outputCategory.style.color  = "green"
            outputRisk.style.color  = "green"
          
        }
        else if(finalBmi>=25.1&&finalBmi<=30){
            outputCategory.value = "OverWeight"
            outputRisk.value = "No Risk"
            outputCategory.style.color  = "orange"
            outputRisk.style.color  = "orange"
        }
        else if(finalBmi>=30.1&&finalBmi<=35){
            outputCategory.value = "Obese Class-I"
            outputRisk.value = "Low-Risk"
            outputCategory.style.color  = "Red"
            outputRisk.style.color  = "Red"
        }
        else if(finalBmi>=35.1&&finalBmi<=40){
            outputCategory.value = "Obese Class-II"
            outputRisk.value = "Moderate-Risk"
            outputCategory.style.color  = "Red"
            outputRisk.style.color  = "Red"
        }
        else{
            outputCategory.value = "Obese Class-III"
            outputRisk.value = "High-Risk"
            outputCategory.style.color  = "Red"
            outputRisk.style.color  = "Red"
        }
    }
    }
// reset
let reset = document.getElementById('reset');
reset.addEventListener('click',resetBtn);
function resetBtn(){
    weight.value='';
    height.value=''
}
