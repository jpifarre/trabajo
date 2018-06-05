var limit = 0;
function init(){
    getVerb();
    limit = 10;
    //getPages();
}
function getVerb()
{

    $('#listVerb').empty();


      $.getJSON('./js/verbos/verbos.json', function(data){
          //console.log(data.verbos.length)

        for(i = 0; i<data.verbos.length;i++)
        {
            if(data.verbos[i].rank > limit-10 && data.verbos[i].rank <= limit)
            {
                $('#listVerb').append("<tr><td style='text-align:center; border-bottom: 1px solid black'>"+data.verbos[i].rank +"</td>"+
                "<td onclick='openVerb("+data.verbos[i].rank+")' style='border-left:1px solid black;border-bottom: 1px solid black'>"+data.verbos[i].german +"</td></tr>")
            }

        }
    })
    getPages()
    pageid = (limit/10);
    $("#"+pageid+"pagina").attr("style","color:#fff; background-color:#5EB12C")
    $('#verbsPagination').show();

}
function openVerb(verbo)
{
    $.getJSON('./js/verbos/verbos.json', function(data){
        for(i = 0; i<data.verbos.length;i++)
        {
           if(data.verbos[i].rank == verbo)
           {
            window.open("verbos/"+data.verbos[i].german+".html","_blank");
           }
        }
    });
}
function filtrarVerbos() {
    limit = 10;
    $('#listVerb').empty();
   $('#paginationVerbsF').attr('hidden','false');
   $('#verbsPagination').hide();
    if($('#txtCaja').val() !="")
    {
        $.getJSON('./js/verbos/verbos.json', function(data){
            for(i = 0; i<data.verbos.length;i++)
            {
                if(data.verbos[i].german.startsWith($('#txtCaja').val()))
                {
                        $('#listVerb').append("<tr><td style='text-align:center; border-bottom: 1px solid black'>"+data.verbos[i].rank +"</td>"+
                        "<td onclick='openVerb("+data.verbos[i].rank+")' style='border-left:1px solid black;border-bottom: 1px solid black'>"+data.verbos[i].german +"</td></tr>"+
                        "<td onclick='openVerb("+data.verbos[i].rank+")' style='border-left:1px solid black;border-bottom: 1px solid black'>"+data.verbos[i].spanish +"</td></tr>");
                }
            }
            if(!data.verbos.startsWith($('#txtCaja').val()))
            {
                $('#listVerb').append("No existe")
            }
        })
    } else {
        $('#paginationVerbs').show();
        $('#paginationVerbsF').hide();
        getVerb();
    }

}
function getPages(){
    $.getJSON('./js/verbos/verbos.json', function(data){
        $("#verbsPagination").empty();
        pages = Math.ceil(data.verbos.length/10);
        $("#verbsPagination").append('<li  onclick="prevPage()" id="prvBtn"><a class="page-link " style="color:#5EB12C;font-size:14px"><i class="fa fa-angle-left"></i></a></li>')
        i=0;
        if(limit >= ((i+10) *10)){
            i = i+10;
            mitat = pages;
        } else {
            i = 1;
            mitat = pages/2
        }
        limitPrev = limit-10;
        //$("#prvBtn").attr("hidden","true");
        if(limitPrev <= 0)
        {
            $("#prvBtn").hide();
        } else {
            $("#prvBtn").show();
        }
        for(i ; i <= mitat; i++)
        {


                $("#verbsPagination").append('<li style="margin-left:5px"onclick="limit='+i+'*10;getVerb()"><a class="page-link active" style="color:#5EB12C;font-size:14px">'+ i +'</a></li>');

        }
        $("#verbsPagination").append('<li  onclick="nextPage()" id="nextBtn"><a class="page-link" style="color:#5EB12C;font-size:14px"><i class="fa fa-angle-right"></a></i></li>');
        if(limitPrev+10 >= data.verbos.length )
            {
                $("#nextBtn").hide();
            } else {
                $("#nextBtn").show();
            }
        //
        //   <li style="display: inline;" onclick="nextPage()"><i class="fa fa-angle-right"></i></li>
    })
}
function nextPage()
{
    limitN = limit + 10;
    limit = limitN;
    //console.log(limit);
    getVerb();

}
function nextPageF()
{
    limitN = limit + 10;
    limit = limitN;
    //console.log(limit);
    getVerb();

}
function prevPage()
{
    limitN = limit - 10;
    if(limitN <= 0)
    {
        limit=10;
    } else {
        limit = limitN;
    }

    //console.log(limit);
    getVerb();

}
function prevPage()
{
    limitN = limit - 10;
    limit = limitN;
    //console.log(limit);
    getVerb();

}
function prevPageF()
{
    limitN = limit - 10;
    limit = limitN;
   // console.log(limit);
    getVerb();

}
init();