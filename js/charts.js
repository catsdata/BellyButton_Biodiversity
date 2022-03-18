// create function to initialize the dashboard
function init() {

    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  // Initialize the dashboard
  init();
  
  // create a function for data when options selected
  function optionChanged(newSample) {

    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
  }
  
  // Demographics Panel 
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;

      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];

      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
    });
  }
  
  // DELIVERABLE 1

  // 1. we’ve provided the code for the buildCharts(); function that contains the argument sample, which is the sample that is selected from the dropdown menu
  function buildCharts(sample) {

    // 2. we’ve provided the code to retrieve the samples.json file using the d3.json().then() method
    d3.json("samples.json").then((data) => {

      // 3. create a variable that has the array for all the samples.
      var samplesArray = data.samples;
      
      // 4. create a variable that will hold an array that contains all the data from the new sample that is chosen from the dropdown menu.
      var samplesById = samplesArray.filter(newId => newId.id === sample);
      
      //  5. create a variable that holds the first sample in the array
      var firstSample = samplesById[0];

      // 6. create variables that have arrays for otu_ids, otu_labels, and sample_values.
      var otuIds = firstSample.otu_ids;
      var otuLabels = firstSample.otu_labels;
      var sampleValues = firstSample.sample_values;
  
      // 7. create the yticks for the bar chart.
      // Hint: Get the the top 10 otu_ids and map them in descending order so the otu_ids with the most bacteria are last. 
  
      var yticks = otuIds.map(oId => "OTU " + oId + " ").slice(0, 10).reverse();
  
      // 8. create the trace object for the bar chart, where the x values are the sample_values and the hover text for the bars are the otu_labels in descending order.
      // https://www.w3schools.com/js/js_graphics_plotly.asp
      var barData = [{
        type: 'bar',
        orientation: 'h',
        text: otuLabels,
        y: yticks,
        x: sampleValues.slice(0,10).reverse(), 
        marker: {
          color: "DarkMagenta",
          width: 10
        } 
      }];

      // 9. create the layout for the bar chart that includes a title 
      var barLayout = {
        title: {
          text: "Top 10 Bacteria Cultures Found",
          font: {
            family: 'Comic Sans MS',
            size: 28,
            color: "royalblue",
          },
        }, 
      };

      // 10.  use the Plotly.newPlot() function to plot the trace object with the layout. 
      Plotly.newPlot("bar", barData, barLayout);
  
  // DELIVERABLE 2

  // bubble chart
  // https://code.tutsplus.com/tutorials/create-interactive-charts-using-plotlyjs-bubble-and-dot-charts--cms-29209

      // 1. To create the trace object for the bubble chart do the following:
      //    Assign the otu_ids, sample_values, and otu_labels to the x, y, and text properties, respectively.
      //    For the mode and marker properties, the mode is "markers" and the marker property is a dictionary that defines the size, color, and colorscale of the markers..
      
      var bubbleData = [{
        type: 'bubble',
        x: otuIds,
        y: sampleValues,
        text: otuLabels,
        mode: 'markers',
        marker: {
          size: sampleValues,
          color: otuIds,
          colorscale: "Rainbow",
        }
      }];
  
      // 2. To create the layout for the bubble chart, add a title, a label for the x-axis, margins, and the hovermode property. 
      // The hovermode should show the text of the bubble on the chart when you hover near that bubble.
      // https://stackoverflow.com/questions/43138171/how-to-remove-background-line-of-plotly-area-graph

      var bubbleLayout = {
        title: {
          text: 'Because Rainbow colors make Belly Button Burgers less disgusting?',
          font: {
            family: 'Comic Sans MS',
            size: 35,
            color: "royalblue",
          },
        },
        xaxis: {
          title: "OTU Id's",
          showgrid: false,
          showline: true
        },
        yaxis: {
          title: "Quantity Found",
        },
        hovermode: "closest",
        height: 450,
        showlegend: false,
      };
  
      // 3. Use Plotly to plot the data with the layout.
      Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
  
  // DELIVERABLE 3
  // gauge chart
  // https://plotly.com/javascript/gauge-charts/
  // https://www.w3schools.com/tags/ref_colornames.asp

      // 3. create a variable that converts the washing frequency to a floating point number
      
      var freq = data.metadata.filter(guage => guage.id == sample)[0].wfreq;

      // 4. create the trace object for the gauge chart
      var gaugeData = [{
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          // 10 wfreq, group of 2
          axis: {range: [0,10], dtick: 2},
          bordercolor: "royalblue",
          borderwidth: 4,
          steps: [
            {range:[0,2], color: "red"},
            {range:[2,4], color: "orange"},
            {range:[4,6], color: "yellow"},
            {range:[6,8], color: "lightgreen"},
            {range:[8,10], color: "green"},
          ],        
          bar: {color: "DarkMagenta"},
        },
        value: freq
      }];
      
      // 5. create the layout for the gauge chart making sure that it fits in the <div></div> tag for the gauge id.
      // added title here for consistency in appearance along with bar chart
      var gaugeLayout = { 
        title: {
          text: "Washing Frequency<br>(per week)"},
          font: {
            family: 'Comic Sans MS',
            size: 20,
            color: "royalblue"
          },
        width: 450,
        height: 450,
      };
  
      Plotly.newPlot('gauge', gaugeData, gaugeLayout);
  });
  
  }

  // DELIVERABLE 4

//   Customize your dashboard with three of the following:
//   -> Add an image to the jumbotron.
//   -> Add background color or a variety of compatible colors to the webpage.
//   -> Use a custom font with contrast for the colors.
//      Add more information about the project as a paragraph on the page.
//      Add information about what each graph visualizes, either under or next to each graph.
//      Make the webpage mobile-responsive.
//      Change the layout of the page.
//      Add a navigation bar that allows you to select the bar or bubble chart on the page.
//   When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard, and the three charts should be working according to their requirements.
//   When a sample is selected, the dashboard should display the data in the panel and all three charts according to their requirements.