var baseW = １２８０;
var ua = navigator.userAgent.toLowerCase();
var isiPad = (ua.indexOf("ipad") > -1);
function updateMetaViewport(){
  var viewportContent;
  var w = window.outerWidth;
  if(isiPad){
    viewportContent = "width="+baseW+"px";
  } else {
    viewportContent = "width=device-width,initial-scale=1";
  }
  document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent);
}
if(isiPad){
  window.addEventListener("resize", updateMetaViewport, false);
  window.addEventListener("orientationchange", updateMetaViewport, false);
}
