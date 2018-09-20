function removeLazyLoading(a){a.target.removeAttribute("data-lazy-loading");}function loadImage(a){let b=a,c=!1;if("PICTURE"===a.tagName){const b=a.querySelectorAll("[data-srcset]"),d=a.querySelectorAll("[data-src]");b.forEach(a=>{c=!0,a.srcset=a.dataset.srcset,delete a.dataset.srcset;}),d.forEach(a=>{c=!0,a.src=a.dataset.src,delete a.dataset.src;});}else"IMG"===a.tagName&&a.dataset.src&&(c=!0,a.src=a.dataset.src,delete a.dataset.src);c&&(b.setAttribute("data-lazy-loading",!0),b.addEventListener("load",removeLazyLoading));}function loadMedia(a){let b=a,c=!1;if(a.dataset.src)c=!0,b.src=b.dataset.src,delete b.dataset.src;else{const b=a.querySelectorAll("[data-src]");b.forEach(a=>{c=!0,a.src=a.dataset.src,delete a.dataset.src;});}b.preload="auto",c&&(b.setAttribute("data-lazy-loading",!0),b.addEventListener("loadeddata",removeLazyLoading));}function loadMultimediaObserver(a){a.forEach(a=>{if(a.isIntersecting){const b=a.target;"IMG"===b.tagName||"PICTURE"===b.targetName?loadImage(b):loadMedia(b);}});}function lazyload(){const a=document.querySelectorAll("picture, img, video, audio, iframe");if("IntersectionObserver"in window){const b=new IntersectionObserver(loadMultimediaObserver);a.forEach(a=>b.observe(a));}else a.forEach(a=>{"IMG"===a.tagName||"PICTURE"===a.tagName?loadImage(a):loadMedia(a);});}

export default lazyload;
export { removeLazyLoading, loadImage, loadMedia, loadMultimediaObserver };
//# sourceMappingURL=lazyload.js.map