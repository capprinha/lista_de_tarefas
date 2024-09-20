$(document).ready(function(){
    const addTarefa = $('#addInput');
    const lista = $('#lista');
    const btnCancel = $('#btn_cancel');
    

    $('form').on('submit', function(e){
        e.preventDefault();
        
        $(`<li>${addTarefa.val()}</li>`).appendTo(lista)

    })
    $('#btn').click(function(){
        $('#lista').slideDown();
    })
    lista.on('click', 'li', function(){
        $(this).addClass('riscar')

    })
    btnCancel.click(function(){
        lista.empty();
    })
    




})
    
