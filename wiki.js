$(document).ready(function(){
    (function($){

        function scrollControl(){
            var scrollBtn = $('#uidevScrollTop');
            $(window).on('scroll', function(){
                var currentScrollTop = $(window).scrollTop();
                console.log(currentScrollTop)
                if(currentScrollTop > $('#rotateLayer').offset().top){
                    scrollBtn.show();
                }else{
                    scrollBtn.hide();
                }
            });
            scrollBtn.on('click', function(){
                $('html body').stop().animate({scrollTop:0},500);
            })
        }
        scrollControl();

        var cpFrameWrap = [], $cpFrames = $('.cp_iframe'), mobileArray = [], $mobileView = $('.cp_mview'), mobileLayer = $('#rotateLayer'), cpDimmed = $('#rotateDim'), iphone = mobileLayer.find('.iphoneImg'), btnMode = mobileLayer.find('.pMode'), landM = 'http://wiki.skplanet.com/download/attachments/111474671/iphone6-landscape3.png', portM = 'http://wiki.skplanet.com/download/attachments/111474671/iphone6-portrait3.png';
        /* **
         for(var k=0; k < $cpFrames.length; k++){
         cpFrameWrap.push($($cpFrames[k]).attr('class'));
         $($cpFrames[k]).attr('id', cpFrameWrap[k] + k);
         }
         for(var n=0; n < $mobileView.length; n++){
         mobileArray.push($($mobileView[n]).attr('class'));
         $($mobileView[n]).attr('id', mobileArray[n] + n);
         }
         ** */
        var dealHTML = '';
        dealHTML += '<div id="dealCardDiv">';
            dealHTML += '<button type="button" data-card="card_a">딜형</button>';
            dealHTML += '<button type="button" data-card="card_b2">갤러리형</button>';
            dealHTML += '<button type="button" data-card="card_c">리스트형</button>';
            dealHTML += '<button type="button" data-card="card_d">큰이미지형</button>';
            dealHTML += '<button type="button" data-card="card_e">슬라이드</button>';
        dealHTML += '</div>';

        var dealCardCh = {
            cardHTMLID : '#dealCardDiv',
            $cardIframe : '#rotateLayer iframe',
            showDeal : function() {
                $(this.cardHTMLID).find('button').each(function () {
                    $(this).on('click', function () {
                        $(dealCardCh.$cardIframe).attr('src', 'http://s-m.011st.com/MW/html/lego/component/' + $(this).attr('data-card') + '.html');
                    })
                })
            },
            hideDeal : function(){
                $(this.cardHTMLID).remove();
            }
        };

        function overflowBody(){
            var cssBody = $('body');
            if(cssBody.css('overflow') === 'visible' || cssBody.css('overflow') === ''){
                cssBody.css('overflow', 'hidden')
            }else{
                cssBody.css('overflow','');
            }
        }

        $mobileView.on('click', function(){
            if($(this).attr('data-type') === 'cp_card_deal'){
                $('#rotateLayer').append(dealHTML);
                dealCardCh.showDeal();
            }else{
                dealCardCh.hideDeal();
            }
            cpDimmed.show();
            overflowBody();
            mobileLayer.find('.iphoneImg').css({
                'display' : 'block',
                'zIndex': '1000',
                'position' : 'absolute',
                'top' : $(window).scrollTop() + 200,
                'left' : '50%',
                'webkit-transform' : 'translateX(-50%)'
            }).parent().show();
            btnMode.css({
                'position': 'fixed',
                'width' : '100%',
                'left' : '0',
                'top' : '0',
                'z-index' : '1000'
            });
            mobileLayer.find('iframe').attr('src', $(this).attr('data-url'));
            //document.getElementByName(프레임명).contentDocument.location.reload(true);
        });

        cpDimmed.on('click', function(){
            $(this).hide();
            mobileLayer.hide();
            dealCardCh.hideDeal();
            overflowBody();
            if(btnMode.find('img').attr('alt').toLowerCase() === 'portraitmode') btnMode.click();
        });

        btnMode.on('click', function(){
            if($(this).find('img').attr('alt').toLowerCase() === 'portraitmode'){
                $(this).find('img').attr('alt','LandScapeMode');
                iphone.css({
                    'width' : 375,
                    'height' : 662,
                    'paddingTop' : 75,
                    'paddingLeft' : 17,
                    'background-image': "url(" + portM + ")"
                }).children('iframe').css({
                    'width' : 340,
                    'height' : 505
                });
            }else{
                $(this).find('img').attr('alt','PortraitMode');
                iphone.css({
                    'width' : 662,
                    'height' : 375,
                    'paddingTop' : 15,
                    'paddingLeft' : 85,
                    'background-image': "url(" + landM + ")"
                }).children('iframe').css({
                    'width' : 504,
                    'height' : 343
                });
            }
        })



    })(jQuery);
});
