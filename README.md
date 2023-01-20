# laughing-octo-pancake
# UNC BootCamp Final Project 

#### Participants 
    - Kellie Brabec
    - Rachel Conner
    - Tom Nisbet
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

## Question to Answer
Based on the intial analysis of the data, and the goal of the project, the team will be attempting to answer the question "Should I be screened for Diabetes?" 

This question and its related answer will be based on information that is entered into our interactive website that will be passed through the trained machine learning model.  The model will return a prediction for the Diabetes_status field, which will then indicate if the respondant should schedule a visit with their primary care provider for diabetes screening.

## Data Overview 
The initial review of the dataset showed that there were 22 columns, with 253,680 records.  The columns in the dataset are described below: 

|Column Name|Description|
|-----------|-----------|
|Diabetes_012| Indicates if the respondant does not have diabetes or has been diagnosed with prediabetes or diabetes|
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

### Data Exploration 
There were no NaN(Null) values included in the dataset, so no records needed to be dropped.  

The dataset was scanned for duplicates.  There werer 23899 records that were flagged by Python as a duplicate record. This was approximately 9.42% of the dataset. 'Duplicate' in this defintion would indicate all items were identical in the DataFrame.  However, because of the size of the dataset, and the consideration that many people could have the same results when surveyed. The team decided to build the model using a file that contains the potential duplicate records, and a file that has had them removed.  This will help determine if there is additional weighting being added to the 'duplicate' records as part of the prediction process. 

### Binning 
Due to the nature of the data in the dataset, the team decided that binning on selected columns was appropriate.  Binning was done as indicated below 

|Column |Binning Notes|
|-------|-------------|
|Diabetes_012|Binned to include respondents in one of two buckets, indicating they already have a Diabetes diagnosis or they do not|
|BMI|Binned to fall into one of 4 bins, (0-18.5, 18.5-24.9, 24.9-29.9, 29.9-100)|
|MentHlth|Binned into one of 6 bins, 0-4 days, 5-9 days, 10-14 days, 15-19 days, 20-24 days, 25-30 days|
|PhysHlth|Binned into one of 6 bins, 0-4 days, 5-9 days, 10-14 days, 15-19 days, 20-24 days, 25-30 days|

Bins for BMI were determined based on CMS classification data definitions for underweight, normal, overweight and obese based on BMI.  Bins for Mental and Physical health dates were broken into 5 day increments by default. 

Additional binning for age, income scale and education level were not done.  These elements were already binned in the source data, with those bins being defined in the Codebook associated with the original dataset.  (https://www.cdc.gov/brfss/annual_data/2015/pdf/codebook15_llcp.pdf)

 




