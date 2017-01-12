$("#mpdxml").change(function(){
  const file = document.getElementById("mpdxml").files[0];
  //You could insert a check here to ensure proper file type
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = function(){
    const xml = $($.parseXML(reader.result));
    const istep = $(xml).find('i-step').text();
    $('#istep').replaceWith(`<h1>Your IStep is ${istep}</h1>`);
  };
});
