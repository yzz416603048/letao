
// 在这个里面写入逻辑 在这里加入ajax的全局事件，
NProgress.configure({ showSpinner: false });
$(document).ajaxStart(function(){
    // 然后开始调用里面的方法就可以，
    NProgress.start();
});

$(document).ajaxStop(function () {
    setTimeout(function () {
      NProgress.done();
    }, 500);
  
  });


