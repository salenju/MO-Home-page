$(function() {
    // banner  补充说明文字tab切换
    $("#b_tab_menu li>a").hover(function() {
        var i = $(this).closest("li").index();
        $(this).next().addClass("tab-menu-active");
        $("#b_tab_box").css("background-color","rgba(255, 255, 255, 0.2)");
        $("#b_tab_box li").eq(i).addClass("show").siblings().removeClass("show");
    },function () {
        var i = $(this).closest("li").index();
        $(this).next().removeClass("tab-menu-active");
        $("#b_tab_box").css("background-color","rgba(255, 255, 255, 0)");
        $("#b_tab_box li").eq(i).removeClass('show');
    });

    // tools 补充说明文字tab切换
    $("#icon_lists li>a").hover (function() {
        var i = $(this).closest("li").index();
        // 为当前hover的icon添加样式
        $("#icon_lists li").eq(i).addClass("t-active").siblings().removeClass("t-active");
        // 显示当前hover的icon对应的文字内容
        $("#t_tab_box li").eq(i).addClass("show").siblings().removeClass("show");
        // 显示当前hover的icon对应的下划线标识
        $("#t_tab_hint li").eq(i).addClass("select").siblings().removeClass("select");
        console.log(i);
        },function() {
        var i = $(this).closest("li").index();
        $("#icon_lists li").eq(i).removeClass("t-active");
        $("#t_tab_box li").eq(i).removeClass("show");
        $("#t_tab_hint li").eq(i).removeClass("select");
    });
});