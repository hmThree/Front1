$(document).ready(function(){
    $('.nv1 div .main1,.sub').mouseover(function(){ //Shopping �� ���콺 ����
        $('.sub').css('display','block');//마우스를 갖다 댈때 display none->block
    });
    
    $('.nv1 div .main1,.sub').mouseout(function(){
        $('.sub').css('display',''); //������ ��ǰ ��� �ȵǰ� ����
    });
    
    $('.a1,.sub1').mouseover(function(){ //������ ��ǰ�� ���콺 ����
        $('.sub1').css('display','block');//������ �׸��� ������ ����
    });
    
    $('.a1,.sub1').mouseout(function(){//������ �׸��� �ȳ����� ����
        $('.sub1').css('display','');
    });
});