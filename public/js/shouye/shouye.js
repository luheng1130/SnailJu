var widthright = $(window).width();
//alert('sssss');
//设置自动轮播
var dingshi = setInterval(function() {
	Right();
}, 2000);

var i = 0;
$("#box").swipeRight(Left);
$("#box").swipeLeft(Right);

//鼠标或手指放上去悬停
$("#box").bind({
		"touchstart": function() {
			clearInterval(dingshi);
		}
//		,
//		"mouseenter": function() {
//			clearInterval(dingshi);
//		}
		,
		"touchend": function() {
			//   		console.log("set");
			dingshi = setInterval(Right, 2000);
	}
//		,
//   	"mouseleave" : function(){
//   		dingshi = setInterval(Right,2000);
//
//   	}
	})

	//点击像右移动
function Right() {
	$("#box").animate({
		"margin-left": -widthright
	}, 1000, 'easing', function() {
		//			console.log(1);
		$("#box li").eq(0).appendTo($('#box'));
		$("#box").css("margin-left", 0);
	});
	i++;
	if(i >= $("#box li").length) {
		i = 0;
	}

	//下标的点
	$("#bottom li").removeClass("bottomone");
	$("#bottom li").eq(i).addClass("bottomone");

	//1000秒内无法重复点击
//	$("#right").unbind("click");
//	setTimeout(function() {
//		$("#right").click(Right);
//	}, 1000)
}
//点击像左移动
function Left() {
	$("#box li").last().prependTo($("#box"));
	$("#box").css("margin-left", -widthright);
	$("#box").animate({
		"margin-left": 0
	})

	i--;

	if(i < 0) {
		i = $("#bottom li").length - 1
	}
	$("#bottom li").removeClass("bottomone");
	$("#bottom li").eq(i).addClass("bottomone");

	//1000秒内无法重复点击
//	$("#left").unbind("click");
//	setTimeout(function() {
//		$("#left").click(Left);
//	}, 1000)
}

//点击下标的点进行图片移动
//$("#bottom li").click(function() {
//
//	var j = $(this).index() - i;
//
//	if(j > 0) {
//		i += j;
//		$("#box").animate({
//			"margin-left": -widthright * j
//		}, 800, function() {
//			for(var n = 0; n < j; n++) {
//				$("#box li").first().appendTo($("#box"));
//				$("#box").css("margin-left", 0);
//			}
//		})
//	}
//	if(j < 0) {
//		for(var n = 0; n > j; n--) {
//			$("#box li").last().prependTo("#box");
//			i--;
//		}
//		$("#box").css("margin-left", widthright * j);
//		$("#box").animate({
//			"margin-left": 0
//		}, 800);
//	}
//	$("#bottom li").removeClass("bottomone");
//	$("#bottom li").eq(i).addClass("bottomone");
//})



var xx = $('.xx');
var yy = $('.yy'); //房产，地铁

//		yy.on("click",function(){
//			var one=$(this).index();
//			console.log(one);
//		})


	
	
yy.on('tap', function() {
	var yys = $(this);
	var index1 = yys.index();
	console.log(index1);
	if(yys.hasClass('active')) {
		yys.removeClass('active');
		xx.eq(index1).hide();
		
	} else {
		yy.removeClass('active');
		yys.addClass('active');
		xx.hide().eq(index1).show();
		
	}
})

$('.right_img').on('click',function(){
	if($(this).hasClass('right_img1')){
		$(this).removeClass('right_img1');
	}else{
		$(this).addClass('right_img1');
	}
	
})


$('.rightli').on('click',function(){
	if($(this).hasClass('rightli')){
		$(this).removeClass('rightli');
		$(this).addClass('rightli1');
	}else if($(this).hasClass('rightli1')){
		$(this).removeClass('rightli1');
		$(this).addClass('rightli2');
	}else if($(this).hasClass('rightli2')){
		$(this).removeClass('rightli2');
		$(this).addClass('rightli');
	}
//	}else if($(this).hasClass('rightli2')){
//		$(this).removeClass('rightli2');
//		$(this).addClass('rightli1');
//		
//	}else{
//			$(this).addClass('rightli1');
//	}else if($(this).hasClass('rightli1')){
//		$(this).removeClass('rightli1');
//		$(this).addClass('rightli2');
//	}
})

//	var oneli = document.getElementsByClassName('oneli');
//	var none = document.getElementsByClassName('none');
//	
//	
//	oneli[0].onclick = function(){
//	 		var i,li =oneli.length;
//			for(var i=0; i<=li; i++){
//				console.log(li);
//				if(none[i].css.'display' == 'none'){
//				none[i].css.'display' = 'block';
//			}else if(none[i].css.'display' == 'block'){
//				none[i].css.'display' = 'none'
//			}
//			
//			}
//			
//		}
//	 
//	var $xx = $('.xx');
//	var $yy = $('.yy');
//	
//	$yy.click(function(){
//		if($xx.css == ('display','none')){
//			$xx.css=('display','block');
//		}else if($xx.css == ('display','block')){
//			$xx.css=('display','none');
//		}
//	})

//	var oW = document.getElementById('scroll');

