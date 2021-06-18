function display(){
	alert("Scam!")
}

function a(){
	document.getElementById("ChangeName").innerHTML = "ZooZooS"
	document.getElementById("ChangeName").style.fontSize = "50px"
	document.getElementById("ChangeName").style.fontFamily = "cursive"
	// alert("Name Changed.")
}

function factorial(n){
    if(n == 0 || n == 1){
        return 1
    }else{
        return n * factorial(n-1)
    }
}
let n = 5
document.getElementById("fact").innerHTML = factorial(n)

function time(){
	document.getElementById("time").innerHTML = Date()
}

function numvalid() {
	var x, text;
  
	x = document.getElementById("num").value;
  
	if (isNaN(x) || x < 1 || x > 10) {
	  text = "Out Of Range";
	} else {
	  text = "OK";
	}
	document.getElementById("number").innerHTML = text;
}

// function numvalid1() {
// 	var inpObj = document.getElementById("id1");
// 	if (!inpObj.checkValidity()) {
// 	  document.getElementById("demo").innerHTML = inpObj.validationMessage;
// 	}
//   }
