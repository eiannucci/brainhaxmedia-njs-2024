var _countInt,_num,scroller;function init(){(scroller=new ISIScroller).start(),scroller.setScrollDelay(15),setClicks(),setScrollerSpeed(),animate(),0<navigator.userAgent.indexOf("Firefox")&&(document.getElementById("isi").classList.add("ff-font"),document.getElementsByTagName("body")[0].classList.add("ff-font")),-1<window.location.hash.toString().indexOf("#isi")&&(document.body.className+="show-isi",_showISI=!0),document.getElementById("isi-container").addEventListener("click",()=>{scroller.stopISI()})}function setClicks(){for(var t=document.getElementsByClassName("click"),e=0;e<t.length;e++)t[e].addEventListener("click",exitHandler)}function exitHandler(t){t.preventDefault(),t.stopPropagation();t=window[t.currentTarget.getAttribute("data")];window.open(t)}function setScrollerSpeed(){scroller.setScrollDuration(220)}window.onload=function(){init()};const animate=()=>{gsap.to(".frame-1",{duration:.25,opacity:1,onComplete:function(){gsap.to("#f1img1",{duration:.25,scale:1,opacity:1,ease:"back.out(1.7)",onComplete:function(){gsap.to("#frame1",{delay:1.5,duration:.25,opacity:0,ease:"linear",onComplete:function(){gsap.to("#frame2",{duration:1,opacity:1,ease:"linear",onComplete:function(){gsap.to("#f2img1",{duration:.25,scale:1,opacity:1,ease:"linear",onComplete:function(){gsap.to("#f2img2",{delay:.5,duration:.25,opacity:1}),gsap.to("#f2img3",{delay:.5,duration:.25,opacity:1,left:0}),gsap.to("#f2img1",{duration:3,rotation:"+=360",ease:"linear",onComplete:function(){gsap.to("#f2img3",{duration:.25,opacity:0}),gsap.fromTo("#f2img1",{scale:1},{duration:.5,scale:10,opacity:0,ease:"back.in(1.7)"}),gsap.fromTo("#f2img2",{scale:1},{duration:.5,scale:10,opacity:0,ease:"back.in(1.7)",onComplete:function(){gsap.to("#frame3",{duration:.25,opacity:1}),gsap.to("#screenCover",{duration:.25,height:0,onComplete:function(){gsap.to("#f3img2",{duration:.5,scale:1,opacity:1,ease:"elastic.out(1, 0.3)",onComplete:function(){gsap.to("#f3img2",{delay:2.5,duration:.25,scale:0,opacity:0,ease:"linear",onComplete:function(){gsap.to("#f3img3",{duration:.25,scale:1,opacity:1,ease:"elastic.in(1, 0.3)",onComplete:function(){gsap.to("#f3img4",{delay:.5,duration:.25,opacity:1,scale:1,ease:"elastic.in(1, 0.3)",onComplete:function(){gsap.to("#f3img3",{delay:1,duration:.25,scale:0,opacity:0,ease:"linear"}),gsap.to("#f3img4",{delay:1,duration:.25,scale:0,opacity:0,ease:"linear",onComplete:function(){gsap.to("#frame3",{duration:.25,opacity:0,ease:"linear",onComplete:function(){gsap.to("#frame4",{duration:.25,opacity:1,ease:"linear",onComplete:function(){gsap.to("#wrapper",{duration:.25}),gsap.to("#f4img1",{duration:.5,scale:1,opacity:1,ease:"linear"}),gsap.to("#f4img2",{duration:.15,opacity:1,bottom:"32.5%",ease:"linear"})}})}})}})}})}})}})}})}})}})}})}})}})}})}})}})};var ISIScroller=function(t){var e,o,a,n,i,l,s=null==t||t,c=30,r=!1,u=(this.start=function(){e=document.getElementById("isi"),o=document.getElementById("isi-container"),f(),s&&setTimeout(function(){i=setInterval(d,100,n)},2e3),e.addEventListener("mousewheel",function(t){clearInterval(i)})},this.setScrollDelay=function(t){s&&(clearTimeout(a),a=setTimeout(p,1e3*t))},this.setScrollDuration=function(t){c=t,f()},this.stopISI=function(){r=!0},function(){clearTimeout(a),clearInterval(i)}),p=function(){clearInterval(i),i=setInterval(d,100,n)},d=function(t){Math.abs(l-parseInt(e.style.marginTop))>t&&u(),l=l||0,l+=t,r?u():(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)||Math.abs(l-o.scrollTop)>10*n&&u(),0<=l&&Math.abs(l)<e.clientHeight?o.scrollTop=l:l>e.clientHeight&&(o.scrollTop=e.clientHeight,u()))},f=function(){n=(e.clientHeight-o.clientHeight)/(10.5*c)}};