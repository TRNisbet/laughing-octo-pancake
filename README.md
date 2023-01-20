# laughing-octo-pancake
# UNC BootCamp Final Project 

#### Participants 
    - Kellie Brabec
    - Rachel Conner
    - Tom Nesbit
    - Ash Seth
    - Andrew Stewart

## Overview
As the capstone project to the UNC DataAnalytics Bootcamp, students have been challenged to use a dataset to tell a story.  This collaborative project will be done in three phases, documented in this README.md file, along with documented code and other project collateral.  The phases are broken out as below: 
    - Sketch it Out - Decide on the project, question to answer, and model.  This will result in a project prototype
    - Build and Assemble - The team will train the model, build any related databases, and create the interactive dashboard and presentation 
    - Put it all together - The team will finalize the model, database and dashboard, and present the final project to the cohort. 

### Topic 
The team considered a number of different topics, from recipe selection based on likes/dislikes and available ingredients, lottery number predictions, and healthcare data analysis.  Various data sets were reviewed as part of the consideration process.  The team settled on the topic of healthcare screening predictions as their topic.  Based on available datasets, they selected diabetes prediction based on various factors.  

### Reasoning 
The team reviewed three different datasets before selecting the source dataset for their project.   As part of the consideration for each data set, the team was looking for questions in the data that most non medical people would be able to answer about their own health, as well as a considerable number of records that would allow them to build a model that would have high accuracy for prediction.  
#### Cancer Data Set 
The first file that was reviewed was the Lung Cancer Data Set (https://data.world/cancerdatahp/lung-cancer-data).  This data set had questions that most people shouuld be able to answer about their own health, however it only included 1000 records, which the team felt was not a large enough dataset to train a robust model for their project.  This data was not considered for use as part of this project. 

### Cardiovascular Data Set 
The second dataset that was reviewed was the Heart Failure Prediction set (https://www.kaggle.com/datasets/fedesoriano/heart-failure-prediction).  This data set included questions that most non medical people would not be able to answer about thier health, which made it less than ideal for use in a predictive model.  There were also only approximately 900 records in the dataset, which the team felt was not large enough to train a robust model. 

### Diabetes Data Set 
The third dataset that was reviewed was the Binary Health Indicators dataset that is part of the Diabetes Health Indicators file (https://www.kaggle.com/datasets/alexteboul/diabetes-health-indicators-dataset?select=diabetes_binary_health_indicators_BRFSS2015.csv)  This file includes questions that most non medical people would be able to answer about their health.  It also includes over 250,000 records, which after pre-processing, would be large enough to train a robust predictive model.  This data set is also based on telephone survey work completed by the Centers for Disease Control and Prevention, and has already been pre-processed to remove a great deal of the 'noise' that can be available in public datasets.  

## Data Overview 
The initial review of the dataset showed that there were 22 columns, with 253,680 records.  The columns in the dataset are described below: 

|Column Name|Description|
|-----------|-----------|
|Diabetes_Binary| Indicates if the respondant does not have diabetes or has been diagnosed with prediabetes or diabetes|
|HighBP|Indicates if the respondant has been diagnosed with high blood pressure|
|HighChol|Indicates if the respondant has been diagnosed with high cholesterol|
|CholCheck|Indicates if the respondant has had a cholesterol check in the past 5 years|
|BMI|Indicates the BMI of the respondant|
|Smoker|Indicates if the respondant has smoked over 100 cigarettes in their life|
|Stroke|Indicates if the respondant has ever been told they had a stroke|
|HeartDiseaseorAttack|Indicates if the respondant has ever been diagnosed with Coronary Heart Disease or a myocardial infarction|
|PhysActivity|Indicates if the respondant has had physical activity within the past 30 days|
|Fruits|Indicates if the respondant has indicated they consume fruit one or more times a day|
|Veggies|Indicates if the respondant indicates they consume vegetables one or more times a day|
|HvyAlcoholConsumption|Indicates if the respondant is a heavy drinker (based on sex)|
|AnyHealthcare|Indicates if the respondant has indicated they have any type of healthcare coverage|
|NoDocbcCost|Indicates if the respondant has ever not seen a doctor due to cost|
|GenHealth|Indicates the self assigned score of a respondants general health quality|
|MentHlth|Indicates how many days out of the last 30 that a respondant has had poor mental health|
|PhysHlth|Indicates how m any days out of the last 30 that a respondant has had poor physical health|
|DiffWalk|Indicates if the respondant has indicated that they have serious difficulty walking or climbing stairs|
|Sex|IRecords if the respondant has indicated they are male or female|
|Age|Indicates the age group that a respondant falls into|
|Education|Indicates the level of education that a respondant reports|
|Income|Indicates the salary band that a respondant reports|

## Question to Answer




