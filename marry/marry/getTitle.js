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
                    getSiteTitle = $('title'),
                    getMessage = $("iframeGuestMessage");

                // var countryJsonLang = countryCodeVal === 'KR' || htmlLanguage === 'ko' ? 'langko' : 'langjp';

                var _data = {};

                if (countryCodeVal === 'KR' ) {
                    _data = dataJSON.langko;
                } else if (countryCodeVal === 'JP' ) {
                    _data = dataJSON.langjp;
                }

                htmlCode += '<h1 id="marriage_title">' + _data.title + '</h1>';
                htmlCode += '<img id="marriage_img"' + 'src="img/' + dataJSON.commonImg +'" alt="">';
                htmlCode += '<div class="people_list">';
                    htmlCode += '<p><a href="tel:' + _data.telnumber + '">' + _data.seondo + '</a>&hearts;<a href="tel:' + _data.telnumber2 + '">' + _data.shoko + '</a></p>';
                htmlCode += '</div>';
                htmlCode += '<div class="marriage_stay">';
                    htmlCode += '<p id="marriage_date">' + _data.date + '</p>';
                    htmlCode += '<p id="marriage_eventroom">' + _data.eventroom + '</p>';
                htmlCode += '</div>';
                htmlCode += '<p id="marriage_greeting">' + _data.greeting + '</p>';

                htmlCode += '<div class="parents">';
                    htmlCode += '<div class="male">';
                        htmlCode += '<h2>' + _data.parents_title1 + '</h2>';
                        htmlCode += '<ul>';
                            htmlCode += '<li><a href="tel:' + _data.telnumber_father + '">' + _data.father + '</a></li>';
                            htmlCode += '<li><a href="tel:' + _data.telnumber_mother + '">' + _data.mother + '</a></li>';
                        htmlCode += '</ul>';
                    htmlCode += '</div>';
                    htmlCode += '<div class="female">';
                        htmlCode += '<h2>' + _data.parents_title2 + '</h2>';
                        htmlCode += '<ul>';
                            htmlCode += '<li><a href="tel:' + _data.telnumber_father_FIL +'">' + _data.father_FIL + '</a></li>';
                            htmlCode += '<li><a href="tel:' + _data.telnumber_mother_MIL +'">' + _data.mother_MIL + '</a></li>';
                        htmlCode += '</ul>';
                    htmlCode += '</div>';
                htmlCode += '</div>';

                getMarriageSubwayLine2.html(_data.subwayLine2);
                getMarriageSubwayLine4.html(_data.subwayLine4);
                getMarriageAddress.html(_data.address);
                getMarriageTel.html(_data.tel);
                getSiteTitle.text(_data.title);
                getMessage.text(_data.message);





                $("#htmlDOM").html(htmlCode);
            },
            "init" : function(dataJSON, countryCodeVal) {
                this.setTextCode(dataJSON, countryCodeVal);
            }
        };

    })
})(jQuery)

