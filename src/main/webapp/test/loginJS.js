



function login(){
	
	
	
	id=document.getElementById("user_id").value;
	
	document.getElementById("user_idDiv").innerText = "";
	document.getElementById("pwdDiv").innerText = "";
	
	if(document.getElementById("user_id").value == "") {
		
		document.getElementById("user_idDiv").innerText = "아이디를 입력하세요"

	}else if (document.getElementById("pwd").value == "") {
		document.getElementById("pwdDiv").innerText = "비밀번호를 입력하세요"
		
	}else alert(id+"님 환영합니다!");
		
}