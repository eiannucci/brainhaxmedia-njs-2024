var _countInt,_num,scroller;function init(){setClicks(),animate(),0<navigator.userAgent.indexOf("Firefox")&&(document.getElementById("isi").classList.add("ff-font"),document.getElementsByTagName("body")[0].classList.add("ff-font"))}function setClicks(){console.log("setClicks();");for(var e=document.getElementsByClassName("click"),o=0;o<e.length;o++)e[o].addEventListener("click",exitHandler)}function exitHandler(e){e.preventDefault(),e.stopPropagation();e=window[e.currentTarget.getAttribute("data")];window.open(e)}window.onload=function(){},document.addEventListener("DOMContentLoaded",function(){init()});const animate=()=>{gsap.to("#bg",{duration:0,scale:.8,x:-130,y:-380,transformOrigin:"top left",onComplete:function(){gsap.to("#bg, #wrapper",{delay:1,duration:0,opacity:1,ease:"none",onComplete:function(){gsap.to("#bg",{delay:1,duration:4.5,scale:.29,y:-60,x:-68,ease:"linear",onComplete:function(){gsap.to("#bg",{delay:0,duration:8.75,scale:.24,y:-60,x:-68,ease:"power3.out"})}})}})}}),gsap.to("#copy1-B",{delay:.25,opacity:1,ease:"linear",onComplete:function(){gsap.to("#copy1-B",{delay:4.5,opacity:0,duration:.5,ease:"linear",onComplete:function(){gsap.to("#copy2-B",{delay:0,opacity:1,duration:.5,ease:"linear",onComplete:function(){gsap.to("#copy2-B",{delay:3.5,opacity:0,duration:.5,ease:"linear",onComplete:function(){gsap.to("#copy3-B1, #blur, #ps-B, #refs-B",{delay:3,opacity:1,duration:.5,ease:"linear",onComplete:function(){gsap.to("#copy3-B2",{delay:.25,opacity:1,duration:.5,ease:"linear",onComplete:function(){gsap.to("#copy3-B3",{delay:.25,opacity:1,duration:.5,ease:"linear",onComplete:function(){gsap.to("#logo-svg, #cta-B, #footnote-B",{delay:1,opacity:1,duration:.5,ease:"linear"})}})}})}})}})}})}})}})};