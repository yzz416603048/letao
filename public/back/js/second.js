// // 在这个里面写入2级分类是页面

// $(function(){
//     // 还是要申请2个页面开始做分页
 
//     var  currentPage = 1;
//     var  pageSize = 5;

//     function render(){
//         // 然后在这个里面开始发送ajax请求
//         $.ajax({
//             type:'get',
//             url:'/category/querySecondCategoryPaging',
//             data:{
//                 page :currentPage,
//                 pageSize : pageSize

//             },
//             success:function(info){
//                 console.log(info)

//                 // 然后开始渲染一下模板
//                 var html  = template('tpl',info);
//                 $('tbody').html(html);

//                 // 然后在开始渲染分页
//                 $("#paginator").bootstrapPaginator({
//                     bootstrapMajorVersion: 3,
//                     currentPage: currentPage,
//                     totalPages: Math.ceil(info.total / pageSize),
//                     onPageClicked: function (a, b, c, page) {
//                       currentPage = page;
//                       render();
//                     }
//                   });
              
//             }
//         })
//     }


//     render();

//     // 然后开始调用一下模态框
//     $(".btn_add").on('click',function(){
//         // 然后开始让模态框出现
//         $('#addModal').modal('show')


//         // 然后在开始发送AJAX的请求
//         $.ajax({
//             type:'get',
//             url:'/category/queryTopCategoryPaging',
//             //然后是参数，
//             data:{
//                 page :1,
//                 pageSize :100
//             },
//             success:function(info){
//                 console.log(info)

//                 var  html = template('tpl1',info);
//                 $('.dropdown-menu').html(html);
              
//             }
//         })
//     })

// $(".dropdown-menu").on("click", "a", function () {

//     $(".dropdown-text").text($(this).text());

//     //获取到当前a的id值，设置给categoryId
//     $("[name='categoryId']").val($(this).data("id"));


//     //3. 让categoryId校验变成成功
//     $form.data("bootstrapValidator").updateStatus("categoryId", "VALID");

//   })
// })



// //   表单校验功能。
// var $form = $("form");
// $form.bootstrapValidator({
//   excluded: [],//不校验的内容
//   feedbackIcons: {
//     valid: 'glyphicon glyphicon-ok',
//     invalid: 'glyphicon glyphicon-remove',
//     validating: 'glyphicon glyphicon-refresh'
//   },
//   //校验规则
//   fields: {
//     categoryId: {
//       validators: {
//         notEmpty: {
//           message: "请选择一级分类"
//         }
//       }
//     },
//     brandName: {
//       validators: {
//         notEmpty: {
//           message: "请输入二级分类的名称"
//         }
//       }
//     },
//     brandLogo: {
//       validators: {
//         notEmpty: {
//           message: "请上传品牌图片"
//         }
//       }
//     }
//   }
// });

// // 初始化图片上传
// $("#fileupload").fileupload({
//     dataType: "json",
//     done: function (e, data) {
  
//       console.log(data);
//       console.log(data.result.picAddr);
//       $(".img_box img").attr("src", data.result.picAddr);
//       $("[name='brandLogo']").val(data.result.picAddr);
//       $form.data("bootstrapValidator").updateStatus("brandLogo", "VALID");
//     }
//   });



// // 给表单校验功能
// $form.on("success.form.bv", function (e) {
//     // 表单校验完成事件让他不要跳转。
//     e.preventDefault();

//     //发送ajax
//     $.ajax({
//       type: "post",
//       url: "/category/addSecondCategory",
//     //   用一下表单序列化。
//       data: $form.serialize(),
//       success: function (info) {
//         if (info.success) {
//           //成功了
//           //1. 关闭模态框
//           $("#addModal").modal("hide");
//           //2. 重新渲染第一页
//           currentPage = 1;
//           render();


 
//           $form[0].reset();
//           $form.data("bootstrapValidator").resetForm();


