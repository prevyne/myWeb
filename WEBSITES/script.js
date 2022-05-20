const fname = document.getElementById('fname')
const number = document.getElementById('number')
const reg = document.getElementById('reg')
const form = document.getElementById('myForm')
const error = document.getElementById('error')

form.addEventListener('submit',e=> {
	let messages=[]
	if(fname.value== ''|| fname.value== null){
	messages.push('FIRST NAME IS REQUIRED TO PROCEED')
	}

	if(number.value==''|| number.value== null){
		messages.push('PHONE NUMBER IS REQUIRED TO PROCEED')
	}

	if(number.value.length<10){
		messages.push("PHONE NUMBER IS TOO SHORT.")
	}
	if(number.value.length>10){
		messages.push("PHONE NUMBER IS TOO LONG")
	}
	if(reg.value==''|| reg.value==null){
		messsages.push("ENTER REGISTRATION NUMBER")
	}
	if(messages.length>0){
	e.preventDefault()
	error.innerText= messages.join(' , ')
	}
}
)
