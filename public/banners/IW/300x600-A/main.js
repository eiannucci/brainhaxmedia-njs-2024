var _countInt,_num,scroller;function init(){setClicks(),animate(),0<navigator.userAgent.indexOf("Firefox")&&(document.getElementById("isi").classList.add("ff-font"),document.getElementsByTagName("body")[0].classList.add("ff-font"))}function setClicks(){console.log("setClicks();");for(var e=document.getElementsByClassName("click"),o=0;o<e.length;o++)e[o].addEventListener("click",exitHandler)}function exitHandler(e){e.preventDefault(),e.stopPropagation();e=window[e.currentTarget.getAttribute("data")];window.open(e)}window.onload=function(){},document.addEventListener("DOMContentLoaded",function(){init()});const animate=()=>{document.querySelector("#animation");gsap.to("#bg",{delay:.25,duration:0,opacity:1,ease:"none"}),gsap.to("#bg",{delay:1,duration:4.5,scale:.55,y:385,x:135,ease:"linear",onComplete:function(){gsap.to("#bg",{delay:0,duration:9,scale:.425,y:385,x:135,ease:"power3.out"})}}),gsap.to("#copy1",{delay:0,opacity:1,ease:"linear",onComplete:function(){console.log("Setting complete!"),gsap.to("#copy2",{delay:2,opacity:1,duration:.5,ease:"linear",onComplete:function(){gsap.to("#copy1, #copy2",{delay:4,opacity:0,duration:.5,ease:"linear",onComplete:function(){gsap.to("#copy3-1, #blur, #ps, #refs",{delay:3,opacity:1,duration:.5,ease:"linear",onComplete:function(){gsap.to(" #copy3-2",{delay:.25,opacity:1,duration:.5,ease:"linear",onComplete:function(){gsap.to(" #copy3-3",{delay:.25,opacity:1,duration:.5,ease:"linear",onComplete:function(){gsap.to(" #copy3-4",{delay:.25,opacity:1,duration:.5,ease:"linear",onComplete:function(){gsap.to(" #logo-svg, #cta, #footnote",{delay:.5,opacity:1,duration:.5,ease:"linear"})}})}})}})}})}})}})}})};