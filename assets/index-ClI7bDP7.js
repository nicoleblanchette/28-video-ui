(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const u=document.querySelector(".speed"),i=u.querySelector(".speed-bar"),d=document.querySelector(".flex"),l=s=>{const c=(s.pageY-s.target.offsetTop)/s.target.offsetHeight,r=.25,e=4,t=Math.round(c*100)+"%",o=c*(e-r)+r;i.style.height=t,i.textContent=o.toFixed(2)+"x",d.playbackRate=o};u.addEventListener("mousemove",l);