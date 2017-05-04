$(document).ready(function(){

    var test = {
        that : this,
        abc : function(){
            console.log(this); //Object
            var timer = setTimeout(function(){
                console.log(this); //window
                //console.log(test.that);
            })
        }
    };

    test.abc();

    function test2(){
        console.log(this); //
        var that = this;
        var timer = setTimeout(function(){
            console.log(this); //window
            console.log(that); //
        })
    }

    // test2 = new test2();


    function test3(){
        console.log(this);
        $('button').each(function(){
            $(this).on('click',function(){
                console.log(this)
            })
        })
    }
    test3();
});


