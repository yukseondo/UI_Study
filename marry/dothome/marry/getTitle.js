(function($){
    $(document).ready(function(){

        // getCountryCode
        $.get("http://ipinfo.io", function(response) {
            var countryCode = response.country, htmlLanguage;

            // langSetting
            if(countryCode.toLowerCase() === 'kr') {
                htmlLanguage = $('html').attr('lang', 'ko');
            }else if((countryCode.toLowerCase() === 'jp')) {
                htmlLanguage = $('html').attr('lang', 'ja');
            }
            
            console.log(countryCode.toLowerCase())

            // getData
            $.ajax({  
                url: "kjtext_json.js",
                dataType : "json",
                success:function(data){
                    getDataText.init(data, countryCode);
                }
            });
            
        }, "jsonp");
        
        var getDataText = {
            "setTextCode" : function(dataJSON, countryCodeVal) {
                
                var htmlCode = '', 
                    getMarriageSubwayLine2 = $('#marriageSubwayLine2'),
                    getMarriageSubwayLine4 =  $('#marriageSubwayLine4'),
                    getMarriageAddress = $('#marriageAddress'),
                    getMarriageTel = $('#marriageTel'),
                    getSiteTitle = $('title');

                // var countryJsonLang = countryCodeVal === 'KR' || htmlLanguage === 'ko' ? 'langko' : 'langjp';
                
                if(countryCodeVal === 'KR') {

                    htmlCode += '<h1 id="marriage_title">' + dataJSON.langko.title + '</h1>';
                    htmlCode += '<img id="marriage_img"' + 'src="img/' + dataJSON.commonImg +'" alt="">';
                    htmlCode += '<div class="people_list">';
                        htmlCode += '<p><a href="tel:' + dataJSON.langko.telnumber + '">' + dataJSON.langko.seondo + '</a>&hearts;<a href="tel:' + dataJSON.langko.telnumber2 + '">' + dataJSON.langko.shoko + '</a></p>';
                    htmlCode += '</div>';
                    htmlCode += '<div class="marriage_stay">';
                        htmlCode += '<p id="marriage_date">' + dataJSON.langko.date + '</p>';
                        htmlCode += '<p id="marriage_eventroom">' + dataJSON.langko.eventroom + '</p>';
                    htmlCode += '</div>';
                    htmlCode += '<p id="marriage_greeting">' + dataJSON.langko.greeting + '</p>';

                    htmlCode += '<div class="parents">';
                        htmlCode += '<div class="male">';
                            htmlCode += '<h2>' + dataJSON.langko.parents_title1 + '</h2>';
                            htmlCode += '<ul>';
                                htmlCode += '<li><a href="tel:' + dataJSON.langko.telnumber_father + '">' + dataJSON.langko.father + '</a></li>';
                                htmlCode += '<li><a href="tel:' + dataJSON.langko.telnumber_mother + '">' + dataJSON.langko.mother + '</a></li>';
                            htmlCode += '</ul>';
                        htmlCode += '</div>';
                        htmlCode += '<div class="female">';
                            htmlCode += '<h2>' + dataJSON.langko.parents_title2 + '</h2>';
                            htmlCode += '<ul>';
                                htmlCode += '<li><a href="tel:' + dataJSON.langko.telnumber_father_FIL +'">' + dataJSON.langko.father_FIL + '</a></li>';
                                htmlCode += '<li><a href="tel:' + dataJSON.langko.telnumber_mother_MIL +'">' + dataJSON.langko.mother_MIL + '</a></li>';
                            htmlCode += '</ul>';
                        htmlCode += '</div>';
                    htmlCode += '</div>';

                    getMarriageSubwayLine2.html(dataJSON.langko.subwayLine2);
                    getMarriageSubwayLine4.html(dataJSON.langko.subwayLine4);
                    getMarriageAddress.html(dataJSON.langko.address);
                    getMarriageTel.html(dataJSON.langko.tel);
                    getSiteTitle.text(dataJSON.langko.title);

                }
                
                if(countryCodeVal === 'JP') {

                    htmlCode += '<h1 id="marriage_title">' + dataJSON.langjp.title + '</h1>';
                    htmlCode += '<img id="marriage_img"' + 'src="img/' + dataJSON.commonImg +'" alt="">';
                    htmlCode += '<div class="people_list">';
                        htmlCode += '<p><a href="tel:' + dataJSON.langjp.telnumber + '">' + dataJSON.langjp.seondo + '</a>&hearts;<a href="tel:' + dataJSON.langjp.telnumber2 + '">' + dataJSON.langjp.shoko + '</a></p>';
                    htmlCode += '</div>';
                    htmlCode += '<div class="marriage_stay">';
                        htmlCode += '<p id="marriage_date">' + dataJSON.langjp.date + '</p>';
                        htmlCode += '<p id="marriage_eventroom">' + dataJSON.langjp.eventroom + '</p>';
                    htmlCode += '</div>';
                    htmlCode += '<p id="marriage_greeting">' + dataJSON.langjp.greeting + '</p>';

                    htmlCode += '<div class="parents">';
                        htmlCode += '<div class="male">';
                            htmlCode += '<h2>' + dataJSON.langjp.parents_title1 + '</h2>';
                            htmlCode += '<ul>';
                                htmlCode += '<li><a href="tel:' + dataJSON.langjp.telnumber_father + '">' + dataJSON.langjp.father + '</a></li>';
                                htmlCode += '<li><a href="tel:' + dataJSON.langjp.telnumber_mother + '">' + dataJSON.langjp.mother + '</a></li>';
                            htmlCode += '</ul>';
                        htmlCode += '</div>';
                        htmlCode += '<div class="female">';
                            htmlCode += '<h2>' + dataJSON.langjp.parents_title2 + '</h2>';
                            htmlCode += '<ul>';
                                htmlCode += '<li><a href="tel:' + dataJSON.langjp.telnumber_father_FIL +'">' + dataJSON.langjp.father_FIL + '</a></li>';
                                htmlCode += '<li><a href="tel:' + dataJSON.langjp.telnumber_mother_MIL +'">' + dataJSON.langjp.mother_MIL + '</a></li>';
                            htmlCode += '</ul>';
                        htmlCode += '</div>';
                    htmlCode += '</div>';
                    
                    getMarriageSubwayLine2.html(dataJSON.langjp.subwayLine2);
                    getMarriageSubwayLine4.html(dataJSON.langjp.subwayLine4);
                    getMarriageAddress.html(dataJSON.langjp.address);
                    getMarriageTel.html(dataJSON.langjp.tel);
                    getSiteTitle.text(dataJSON.langjp.title);
                }

                $("#htmlDOM").html(htmlCode);
            },
            "init" : function(dataJSON, countryCodeVal) {
                this.setTextCode(dataJSON, countryCodeVal);
            }
        };

    })
})(jQuery)

