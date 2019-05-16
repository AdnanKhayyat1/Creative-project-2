document.getElementById("dogSubmit").addEventListener("click", async function(event) {
    try{
    event.preventDefault();
    const value = document.getElementById("breedInput").value;
    const url = "https://dog.ceo/api/breed/" + value + "/images";   
    let response = await fetch(url);
    // console.log(response);
    let json = await response.json();
    console.log(json);
    let result = '<div class = "row">';
    if(json.code == "404"){
      result += '<div class = "column">';
      result += "</div>";
      result += '<div class = "column">';
      result += '<div id = "error"><h1>Dog breed not found!</h1></div>';
      result += "</div>";
      result += '<div class = "column">';
      result += "</div>";
    }
    else{
    for(let i = 0; i < 3; i++){
    result += '<div class = "column">';
    result += "<img src='" + json.message[i] + "' width = '100%' height = '100%'>";
    result += "</div>";
    }
    result += "</div>";
  }
  document.getElementById("Results").innerHTML = result;
  }
    catch(err){
        // document.getElementById("weatherResults").innerHTML = "<h1>Something wrong has occured!</h1>";
        console.log(err);
    }
  });

async function myFunction(){
  
  const randog = "https://dog.ceo/api/breeds/image/random";
  let response = await fetch(randog);
  let json = await response.json();
  let out = "<img src='" + json.message + "' width = '100%' height = '100%'>";
  document.getElementById("Random").innerHTML = out;

}