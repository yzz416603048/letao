
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

  // 然后要在这个里面写判断登录页面，判断当前用户是不是登录了

  if(location.href.indexOf("login.html") == -1){
    $.ajax({
      type:"get",
      url:"/employee/checkRootLogin",
      success:function (data) {
        if(data.error === 400){
          //说明用户没有登录，跳转到登录页面
          location.href = "login.html";
        }
      }
    })
  }


  // 在这个里面写入2级分类的逻辑，

  $('.child').prev().on('click',function(){
    $(this).next().slideToggle();
  })

  // 然后开始切换类，
  $(".icon_menu").on("click", function () {
    $(".lt_aside").toggleClass("now");
    $(".lt_main").toggleClass("now");
  });

  // 然后卡死写入模态框。
  $('.icon_logout').on('click',function(){
  //  然后开始在这个里面写入退出登录功能
    // 首先让模态框选取出来，
    $('#logoutModal').modal('show');
    

    // 然后在这个里面在写退出登录的功能发送AJak的请求
  $('.btn_logout').off().on('click',function(){
    // 然后开始在这个里面写阿贾克斯的
    $.ajax({
      type:'get',
      url:"/employee/checkRootLogin",
      success:function(data){
        // 然后判断一下是不是退出成功m
        console.log('我退出了')
        if(data.success){
          // 然后开始跳转回去，
          location.href = 'login.html';
        }
      }
    })
  })
})



