var https = require('https');
var fs = require('fs');

var options = {
  url: 'https://gist.githubusercontent.com/dotspencer/40a19db046fbc9cd307619f024597a9f/raw/',
  output: './data/songs.json'
}

https.get(options.url, (res) => {
  console.log("Pulling data from %s", options.url);

  var data = [];
  res.on('data', function(chunk){
    data.push(chunk);
  });
  res.on('error', function(e){
    return console.log(e.message);
  });
  res.on('end', function(){
    updateSongList(data.join(''));
  });
});

function updateSongList(html){
  console.log("Converting CSV to JSON");

  var lines = html.split('\n');
  var songs = [];

  // Turn into JSON array
  for(var i = 1; i < lines.length; i++){
    var parts = lines[i].split(',');
    songs.push({
      title: parts[0].trim(),
      id: parts[1].trim(),
      date: parts[2].trim()
    });
  }

  var result = JSON.stringify(songs, null, '  ');
  fs.writeFile(options.output, result, function(err){
    if(err) return console.log(err.message);
    console.log(`Export to '${options.output}' successful\n`);
  });
}
