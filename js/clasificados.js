function changeStat(value)
{
    $(".box a").attr("style","");
    $("#"+ value + "Txt").attr("style","color: red");
    $("#"+ value + "Txt").attr("style","text-decoration: underline; font-weight: bolder");
}