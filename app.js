
function getNumber(num){

    var result=document.getElementById("result")
    result.value+=num;//+ take concatenate hojae purani wvalue rahe aur new value jakr isme save hojae
}//purani value ko bih rakhta ha new bh i dale ga + se

function clearResult(){
	var result=document.getElementById("result")
	result.value=""

}


function getResult(){
	var result=document.getElementById("result") //input get
	result.value=eval(result.value)

}
