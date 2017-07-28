(function($){
    $(document).ready(function(){

        // 국가코드가져오기 
        $.get("http://ipinfo.io", function(response) {
            var countryCode = response.country;
            // console.log(response.ip, response.country);
            console.log(countryCode.toLowerCase())
            
            // lang설정
            if(countryCode.toLowerCase() === 'kr') {
                $('html').attr('lang', 'ko');
            }else {
                $('html').attr('lang', 'ja');
            }
            
            // getData
            $.ajax({  
                url: "kjtext_json.js",
                dataType : "json",
                success:function(data){
                    getDataText.init(data, countryCode);
                    // getDataText.countryCode(data);
                }
            });
            
        }, "jsonp");
        
        var getDataText = {
            "setTextCode" : function(dataJSON, countryCodeVal) {

                if(countryCodeVal === 'KR') {
                    $('#m_title').html(dataJSON.seondo.title);
                    $('#m_name').html(dataJSON.seondo.mname);
                    $('#f_name').html(dataJSON.seondo.fname);
                    $('#hotel_address').html(dataJSON.seondo.address);
                }

            },
            "init" : function(dataJSON, countryCodeVal) {
                this.setTextCode(dataJSON, countryCodeVal);
            }
        };

    })
})(jQuery)

