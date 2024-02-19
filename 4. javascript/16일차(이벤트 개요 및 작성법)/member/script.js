// 회원가입 및 로그인을 위한 유효성 검사

function loginCheck(){
    if(document.login.mem_id.value==""){
        alert("아이디를 먼저 입력해주세요")
        document.login.mem_id.focus();
        return false;
    }

    if(document.login.passwd.value==""){
        alert("비번을 먼저 입력해주세요")
        document.login.passwd.focus();
        return false;
    }
    document.login.submit();//document.폼객체명.submit()
}

function inputCheck(){
    if(document.regForm.mem_id.value==""){
        alert("아이디를 먼저 입력해주세요")
        document.regForm.mem_id.focus();
        return false;
    }
    //mem_passwd
    if(document.regForm.mem_passwd.value==""){
        alert("비밀번호를 먼저 입력해주세요")
        document.regForm.mem_passwd.focus();
        return false;
    }
    //mem_repasswd
    if(document.regForm.mem_repasswd.value==""){
        alert("비밀번호를 확인해주세요")
        document.regForm.mem_repasswd.focus();
        return false;
    }
    //mem_name
    if(document.regForm.mem_name.value==""){
        alert("이름을 먼저 입력해주세요")
        document.regForm.mem_name.focus();
        return false;
    }
    //mem_email
    if(document.regForm.mem_email.value==""){
        alert("이메일을 먼저 입력해주세요")
        document.regForm.mem_email.focus();
        return false;
    }
    //mem_phone
    if(document.regForm.mem_phone.value==""){
        alert("번호를 먼저 입력해주세요")
        document.regForm.mem_phone.focus();
        return false;
    }
    //mem_job
    if(document.regForm.mem_job.value==""){
        alert("직업을 먼저 입력해주세요")
        document.regForm.mem_job.focus();
        return false;
    }
    //mem_address
    if(document.regForm.mem_zipcode.value==""){
        alert("주소를 먼저 입력해주세요")
        document.regForm.mem_zipcode.focus();
        return false;
    }

    //암호 일치
    if(document.regForm.mem_passwd.value!=document.regForm.mem_repasswd.value){
        alert("비밀번호 일치하지 않음");
        document.regForm.mem_repasswd.focus();
        return;
    }
    document.regForm.submit();
}

// 중복id체크
function idCheck(id){
    if(id==""){
        alert("아이디를 먼저 입력하세요");
        document.regForm.mem_id.focus();
    }else {
        open('idCheck.html','w','left=350,top=150,width=300, height=150')
    }
}



function zipcheck(){
    // left, top, width, height, + menubar, status, scrollbars, toolber에 yes/no가 있다
    open('ZipCheck.html','w','left=400,top=150,width=500,height=300' +
            'menubar=no, status=yes, toolbar=no, scollbars=yes');
}