UI = {};

(function(){
	var a = UI.tab = function(tabID){
		var tabWrap = $(tabID), tabList = tabWrap.find('ul:first-of-type li');

		function hideContentDiv(){
			for(var i=0; i<tabList.length; i++){
				tabWrap.find($(tabList[i]).find('a').attr('href')).hide().removeClass('active');
			}
		}
		hideContentDiv();

		tabList.find('a').on('click', function(){
			hideContentDiv();
			tabWrap.find($(this).attr('href')).show().addClass('active');			
		});
		tabWrap.find('#tab_navi li:first-child a').click();
	}
	var test = function(){
		console.log('2')
	}
})();




