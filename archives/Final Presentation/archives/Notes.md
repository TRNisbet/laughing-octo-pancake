Things I'd like to include: 

Visualization of
Pie Plot of diabetes ratio in unprocessed dataset (all dupes included no binning done) 

Visualization of correlation with diabetes for all measurements. 

Decision made on which items are being deleted 

Decision made on how to handle outliers (in the sample dataset, bmi outliers are removed)
Interactive visualization - changes based on selection
> Diabetes by Gender 
> Diabetes by Smoker and Heavy Alcohol Consumption
> Diabetes by Stroke and Heart Disease 
> Diabetes by High Blood Pressure and High Cholesterol
> Diabetes by BMI 
> Diabetes by Age Group 

Information on website with summary of analysis

Still need to split data since we are not doing train/test - to validate our model is working. 

Need to decide what model we are going to use. 
    Logistic Regresson 
    
Did we ever programmatically select features?
FeatureSelection = SelectPercentile(score_func = f_classif, percentile=70) 
x = FeatureSelection.fit_transform(x, y)

#showing X Dimension 
print('X Shape is ' , x.shape)
print('Selected Features are : ' , FeatureSelection.get_support())

