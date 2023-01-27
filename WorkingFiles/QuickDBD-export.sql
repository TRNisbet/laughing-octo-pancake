-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "SourceData" (
    "Diabetes012" int   NOT NULL,
    "High_BP" int   NOT NULL,
    "HighChol" int   NOT NULL,
    "CholCheck" int   NOT NULL,
    "BMI" int   NOT NULL,
    "Smoker" int   NOT NULL,
    "Stroke" int   NOT NULL,
    "HeartDiseaseorAttack" int   NOT NULL,
    "PhysActivity" int   NOT NULL,
    "Fruits" int   NOT NULL,
    "Veggies" int   NOT NULL,
    "HvyAlcoholConsump" int   NOT NULL,
    "AnyHealthcare" int   NOT NULL,
    "NoDocbcCost" int   NOT NULL,
    "GenHlth" int   NOT NULL,
    "MentHlth" int   NOT NULL,
    "PHysHlth" int   NOT NULL,
    "DiffWalk" int   NOT NULL,
    "Sex" int   NOT NULL,
    "Age" int   NOT NULL,
    "Education" int   NOT NULL,
    "Income" int   NOT NULL
);

CREATE TABLE "Raw_Data_No_Duplicates" (
    "Index" int   NOT NULL,
    "Diabetes_Status" int   NOT NULL,
    "High_BP" int   NOT NULL,
    "HighChol" int   NOT NULL,
    "CholCheck" int   NOT NULL,
    "BMI_Range" int   NOT NULL,
    "Smoker" int   NOT NULL,
    "Stroke" int   NOT NULL,
    "HeartDiseaseorAttack" int   NOT NULL,
    "PhysActivity" int   NOT NULL,
    "Fruits" int   NOT NULL,
    "Veggies" int   NOT NULL,
    "HvyAlcoholConsump" int   NOT NULL,
    "AnyHealthcare" int   NOT NULL,
    "NoDocbcCost" int   NOT NULL,
    "GenHlth" int   NOT NULL,
    "Mental_Health_Range" int   NOT NULL,
    "Physical_Health_Range" int   NOT NULL,
    "DiffWalk" int   NOT NULL,
    "Sex" int   NOT NULL,
    "Age" int   NOT NULL,
    "Education" int   NOT NULL,
    "Income" int   NOT NULL,
    CONSTRAINT "pk_Raw_Data_No_Duplicates" PRIMARY KEY (
        "Index"
     )
);

CREATE TABLE "Data_Duplicates_Removed_Before_Binning" (
    "Index" int   NOT NULL,
    "Diabetes_Status" int   NOT NULL,
    "High_BP" int   NOT NULL,
    "HighChol" int   NOT NULL,
    "CholCheck" int   NOT NULL,
    "BMI_Range" int   NOT NULL,
    "Smoker" int   NOT NULL,
    "Stroke" int   NOT NULL,
    "HeartDiseaseorAttack" int   NOT NULL,
    "PhysActivity" int   NOT NULL,
    "Fruits" int   NOT NULL,
    "Veggies" int   NOT NULL,
    "HvyAlcoholConsump" int   NOT NULL,
    "AnyHealthcare" int   NOT NULL,
    "NoDocbcCost" int   NOT NULL,
    "GenHlth" int   NOT NULL,
    "Mental_Health_Range" int   NOT NULL,
    "Physical_Health_Range" int   NOT NULL,
    "DiffWalk" int   NOT NULL,
    "Sex" int   NOT NULL,
    "Age" int   NOT NULL,
    "Education" int   NOT NULL,
    "Income" int   NOT NULL,
    CONSTRAINT "pk_Data_Duplicates_Removed_Before_Binning" PRIMARY KEY (
        "Index"
     )
);

CREATE TABLE "Data_Duplicates_Removed_After_Binning" (
    "Index" int   NOT NULL,
    "Diabetes_Status" int   NOT NULL,
    "High_BP" int   NOT NULL,
    "HighChol" int   NOT NULL,
    "CholCheck" int   NOT NULL,
    "BMI_Range" int   NOT NULL,
    "Smoker" int   NOT NULL,
    "Stroke" int   NOT NULL,
    "HeartDiseaseorAttack" int   NOT NULL,
    "PhysActivity" int   NOT NULL,
    "Fruits" int   NOT NULL,
    "Veggies" int   NOT NULL,
    "HvyAlcoholConsump" int   NOT NULL,
    "AnyHealthcare" int   NOT NULL,
    "NoDocbcCost" int   NOT NULL,
    "GenHlth" int   NOT NULL,
    "Mental_Health_Range" int   NOT NULL,
    "Physical_Health_Range" int   NOT NULL,
    "DiffWalk" int   NOT NULL,
    "Sex" int   NOT NULL,
    "Age" int   NOT NULL,
    "Education" int   NOT NULL,
    "Income" int   NOT NULL,
    CONSTRAINT "pk_Data_Duplicates_Removed_After_Binning" PRIMARY KEY (
        "Index"
     )
);