//	$(window).scroll(function(){
//					var heightop = $(window).scroll(0,270);
//			
//				//scrollTop:当滑动滚轮浏览网页的时候网页隐藏在屏幕上方的距离(如现在滚轮里上
//				//	拉至顶部的距离)
//				//offset设置上方偏移的坐标 
//				//下列全意为，当滚轮隐藏页大于或等于offset设置的上方偏移时，
//				//则.right里的li开始滑动，向下一个选项滑动（开启）
//				if($(window).heightop>=$("#scrl").offset().top){
//					$("#scrl").css("display","block");
//
//				}
//			})

var ul = document.getElementById("uling");
var oW = document.getElementById('scrl');
//			var heightop = window.scroll(0,270);
var ol = ul.offsetTop;
window.onscroll = function() {
	var sTp = document.body.scrollTop;
	if(sTp >= ol - 55) {
		//							console.log(ol-55);
		oW.style.display = "block";
		ul.style.position = "fixed";
		ul.style.width = "100%";
		ul.style.top = "50px";
		ul.style.backgroundColor = "white";
	} else {
		//							console.log(sTp);
		oW.style.display = "none";
		ul.style.position = "relative";
		ul.style.top = "0px";
		ul.style.width = "100%";
	}

}


var src = document.getElementById('top_scr');

//		var pos = window.pageYOffset;

src.onclick = function() {
	window.scroll(0, 0)
}

var $oneli = $('.oneli');

$oneli.on('tap', function() {
	var $liing = $(this);
	var index = $liing.index();
	
	//			console.log(index);
		if($liing.hasClass('active')) {
		
		$liing.removeClass('active');
		$('.none').eq(index).hide();
		$('.botli').eq(index).css.backgroundImage = "../img/app/shouye/content_icon02_nor@2x.png";
		
	} else {
		var sTp = document.body.scrollTop;
		if(sTp <= ol - 55){
			
			window.scroll(0, 270);
			$('.none').eq(index).css('display','block')
		}
		$oneli.removeClass('active');
		$liing.addClass('active');
		$('.none').hide().eq(index).show();
		$('.botli').eq(index).css.backgroundImage = "../img/app/shouye/content_icon02_press@2x.png";
	}
})

	

	$('.none div').click(function(){
//		if($(this).hasClass('uiwu')){
//			$(this).removeClass('uiwu');
//			
//		}else{
//			$(this).addClass('uiwu');
//			
//		}
			
		$('.none').css('display','none');
		$(this).css('backrgound','#fff');
		$oneli.removeClass('active');
	})
	$('.xx li').click(function(){
//		if($(this).hasClass('uiwu')){
//			$(this).removeClass('uiwu');
//			
//		}else{
//			$(this).addClass('uiwu');
//			
//		}
			
		$('#for').css('display','none');
		$(this).css('backrgound','#fff');
		$oneli.removeClass('active');
	})
	


var Top_b = document.getElementById('top_bottom');
var inp = document.getElementById('inp');
var ipn = document.getElementById('ipn');
var one_none = document.getElementsByClassName('one_none_font')[0];
var two_none = document.getElementsByClassName('one_none_font')[1];
var san_none = document.getElementsByClassName('one_none_font')[2];
var si_none = document.getElementsByClassName('one_none_font')[3];
var qx = document.getElementById('qx');
var two = document.getElementById('top_two');
var gb = document.getElementById('gb');
var shanghai = document.getElementById('shanghai');
var dshanghai = document.getElementById('dname');

inp.onfocus = function() {

	Top_b.style.display = 'block';
}
ipn.onfocus = function() {

	Top_b.style.display = 'block';
}

one_none.onclick = function() {
	Top_b.style.display = 'none';
}
two_none.onclick = function() {
	Top_b.style.display = 'none';
}
san_none.onclick = function() {
	two.style.display = 'none';
}
si_none.onclick = function() {
	two.style.display = 'none';
}
gb.onclick = function() {
	two.style.display = 'none';
}

shanghai.onclick = function() {
	two.style.display = 'block';
}
qx.onclick = function() {
	Top_b.style.display = 'none';
}

san_none.onclick = function(){
	dshanghai.innerText = '北京';
	shanghai.innerText = '北京';
	two.style.display = 'none';
}

si_none.onclick = function(){
	dshanghai.innerText = '上海';
	shanghai.innerText = '上海';
	two.style.display = 'none';
}

dshanghai.onclick = function() {
	two.style.display = 'block';
}



var cklick1 = document.getElementById('click_one');
var cklick2 = document.getElementById('click_two');
var cklick3 = document.getElementById('click_san');
var cklick4 = document.getElementById('click_si');


//cklick1.onclick = function(){
//	if(botli.style.backgroundImage == "url('../img/app/shouye/content_icon02_press@2x.png')"){
//		console.log(botli.style.backgroundImage == "url('../img/app/shouye/content_icon02_press@2x.png')");
//		botli.style.backgroundImage = "url('../img/app/shouye/content_icon02_press@2x.png')";
//	}
				
	
//}

$('#yuyue').click(function(){
		location.replace("../yuyue/jiedan.html")
		})

$('#xinxi').click(function(){
		location.replace("../xinxi/xiaoxi.html")
		})
$('#wo').click(function(){
				location.replace("../wo/mydl.html")
				})

$('#fabu').click(function(){
		location.replace("../fabu/tiaoz.html")
		})