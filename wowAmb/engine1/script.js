// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a}});function ws_shift(k,i,c){var d=jQuery;var h=d(this);var b=c.find("li");var f=c.find(".ws_list");var e={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"};var g=d("<div>").addClass("ws_effect ws_shift").css(e).appendTo(c);var a=d("<div>").css(e).css({display:"none",zIndex:4}).appendTo(g);var j=d("<div>").css(e).css({display:"none",zIndex:3}).appendTo(g);this.go=function(l,p,n){var m=c.width();var o=c.height();a.append(d(i.get(l)).clone());j.append(d(i.get(p)).clone());if(k.responsive<3){a.find("img").css("width","100%");j.find("img").css("width","100%")}f.stop(true,true).hide().css({left:-l+"00%"});var q={left:[{left:-m},{left:0}],right:[{left:m},{left:0}],down:[{top:o},{top:0}],up:[{top:-o},{top:0}]}[k.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];if(k.support.transform){if(q[0].left){q[0]={translate:[q[0].left,0,0]}}else{q[0]={translate:[0,q[0].top,0]}}q[1]={translate:[0,0,0]}}a.show();j.show();wowAnimate(a,q[0],q[1],k.duration,"easeInOutCubic",function(){f.show();a.hide().html("");j.hide().html("");h.trigger("effectEnd")});wowAnimate(j,{scale:1,translate:[0,0,0]},{scale:0.5,translate:[0,0,0]},k.duration,"easeInOutCubic")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"shift",prev:"",next:"",duration:20*100,delay:20*100,width:800,height:600,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:true,loop:false,bullets:0,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:3,fullScreen:true,gestures:2,onBeforeStep:0,images:[{src:"./9_wohnzimmer__balkon.jpg",title:"9_Wohnzimmer - Balkon"},{src:"./10_liegesthle__balkon.jpg",title:"10_Liegestühle - Balkon"},{src:"./11_badspiegel.jpg",title:"11_Badspiegel"},{src:"./11_dusche.jpg",title:"11_Dusche"},{src:"./12_eecke.jpg",title:"12_Eßecke"},{src:"./13_bett.jpg",title:"13_Bett"},{src:"./14_fr_genieer.jpg",title:"14_für Genießer"},{src:"./15_schlafzimmer.jpg",title:"15_Schlafzimmer"},{src:"./16_smarttv.jpg",title:"16_Smart-TV"},{src:"./17_willkommen.jpg",title:"17_Willkommen"},{src:"./18_kronleuchter.jpg",title:"18_Kronleuchter"},{src:"./19_eecke__balkon.jpg",title:"19_Eßecke - Balkon"},{src:"./20_schlafzimmer.jpg",title:"20_Schlafzimmer"},{src:"./21_dusche.jpg",title:"21_Dusche"},{src:"./22_wc.jpg",title:"22_WC"},{src:"./1_schlafzimmer.jpg",title:"1_Schlafzimmer"},{src:"./2_eecke__wohnzimmer.jpg",title:"2_Eßecke - Wohnzimmer"},{src:"./3_waschbecken.jpg",title:"3_Waschbecken"},{src:"./4_infomappe.jpg",title:"4_Infomappe"},{src:"./5_kche.jpg",title:"5_Küche"},{src:"./6_bersicht.jpg",title:"6_Übersicht"},{src:"./7_flur.jpg",title:"7_Flur",href:"http://wowslider.net"},{src:"./8_wc.jpg",title:"8_WC"}]});