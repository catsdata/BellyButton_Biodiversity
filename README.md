# BellyButton Biodiversity


<details><summary>Table of Contents</summary>
<p>

1. [Overview](https://github.com/catsdata/BellyButton_Biodiversity#overview)
2. [Resources](https://github.com/catsdata/BellyButton_Biodiversity#resources)
3. [Results](https://github.com/catsdata/BellyButton_Biodiversity#results)
4. [Summary](https://github.com/catsdata/BellyButton_Biodiversity#summary)

</p>
</details>

## Overview

This is the most disgusting project ever.  
This project also tested my patience with google and slack overflow due to lack of provided information in the module.

Roza has a partially completed dashboard that she needs to finish. She has a completed panel for demographic information and now needs to visualize the bacterial data for each volunteer. Specifically, her volunteers should be able to identify the top 10 bacterial species in their belly buttons. That way, if Improbable Beef identifies a species as a candidate to manufacture synthetic beef, Roza's volunteers will be able to identify whether that species is found in their navel.

## Resources

- Data Sources: 
    - [belly button sample data](https://github.com/catsdata/BellyButton_Biodiversity/blob/main/samples.json)
    - [starter files](https://github.com/catsdata/BellyButton_Biodiversity/tree/main/resources)
- Software:  
    - Javascript
    - HTML
    - Plotly
    - CSS
    - Bootstrap
    - D3 (js)

## Results

- Deliverable 1: Create a Horizontal Bar Chart      
    - Code is written to create the arrays when a sample is selected from the dropdown menu 
    - Code is written to create the trace object in the buildCharts() function, and it contains the following:
        - The y values are the otu_ids in descending order
        - The x values are the sample_values in descending order
        - The hover text is the otu_labels in descending order
    - Code is written to create the layout array in the buildCharts() function that creates a title for the chart
    - When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard, and the bar chart has the following:
        - The top 10 sample_values are sorted in descending order
        - The top 10 sample_values as values
        - The otu_ids as the labels

- Deliverable 2: Create a Bubble Chart
    - The code for the trace object in the buildCharts(); function does the following:
        - Sets the otu_ids as the x-axis values
        - Sets the sample_values as the y-axis values
        - Sets the otu_labels as the hover-text values
        - Sets the sample_values as the marker size
        - Sets the otu_ids as the marker colors
    - The code for the layout in the buildCharts(); function does the following:
        - Creates a title
        - Creates a label for the x-axis
        - The text for a bubble is shown when hovered over
    - When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard. All three charts should also be working according to their requirements when a sample is selected from the dropdown menu

- Deliverable 3: Create a Gauge Chart
    - The code to build the gauge chart does the following:
        - Creates a title for the chart
        - Creates the ranges for the gauge in increments of two, with a different color for each increment
        - Adds the washing frequency value on the gauge chart
        - The indicator shows the level for the washing frequency on the gauge
        - The gauge is added to the dashboard
        - The gauge fits in the margin of the <div> element.
    - When the webpage loads, the bar and bubble chart are working according to the requirements in Deliverable 1 and 2, respectively, and the gauge chart is working according to the requirements listed for this Deliverable

- Deliverable 4: Customize the Dashboard
    - The webpage has three customizations
    - When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard, and all three charts should be working according to the requirements when a sample is selected from the dropdown menu

![finalproduct](https://github.com/catsdata/BellyButton_Biodiversity/blob/main/resources/fullimage.png)

## Summary

Upload the following to your GitHub pages repository:

- The updated index.html file.
- The charts.js file, which should be in the js folder of the static folder.
- The samples.json file.
- A README.md that describes the purpose of the repository. Although there is no graded written analysis for this challenge, it is encouraged and good practice to add a brief description of your project.
