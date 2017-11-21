// 然后在这里开始写验证逻辑

$(function(){

    var $form = $("form");
    // 然后在开始调用这个方法
    $form.bootstrapValidator({
        // 1是配置检验时候的图标。
        feedbackIcons:{
            valid:'glyphicon glyphicon-ok',
            invalid:'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        // 2配置校验的规则
        fields:{
            
            username:{
                validators:{
                    notEmpty:{
                        message:"用户名不能为空"
                    },
                    
                    
                  callback:{
                message:'用户不存在'
              }
                   
                }
            },
            password:{
                validators:{
                    notEmpty:{
                        message:"用户密码不能为空"
                    },
                      stringLength:{
                        min:6,
                          max:12,
                          message:"密码长度6-12位"
                    },

                    // 在这里设置一个callback
                    callback:{
                        message:'密码错误'
                    }
                }
                
            }
            
          }
    })
   
   
    //然后给表单一个校验成功的事件，
    $form.on('success.form.bv',function(e){
        // 这里是阻止浏览器的默认行为，
        e.preventDefault();
        // 然后在使用AJAC开始

          // 然后在使用AJax开始从后台拿数据，‘
          $.ajax({
              type:"post",
              url:"/employee/employeeLogin",
            //   然后类型不用写，直接用表单序列化。
            data: $form.serialize(),
            // 下面在给监听事件，
            success:function(data){
                // console.log(data)
                // 然后开始拿到数据

                // 然后在开始判断一下密码拿到的错误给报错
                if(data.success){
                    location.href = 'index.html';
                }

                // 然后在判断错误的时候等于1000，
                if(data.error ===1000){
                    $form.data("bootstrapValidator").updateStatus("username", "INVALID", "callback");

                }


                if(data.error ===1001){
                    $form.data("bootstrapValidator").updateStatus("password", "INVALID", "callback");

                }
            }

          })

    })
      
    // 然后在开始设置重置选中功能，然后开始重置样式
    $("[type = 'reset']").on('click',function(){

        // 然后开始调用一个方法，重置样式，
        $form.data("bootstrapValidator").resetForm();
    })


})