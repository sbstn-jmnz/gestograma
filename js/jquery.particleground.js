/**
 * Particleground
 *
 * @author Jonathan Nicol - @mrjnicol
 * @version 1.0.1
 * @description Creates a canvas based particle system background
 *
 * Inspired by:
 * http://requestlab.fr/
 * http://disruptivebydesign.com/
 * 
 * @license The MIT License (MIT)
 * 
 * Copyright (c) 2014 Jonathan Nicol - @mrjnicol
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function(e){function n(n,r){function E(){if(!u){return}$canvas=e('<canvas class="pg-canvas"></canvas>');o.prepend($canvas);a=$canvas[0];f=a.getContext("2d");S();var t=Math.round(a.width*a.height/r.density);for(var n=0;n<t;n++){var i=new k;i.setStackPos(n);l.push(i)}e(window).on("resize",function(){T()});e(document).on("mousemove",function(e){h=e.pageX;p=e.pageY});if(g&&!m){window.addEventListener("deviceorientation",function(){b=Math.min(Math.max(-event.beta,-30),30);y=Math.min(Math.max(-event.gamma,-30),30)},true)}x();O("onInit")}function S(){a.width=o.width();a.height=o.height();f.fillStyle=r.dotColor;f.strokeStyle=r.lineColor;f.lineWidth=r.lineWidth}function x(){if(!u){return}d=e(window).width();v=e(window).height();f.clearRect(0,0,a.width,a.height);for(var t=0;t<l.length;t++){l[t].updatePosition()}for(var t=0;t<l.length;t++){l[t].draw()}if(!w){c=requestAnimationFrame(x)}}function T(){S();for(i=l.length-1;i>=0;i--){if(l[i].position.x>o.width()||l[i].position.y>o.height()){l.splice(i,1)}}var e=Math.round(a.width*a.height/r.density);if(e>l.length){while(e>l.length){var t=new k;l.push(t)}}else if(e<l.length){l.splice(e)}for(i=l.length-1;i>=0;i--){l[i].setStackPos(i)}}function N(){w=true}function C(){w=false;x()}function k(){this.stackPos;this.active=true;this.layer=Math.ceil(Math.random()*3);this.parallaxOffsetX=0;this.parallaxOffsetY=0;this.position={x:Math.ceil(Math.random()*a.width),y:Math.ceil(Math.random()*a.height)};this.speed={};switch(r.directionX){case"left":this.speed.x=+(-r.maxSpeedX+Math.random()*r.maxSpeedX-r.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*r.maxSpeedX+r.minSpeedX).toFixed(2);break;default:this.speed.x=+(-r.maxSpeedX/2+Math.random()*r.maxSpeedX).toFixed(2);this.speed.x+=this.speed.x>0?r.minSpeedX:-r.minSpeedX;break}switch(r.directionY){case"up":this.speed.y=+(-r.maxSpeedY+Math.random()*r.maxSpeedY-r.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*r.maxSpeedY+r.minSpeedY).toFixed(2);break;default:this.speed.y=+(-r.maxSpeedY/2+Math.random()*r.maxSpeedY).toFixed(2);this.speed.x+=this.speed.y>0?r.minSpeedY:-r.minSpeedY;break}}function L(e,t){if(t){r[e]=t}else{return r[e]}}function A(){o.find(".pg-canvas").remove();O("onDestroy");o.removeData("plugin_"+t)}function O(e){if(r[e]!==undefined){r[e].call(s)}}var s=n;var o=e(n);var u=!!document.createElement("canvas").getContext;var a;var f;var l=[];var c;var h=0;var p=0;var d;var v;var m=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);var g=!!window.DeviceOrientationEvent;var y=0;var b=0;var w=true;r=e.extend({},e.fn[t].defaults,r);k.prototype.draw=function(){f.beginPath();f.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,r.particleRadius/2,0,Math.PI*2,true);f.closePath();f.fill();f.beginPath();for(var e=l.length-1;e>this.stackPos;e--){var t=l[e];var n=this.position.x-t.position.x;var i=this.position.y-t.position.y;var s=Math.sqrt(n*n+i*i).toFixed(2);if(s<r.proximity){f.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY);if(r.curvedLines){f.quadraticCurveTo(Math.max(t.position.x,t.position.x),Math.min(t.position.y,t.position.y),t.position.x+t.parallaxOffsetX,t.position.y+t.parallaxOffsetY)}else{f.lineTo(t.position.x+t.parallaxOffsetX,t.position.y+t.parallaxOffsetY)}}}f.stroke();f.closePath()};k.prototype.updatePosition=function(){if(r.parallax){if(g&&!m){var e=(d-0)/(30- -30);pointerX=(y- -30)*e+0;var t=(v-0)/(30- -30);pointerY=(b- -30)*t+0}else{pointerX=h;pointerY=p}this.parallaxTargX=(pointerX-d/2)/(r.parallaxMultiplier*this.layer);this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10;this.parallaxTargY=(pointerY-v/2)/(r.parallaxMultiplier*this.layer);this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}switch(r.directionX){case"left":if(this.position.x+this.speed.x+this.parallaxOffsetX<0){this.position.x=o.width()-this.parallaxOffsetX}break;case"right":if(this.position.x+this.speed.x+this.parallaxOffsetX>o.width()){this.position.x=0-this.parallaxOffsetX}break;default:if(this.position.x+this.speed.x+this.parallaxOffsetX>o.width()||this.position.x+this.speed.x+this.parallaxOffsetX<0){this.speed.x=-this.speed.x}break}switch(r.directionY){case"up":if(this.position.y+this.speed.y+this.parallaxOffsetY<0){this.position.y=o.height()-this.parallaxOffsetY}break;case"down":if(this.position.y+this.speed.y+this.parallaxOffsetY>o.height()){this.position.y=0-this.parallaxOffsetY}break;default:if(this.position.y+this.speed.y+this.parallaxOffsetY>o.height()||this.position.y+this.speed.y+this.parallaxOffsetY<0){this.speed.y=-this.speed.y}break}this.position.x+=this.speed.x;this.position.y+=this.speed.y};k.prototype.setStackPos=function(e){this.stackPos=e};E();return{option:L,destroy:A,start:C,pause:N}}var t="particleground";e.fn[t]=function(r){if(typeof arguments[0]==="string"){var i=arguments[0];var s=Array.prototype.slice.call(arguments,1);var o;this.each(function(){if(e.data(this,"plugin_"+t)&&typeof e.data(this,"plugin_"+t)[i]==="function"){o=e.data(this,"plugin_"+t)[i].apply(this,s)}});if(o!==undefined){return o}else{return this}}else if(typeof r==="object"||!r){return this.each(function(){if(!e.data(this,"plugin_"+t)){e.data(this,"plugin_"+t,new n(this,r))}})}};e.fn[t].defaults={minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#666666",lineColor:"#666666",particleRadius:7,lineWidth:1,curvedLines:false,proximity:100,parallax:true,parallaxMultiplier:5,onInit:function(){},onDestroy:function(){}}})(jQuery);(function(){var e=0;var t=["ms","moz","webkit","o"];for(var n=0;n<t.length&&!window.requestAnimationFrame;++n){window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(t,n){var r=(new Date).getTime();var i=Math.max(0,16-(r-e));var s=window.setTimeout(function(){t(r+i)},i);e=r+i;return s};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(e){clearTimeout(e)}})()