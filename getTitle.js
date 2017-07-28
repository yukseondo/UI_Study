(function($){
    $(document).ready(function(){
        var countryCode;
        // 국가코드가져오기 
        $.get("http://ipinfo.io", function(response) {
            countryCode = response.country;
            console.log(response.ip, response.country);
        }, "jsonp");

        $.ajax({  
            url: "kjtext_json.js",
            dataType : "json",
            success:aaa
        });

        function aaa(data) {
            console.log(data.seondo.mname);
        }
    })
})(jQuery)

