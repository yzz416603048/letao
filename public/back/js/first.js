// 在这里开始写入第一分页
$(function(){
    // 因为还要开一个分页，所以我们要设置一下分页
    var currentPage = 1;
    var pageSize = 5;

    // 然后在封装一盒函数，
    function render(){
        // 在发送ajax的请求，
        $.ajax({
            type:"get",
            url:"/category/queryTopCategoryPaging",
            data:{
                page:currentPage,
                pageSize:pageSize
            },
            // 然后在监听事件，
            success:function(info){
                console.log(info)

                var html = template('tpl',info)

                $('tbody').html(html);
                // 然后开始在这里开始进行分页
                $('#paginator').bootstrapPaginator({
                    // 然后输入版本号，
                    bootstrapMajorVersion:3,
                    currentPage: currentPage,
                    totalPages: Math.ceil(info.total / pageSize ),
                    onPageClicked:function(a,b,c,page){
                        currentPage = page;
                        render();
                    }
                })
            }
        })
    }
    // 然后在调用一下，
    render();
    // 然后开始让模态框显示，
    $('.btn_add').on('click',function(){
       $('#addtModal').modal('show');

    })

    // 然后开始使用插件开始重新添加一下一级分类
    // r然后在开始校验表单功能
    var $form= $('form');
    $form.bootstrapValidator({
        // 然后校验下图标
        feedbackIcons:{
            valid: 'glyphicon glyphicon-ok',
            invalid:'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },
          fields:{
            categoryName:{
      
              validators:{
                notEmpty:{
                  message:"请输入一级分类的名称"
                }
              }
      
            }
          }
    })

    // 
    $form.on("success.form.bv",function(e){
        // 然后阻止一下事件跳转
        e.preventDefault();
        console.log(222)
        // 然后校验事件完成以后开始发送AJAX请求，
        $.ajax({
            type:'post',
            url:'/category/addTopCategory',
            data:$form.serialize(),
            success:function(info){
                console.log(info)
                // 然后在关闭模态框
                $('#addtModal').modal('hide');
                // 然后开始重新渲染页面
                render();
                // 然后开始在重新清空一下样式
                $form.data("bootstrapValidator").resetForm();
                //$form是一个jquery对象，没有reset方法
                //但是dom对象有reset方法，所以需要把form这个对象取出来，才能调用reset方法
                $form[0].reset();
            }
        })
    })



})