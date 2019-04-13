(function (doc, win) {
   // 获取网页根元素html
   var docEl = doc.documentElement;
   
   // 获取浏览器中的窗口大小是否改变事件
   var resizeEvt = 'orientationchange' in window ? 'orientationchange': 'resize';
   
   // 设置网页根元素字体大小
   var recalc = function () {   
      if (!docEl.clientWidth) return;
      if (docEl.clientWidth <= 750) {
         docEl.style.fontSize = 75 * (docEl.clientWidth / 750) + 'px';
      }else{
         docEl.style.fontSize = '75px';
      }
     
   }
    
   if (!doc.addEventListener) return;

   recalc();  // 设置网页根元素字体大小
   
   // 如果窗口大小改变就重新设置网页根元素字体大小 
   win.addEventListener(resizeEvt, recalc, false);
   doc.addEventListener('DOMContentLoaded', recalc, false);
   
})(document, window)