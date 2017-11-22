// 在这个里面写入2级分类是页面

$(function(){
    // 还是要申请2个页面开始做分页
 
    var  currentPage = 1;
    var  pageSize = 5;

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

    // 然后开始调用一下模态框
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

// 然后下一步就是选中里面的标签，然后给他们事件
// $(".dropdown-menu").on("click", "a", function () {
//     //console.log("呵呵");
//     //1. 设置按钮的内容
//     $(".dropdown-text").text($(this).text());

//     //获取到当前a的id值，设置给categoryId
//     $("[name='categoryId']").val($(this).data("id"));


//     //3. 让categoryId校验变成成功

//   })

     
})