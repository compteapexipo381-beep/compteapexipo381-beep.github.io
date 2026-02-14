document.addEventListener("DOMContentLoaded", ()=>{

    //select form and add action on submit
    $('#contact_form').submit(function (event) {
        // cancel refresh post
        
        event.preventDefault()
        
        // Sending XHR request
        let t=$.post($(this).attr('action'), $(this).serializeArray(), function (data) {
            
            let Errorstatut = $('#mail_statut_error')
            let Successstatut = $('#mail_statut_success')
            
            //reset
            Errorstatut.addClass('hidden')
            Successstatut.addClass('hidden')

            if (data.result) {
                Successstatut.removeClass('hidden')
                clearForm();
            } else {
                Errorstatut.removeClass('hidden')
            }
        })
    })
})

function clearForm()
{
    let inputs=document.querySelectorAll('.input_contact')
    for(let input of inputs)
    {
        input.value=''
    }
    document.querySelector('#msg').value=''

}
