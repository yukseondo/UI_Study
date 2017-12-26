UI = {};

(function(){
    var a = UI.tab = function(tabID){
        var tabWrap = $(tabID), tabList = tabWrap.find('ul:first-of-type li');

        function hidecontentsDiv(){
            for(var i=0; i<tabList.length; i++){
                tabWrap.find($(tabList[i]).find('a').attr('href')).hide().removeClass('active');
            }
        }
        hidecontentsDiv();

        tabList.find('a').on('click', function(e){
            e.preventDefault();
            hidecontentsDiv();
            tabWrap.find($(this).attr('href')).show().addClass('active');			
        });
        tabWrap.find('#tab_navi li:first-child a').click();
    };
    var fixed = UI.fixedUI = function(fixedID,fixWrap){
        var fixedWrap = $(fixedID), firstScrollVal = fixedWrap.offset().top, fixWrapHeight = $(fixWrap).outerHeight();

        function resetFixed(){
            fixedWrap.css({
                'position' : 'static'
            })
        }

        $(window).on('scroll', function(){
            if(firstScrollVal <= $(this).scrollTop() && $(this).scrollTop() < parseInt(firstScrollVal + fixWrapHeight)){
                fixedWrap.css({
                    'position' : 'fixed',
                    'left' : 0,
                    'top' : 0
                })
            }else{
                resetFixed();
            }
        })
    };

    //Accordion
    var Accordion = UI.accordionUI = function(accID,accCont,opt){
        var accWrap = $(accID), accContent = $(accCont);
        accWrap.find('a').on('click', function(){
            if(opt == true) accContent.slideUp(200);
            if($(this).next('div').css('display') === 'none'){
                $(this).next('div').slideDown(200);
            }else{
                $(this).next('div').slideUp(200);
            }

        })
    }
})();




