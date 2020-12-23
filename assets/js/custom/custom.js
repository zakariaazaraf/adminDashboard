/* Create Your Javascript Code */

$(()=>{
    $('button').click(()=>{
        

        if(!$('.side-menu').hasClass('show')){
            $('.side-menu').removeClass('hide').addClass('show');
            /* !$('body').hasClass('overly') ? $('body').addClass('overly') : ''; */
            $('body').addClass('overly');
        }else{
            $('.side-menu').removeClass('show').addClass('hide');
            $('body').removeClass('overly');
        }

        /* $('.side-menu').hasClass('show') ?  $('.side-menu').removeClass('show').addClass('hide') : $('.side-menu').removeClass('hide').addClass('show'); */
    })
});