//           $(".dropdown-text").text("请选择一级分类");
//           $("[name='categoryId']").val('');
//           $(".img_box img").attr("src", "images/none.png");
//           $("[name='brandLogo']").val('');
//         }
//       }
//     });

//   })
  

     




$(function(){
  //分页的数据
    var  currentPage = 1;
      var  pageSize = 5;
  
// 2封装的函数
function render(){
          // 然后在这个里面开始发送ajax请求
          $.ajax({
              type:'get',
              url:'/category/querySecondCategoryPaging',
              data:{
                  page :currentPage,
                  pageSize : pageSize
  
              },
              success:function(info){
                  console.log(info)
  
                  // 然后开始渲染一下模板
                  var html  = template('tpl',info);
                  $('tbody').html(html);
  
                  // 然后在开始渲染分页
                  $("#paginator").bootstrapPaginator({
                      bootstrapMajorVersion: 3,
                      currentPage: currentPage,
                      totalPages: Math.ceil(info.total / pageSize),
                      onPageClicked: function (a, b, c, page) {
                        currentPage = page;
                        render();
                      }
                    });
                
              }
          })
      }
      render();


      // 3然后调用一下模态框

    $(".btn_add").on('click',function(){
        // 然后开始让模态框出现
        $('#addModal').modal('show')


        // 然后在开始发送AJAX的请求
        $.ajax({
            type:'get',
            url:'/category/queryTopCategoryPaging',
            //然后是参数，
            data:{
                page :1,
                pageSize :100
            },
            
            success:function(info){
                console.log(info)

                var  html = template('tpl1',info);
                $('.dropdown-menu').html(html);
              
            }
        })
    })



//  然后给a添加一下事件。

$(".dropdown-menu").on("click", "a", function () {

    $(".dropdown-text").text($(this).text());

    //获取到当前a的id值，设置给categoryId
    $("[name='categoryId']").val($(this).data("id"));


    //3. 让categoryId校验变成成功
    $form.data("bootstrapValidator").updateStatus("categoryId", "VALID");

  })

    // //   表单校验功能。
var $form = $("form");
$form.bootstrapValidator({
  excluded: [],//不校验的内容
  feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },
  //校验规则
  fields: {
    categoryId: {
      validators: {
        notEmpty: {
          message: "请选择一级分类"
        }
      }
    },
    brandName: {
      validators: {
        notEmpty: {
          message: "请输入二级分类的名称"
        }
      }
    },
    brandLogo: {
      validators: {
        notEmpty: {
          message: "请上传品牌图片"
        }
      }
    }
  }
});





//然后是初始化图片

$("#fileupload").fileupload({
  dataType: "json",//指定响应的格式
  done: function (e, data) {//图片上传成功之后的回调函数
    //通过data.result.picAddr可以获取到图片上传后的路径
    console.log(data);
    console.log(data.result.picAddr);

    //设置给img_box中img的src属性
    $(".img_box img").attr("src", data.result.picAddr);

    //把图片的地址赋值给brandLogo
    $("[name='brandLogo']").val(data.result.picAddr);

    //把brandLogo改成成功
    $form.data("bootstrapValidator").updateStatus("brandLogo", "VALID");
  }
});



// 然后给表单校验成功事件，最后在给大宋请求


$form.on("success.form.bv", function (e) {
  e.preventDefault();

  //发送ajax
  $.ajax({
    type: "post",
    url: "/category/addSecondCategory",
    //校验表单成功之后然后在发送AJax请求。
    data: $form.serialize(),
    success: function (info) {
      if (info.success) {
        //成功了
        //1. 关闭模态框
        $("#addModal").modal("hide");
        //2. 重新渲染第一页
        currentPage = 1;
        render();


        //3. 重置内容和样式要从JQ里面转换成DOM对象的
        $form[0].reset();
        $form.data("bootstrapValidator").resetForm();

    
        $(".dropdown-text").text("请选择一级分类");
        $("[name='categoryId']").val('');
        $(".img_box img").attr("src", "images/none.png");
        $("[name='brandLogo']").val('');
      }
    }
  });

})




});