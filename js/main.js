$(function () {
    //显示购物车
    $(".car_t:first,.last:first").mouseenter(function () {
        $(".last:first").show();
    });
    //隐藏购物车
    $(".car_t:first,.last:first").mouseleave(function () {
        $(".last:first").hide();
    });
//    鼠标移入首页"客户服务"显示树形菜单
    $(".ss li:nth-child(2)").mouseenter(function () {
        $(this).find(".ss_list_bg").slideDown("slow");
        // $(this).stop(true,true);
    });
    //    鼠标移入首页"客户服务"隐藏树形菜单
    $(".ss li:nth-child(2)").mouseleave(function () {
        $(this).find(".ss_list_bg").slideUp("slow");
        // $(this).stop(true,true);
    });
//   处理购物车
//    "-"
    var $del=$(".J_btnDelCount");
    //    "+"
    var $add=$(".J_btnAddCount");
    //"综合算数"
    var $conSum=parseInt($(".J_totalCount")[0].innerText.substr(1));
    //"综合金额"
    var $totalPrice=parseFloat($(".J_totalPrice")[0].innerText.substr(1));
    $del.click(function () {
        //将输入框的值取整
        var delValue=parseInt($(this).next()[0].value);
        //获得当前li的总价
        var $sum=parseFloat($(this).parent().next()[0].innerText.substr(1));
        //获得平均价
        var $avg=$sum/delValue;
        //输入框的值不能为0
        if (delValue>=0) {
            delValue-=1;
            $(this).next()[0].value=delValue;
        }
        //当value为0时提示是否删除
        if (delValue==0){
            var con=confirm("是否要删除这件商品?");
            if (con){
                $(this).parents("li").remove();
            }else {
                delValue=1;
                $(this).next()[0].value=delValue;
                //取消了为了确保数值不变,点击一次$conSum-=1;$totalPrice=parseFloat($totalPrice)-$avg;,所以这里要加
                $conSum+=1;
                $totalPrice=$totalPrice+$avg;
            }
        }

        $(this).parent().next()[0].innerHTML="￥"+($avg*delValue).toFixed(2);
        $conSum-=1;
        $(".J_totalCount")[0].innerText="("+$conSum+")";
        $totalPrice=$totalPrice-$avg;
        $(".J_totalPrice")[0].innerHTML="￥"+$totalPrice.toFixed(2);
    });
    $add.click(function () {
        //将输入框的值取整
        var delValue=parseInt($(this).prev()[0].value);
        //获得当前li的总价
        var $sum=parseFloat($(this).parent().next()[0].innerText.substr(1));
        //获得平均价
        var $avg=$sum/delValue;
            delValue+=1;
            $(this).prev()[0].value=delValue;
        $(this).parent().next()[0].innerHTML="￥"+($avg*delValue).toFixed(2);
        $conSum+=1;
        $(".J_totalCount")[0].innerText="("+$conSum+")";
        $totalPrice=$totalPrice+$avg;
        $(".J_totalPrice")[0].innerHTML="￥"+$totalPrice.toFixed(2);
    });
//    获取删除按钮
    var $delete=$(".J_btnDelete");
    $delete.click(function (t) {
        //获得li的索引
        var $index=$(".shop ul li .J_btnDelete").index(this);
        alert($index);
        //获得删除商品的价格
        var $money=$(".shop ul li:eq("+$index+") .clear .shopText .clear .J_smallTotalPrice")[0].innerHTML.substr(1);
        // alert($money)
        //获得删除商品的数量
        var $count=$(".shop ul li:eq("+$index+") .clear .shopText .clear .plush .J_inputCount").val();
        // alert($count)
        var con=confirm("是否要删除这件商品?");
        if (con){
            //重新赋值结算的数量和价格
            $conSum-=$count;
            $(".J_totalCount")[0].innerText="("+$conSum+")";
            $totalPrice=$totalPrice-$money;
            $(".J_totalPrice")[0].innerHTML="￥"+$totalPrice.toFixed(2);
            // alert($count)
            $(this).parents("li").remove();
        }
        // alert($children.length);
        var $children=$(".shop ul li");
        if ($children.length==0){
            // $(".shop ul").append(`<div style="height: 200px;padding: auto;line-height: 200px;font-size: 16px;text-align: center">你的一号店购物车还是空的</div>`);
            $(".shop").hide();
            $(".noshop").show();
        }
    });
   /*
   //轮播图
   * */
    //定义图片数组
    var image=["images/ban1.jpg","images/ps1.jpg","images/ban1.jpg"];
    var i=0;
    //循环
    setInterval(function () {
        $(".top_slide_wrap .slide_box .active img")[0].src=image[i];
        $(".top_slide_wrap .slide_box .active").fadeToggle("fast");
        $(".top_slide_wrap .num li:eq("+i+")").addClass("active");
        $(".top_slide_wrap .num li:eq("+(i-1)+")").removeClass("active");
        i++;
        if (i==image.length){
            i=0;
        }
    },3000);


    /*
    *快讯滚动
    * */
    var $new=$(".inews  ul");
    $new.animate({top:'-150px'},"slow");
    $new.animate({top:'0px'},"slow");
    $new.animate({top:'-150px'},"slow");
    $new.animate({top:'0px'},"slow");
});