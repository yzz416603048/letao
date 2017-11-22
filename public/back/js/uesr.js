// 然后在这个里面开始发送AJax请求
// 然后下面还是要做分页
$(function(){
    var currentPage = 1;
    var pageSize = 5;

   //封装一个函数
   function render(){
        // 然后在这个里面发送AJAX请求。
        $.ajax({
            type:'get',
            url:"/user/queryUser",
            data:{
                page:currentPage,
                pageSize:pageSize
            },

            // 然后下面在给监听事件。
            success:function(info){
                console.log(info)

                var html  = template('tpl',info);
                // 然后在开始加进去
                $('tbody').html(html);
                // 然后在这个里面调用分页的方法来进行渲染。
                $('#paginator').bootstrapPaginator({
                    // 然后里面传入三个参数，
                    //1是版本号，  2是版本的主页是多少。3 是要显示分页的次数，
                    bootstrapMajorVersion:3,
                    currentPage: currentPage,
                    totalPages: Math.ceil(info.total / pageSize ),
                    onPageClicked:function (a,b,c,page) {//点击页码的时候，会触发
                        currentPage = page;
                        render();
                      }
                })
            }
          
        })

   }


   render();
//然后找到禁用盒子让他显示模态框
$('tbody').on('click','.btn',function(){
    // alert(2)
    // 然后开始让模态框显示。
    $('#usertModal').modal('show')
    // 然后在发送AJax的命令

    var id = $(this).parent().data('id');
    var  isDelete = $(this).hasClass('btn-danger')?0:1;
    //然后在开始发送AJax的请求
    $('.btn_user').off().on('click',function(){
    //   然后在开始发送AJax请求
    $.ajax({
        type:'post',
        url:'/user/updateUser',
        // 然后参数是id
        data:{
            id:id,
            isDelete: isDelete
        },
        // 然后在开始给监听事件，
        success:function(info){
            console.log(info)
            // 获得了数据然后就把模态框给关闭
            $('#usertModal').modal('hide');
            // 然后在开始渲染页面
            render();
        }
    })
    })
})

})