// Code goes here
function makeResArray(swag, headers, indexName) {
    var index = headers.indexOf(indexName);
    var res_output = swag.map(function(val, key) {
        return val.split(/,/)[index];
    });
    return res_output;
}
function makeText(filename) {
    var reader = (window.XMLHttpRequest != null) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    reader.open("GET", filename, false);
    reader.onload = function() {
        
    var swag = this.responseText.split(/\n+/);
    var re = /,/;
    var headers = swag.shift().split(re);
    var res_names = makeResArray(swag, headers, 'mod_name');
    var res_year = makeResArray(swag, headers, 'release');
    var res_image = makeResArray(swag, headers, 'mod_image');
    var res_id = makeResArray(swag, headers, 'mod_id');
    var text = "";
    var i;
    for (i = 0; i < swag.length; i++) {
    
        text += '<div id="page">'+ res_names[i]; 
        text += ' <small>'+res_year[i]+'</small><br>';
        text += '<img src="'+res_image[i]+'" height=480>';
        if (res_id[i] != 'none') {
            text += '<a href="'+res_id[i]+'"><div id="fuck">'+'<img src="gothere.png" height=128>'+'</div></a>'
        }
        
        text += '</div>';
    }
    console.log(text);
    document.body.innerHTML += text;
    
    }
    reader.send();
}
window.onload = function() {
    makeText("gamebananamods.txt");
}