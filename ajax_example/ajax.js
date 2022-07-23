$(function(){
    console.log('Hola Mundo');
    ajax_api();
});

let data;

function ajax_api(){
    $.ajax({
        url: 'http://143.198.126.149/api/retailer/all',
        type: 'GET',
        success: function(res){
            let data = res.data.values;
            let datitos='';

            for(var i=0; i<data.length; i++){
                datitos+='<li>'+data[i]+'</li>';
                console.log(datitos)
            }
            $('#container').html(datitos);
        }
    });
}

