function check() {
	
var name = document.getElementById("Name").value;
var ret = true;
	
if (name.length < 3) {
  window.alert("Gültigen Namen eintragen!");
  ret = false;
} 

return ret;  
}    
