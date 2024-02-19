// jQeury(local-json.js)

$(function(){//window.onload=function(){

        //로컬스토리지 객체 생성 : db대용 -> 프로파일러 목적(계정별로 서로 다른 환경설정 불러오기)
    
    let storage=localStorage;//로컬스트러지 객체명
    let body=document.querySelector("body");//배경색상때문에
    let nameField=document.getElementById("name");
    let colorField=document.getElementById("color");
    let fontSizeField=document.getElementById("fontSize");

    //맨 처음 로그인했을 때 기본 배경색상, 글자크기
    let defaultBackground="#ffffff";
    let defaultFontSize=15;

    //1.storage에 저장
    $('#save').click(function(){//save.onclick=function(){}
        //로컬스토리지.setItem("키명",저장할값)<->~.getitem("키명")
        let user={
            name:nameField.value, /*키명 : 입력받은 값 */
            color:colorField.value,
            size:fontSizeField.value
            
        }
        //로컬스토리지에 저장하기 위해 객체->문자열로 변환
        storage.setItem(nameField.value,JSON.stringify(user));
        updateUserInfo(nameField.value, colorField.value, fontSizeField.value);
    })

    //2.storage에서 삭제
    $('#remove').click(function(){//remove.onclick=function(){}
        storage.removeItem(nameField.value);
        updateUserInfo("",defaultBackground,defaultFontSize);    
    })

    //3. id, color, size 설정해주는 함수 : 사용자 정의 함수
    function updateUserInfo(id, color, size){
        nameField.value=id;
        color.value=color;
        fontSizeField.value=size;
        //화면에 반영(최상위속성명.하위속성명=저장할것)
        body.style.background=color;
        body.style.fontSize=size+"px";
    }
    
    //4.첫 로그인시 반영할 초기화 설정해주는 함수
    $('#login').click(function(){
        //1.로컬스토리지객체명.getItem("불러올 키명")<->~setItem(저장할 값)
        let userStr=storage.getItem(nameField.value)
        if(userStr){//계정명이 존재한다면
            //저장된 문자열 : 객체로 다시 변환시켜 화면에 반영해야함
            let userObj=JSON.parse(userStr);
            updateUserInfo(userObj.name,userObj.color,userObj.size)//꺼내온 객체명, 키명
        }else{ //계정 없으면 기본세팅
            updateUserInfo("",defaultBackground,defaultFontSize);
        }


    })
});