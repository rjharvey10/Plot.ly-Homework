function optionChanged(selectedID){ //Dropdown Menu function
    console.log(selectedID); //Dropdown value check
    d3.json("data/samples.json").then((data)) =>{ //Read json file using d3.json
        //console.log(data); //to check 
    d3.select("#selDataset").html(""); //function to clear dropdown menu
    
    data.metadata.forEach(item => { //use the metadata array to get the item ID and append to the dropdown menu
        //console.log(item.id)); to check 
        d3.select ("#selDataset").append('option').attr('value', item.id).text(item.id);
         });
     d3.select("#selDataset").node().value = selectedID; //pass selected value
     const idMetadata = data.metadata.filter(item=> (item.id == selectedID)); //filter metadata for the selected ID
    //console.log(idMetadata); to check

    const panelDisplay = d3.select("#sample-metadata"); // use const with d3.select to return sample metadata
    panelDisplay.html("");
    Object.entries(idMetadata[0]).forEach(item=> {
        //console.log(idMetadata); to check
        panelDisplay.append("p").text(`${item[0]}: ${item[1]}`)
       });
       





    






const idSample = data.samples.filter(item => parseInt(item.id) == selectedID);
//Test
//console.log(typeof parseInt(item.id));
//console.log(idSample[0].sample_values);  
console.log(idSample[0].otu_ids);  
console.log(idSample[0].otu_labels);