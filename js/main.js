$(document).ready(function () {

    $('#fullpage').fullpage({
        navigation: true,
        //        navigationTooltips: ['01', '02', '03', '04'],
        anchors: ['', '', 'page01', 'page02', 'page03', 'page04', 'page05', 'page06', 'page07'],
        menu: '.gnb',
        //헤더 숨기기
        afterRender: function () {
            $('.gnb').hide();
            $('.mGnbTit').hide();
     
            
        },
        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;
            
            //메뉴
            if (destination.index > 1) {
                $('.gnb').fadeIn();
            } else {
                $('.gnb').fadeOut();
            }
            if (destination.index == 8) {
                $('.gnb').fadeOut();
            }
                
            //모바일 메뉴 타이틀
            if (destination.index > 1) {
                $('.mGnbTit').fadeIn();
            } else {
                $('.mGnbTit').fadeOut();
            }
            if (destination.index == 8) {
                $('.mGnbTit').fadeOut();
            }
//            if (destination.index == 0) {
//                $('.mGnbTit').css('opacity','0');
//            }
//            else {
//                $('.mGnbTit').css('opacity','1');
//            }
            
            
            
            
            
    
            //스크롤시 타이틀명 변경
            if (destination.index == 2) {
                $('.gnbTit').text('jomalone');
            } else if (destination.index == 3) {
                $('.gnbTit').text('inspiration');
            } else if (destination.index == 4) {
                $('.gnbTit').text('gentlemonster');
            } else if (destination.index == 5) {
                $('.gnbTit').text('gmz');
            } else if (destination.index == 6) {
                $('.gnbTit').text('police station');
            } else if (destination.index == 7) {
                $('.gnbTit').text('Mercedes benz');
            }
            //스크롤시 모바일 타이틀명 변경
            if (destination.index == 2) {
                $('.mGnbTit').text('jomalone');
            } else if (destination.index == 3) {
                $('.mGnbTit').text('inspiration');
            } else if (destination.index == 4) {
                $('.mGnbTit').text('gentlemonster');
            } else if (destination.index == 5) {
                $('.mGnbTit').text('gmz');
            } else if (destination.index == 6) {
                $('.mGnbTit').text('police station');
            } else if (destination.index == 7) {
                $('.mGnbTit').text('Mercedes benz');
            } else if (destination.index == 1) {
                $('.mGnbTit').text('');
            } else if (destination.index == 0) {
                $('.mGnbTit').text('');
            } else if (destination.index == 8) {
                $('.mGnbTit').text('');
            }
            
            //스크롤시 타이틀명 변경
            if (destination.index == 3) {
                $('.inBox').animate({
                    left: '0px',
                    top: '0px',
                }, 800, 'linear');
            } else if (destination.index == 4) {
                $('.gentleBox').animate({
                    left: '0px',
                    top: '0px',
                }, 800, 'linear');
            } else if (destination.index == 5) {
                $('.gmzBox').animate({
                    left: '0px',
                    top: '0px',
                }, 800, 'linear');
            } else if (destination.index == 6) {
                $('.policeBox').animate({
                    left: '0px',
                    top: '0px',
                }, 800, 'linear');
            } else if (destination.index == 7) {
                $('.benzBox').animate({
                    left: '0px',
                    top: '0px',
                }, 800, 'linear');
            } else if (destination.index == 2) {
                $('.mVerImg').animate({
                    margin: '0px',
                    top: '0px',
                }, 600);
            } 
            
        }


    });

    //
        $('.mPanel').click(function(){
        $('#fp-nav.fp-right').hide();
    });
    $('.mClose,.mGnb li').click(function(){
        $('#fp-nav.fp-right').show();
    });
    
    
    //    모바일 패널메뉴
    $('.gnbBg,.mGnb').hide();

    $('.mPanel').click(function () {
        $('.gnbBg,.mGnb').fadeIn(300);
        $('.gnbBg').css('width', '100%');
    });

        $('.mClose,.mGnb li').click(function() {
            $('.gnbBg,.mGnb').fadeOut(300);
            $('.gnbBg').css('width','0'); 
        });






    //메인 도형 zoom
    setInterval(function () {
        $(".sq").animate({
            opacity: 0.25,
            zoom: 1.6,
        }, 1000, function () {});

        $(".sq_2").animate({
            opacity: 0.25,
            zoom: 0.8,
        }, 1000, function () {});

        $(".sq_3").animate({
            opacity: 0.25,
            zoom: 0.6,
        }, 1000, function () {});
    }, 500);

    //팝업 설명 내용
    $('.popupBg,.popup').hide();

    //조말론 팝업
    $('.jomalone .setionTxt span').click(function () {
        $('.jomalone .popupBg,.jomalone .popup').fadeIn(500);
    });
    $('.jomalone .popupBg').click(function () {
        $('.jomalone .popupBg,.jomalone .popup').fadeOut(500);
    });

    //전시회 팝업
    $('.inspiration .setionTxt span').click(function () {
        $('.inspiration .popupBg,.inspiration .popup').fadeIn(500);
    });
    $('.inspiration .popupBg').click(function () {
        $('.inspiration .popupBg,.inspiration .popup').fadeOut(500);
    });

    //젠틀몬스터 팝업
    $('.gentlemonster .setionTxt span').click(function () {
        $('.gentlemonster .popupBg,.gentlemonster .popup').fadeIn(500);
    });
    $('.gentlemonster .popupBg').click(function () {
        $('.gentlemonster .popupBg,.gentlemonster .popup').fadeOut(500);
    });

    //gmz 팝업
    $('.gmz .setionTxt span').click(function () {
        $('.gmz .popupBg,.gmz .popup').fadeIn(500);
    });
    $('.gmz .popupBg').click(function () {
        $('.gmz .popupBg,.gmz .popup').fadeOut(500);
    });

    //경찰서 팝업
    $('.police .setionTxt span').click(function () {
        $('.police .popupBg,.police .popup').fadeIn(500);
    });
    $('.police .popupBg').click(function () {
        $('.police .popupBg,.police .popup').fadeOut(500);
    });

    //벤츠 팝업
    $('.benz .setionTxt span').click(function () {
        $('.benz .popupBg,.benz .popup').fadeIn(500);
    });
    $('.benz .popupBg').click(function () {
        $('.benz .popupBg,.benz .popup').fadeOut(500);
    });


    //조말론 슬라이드
    $('.mobileImg').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800
    });
    $('.slick-arrow').hide();


    //패널메뉴
    $('.panelMenu').hide();

    $('.gentlemonster .panel,.inspiration .panel').click(function () {
        $('.panelMenu').fadeIn(300);
        $('.gentlemonster .setionTxt,.inspiration .setionTxt').animate({
            marginTop: '140px'
        }, 400);
    });

    $('.gentlemonster .close,.inspiration .close').click(function () {
        $('.panelMenu').fadeOut(300);
        $('.gentlemonster .setionTxt,.inspiration .setionTxt').animate({
            marginTop: '0px'
        }, 400);
    });

});