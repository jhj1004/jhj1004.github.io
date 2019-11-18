    $(document).ready(function(){
        $("#gnb a.dp1").click(function(){//대메뉴를 클릭하면
            $(".sub").removeClass("on");//서브메뉴 on이라는 클래스를 삭제해라.모든 서브메뉴 높이가 0-->안보이게 해라
            $(this).next(".sub").addClass("on");//대메뉴 바로뒤에오는 서브메뉴에 on이라는 클래스를 추가해라.높이가 125px-->보이게 해라
            $("#gnb a.dp1").removeClass("on");//대메뉴에 on을 삭제해라
            $(this).addClass("on");//내자신(지금 내가 클릭한 대메뉴) on을 추가해라
        });
        var wd = parseInt($(".vs").width());// 문자열을 정수로 바꾸는 함수 즉 
        $(".btn_box li").click(function(){//버튼박스의 li를 클릭하면
            var idx = $(this).index();//내자신(li)의 인덱스(0,1,2,3,4)를 idx라는 변수명으로 저장해라
            $(".img_box").not(":animated").animate({"margin-left" : wd*idx*-1+"px"}, 600);
            //vs의 ma
            //0번째라면 *0*-1에 px단위 붙이면 0
            //1번째라면 *1*-1   -->-1
            $(".btn_box li").removeClass("on");//모든 li에 on을 제거
            $(this).addClass("on");//내가 클릭한 li에 on을 추가
        });
    });    