(function(){
    const form=document.querySelector('#message-form');


    // addeventLister in the form variable

    form.addEventListener('submit',function(e){
        e.preventDefault()

        const message=document.querySelector('#input')
        const feedback=document.querySelector('.feedback')
        const messagecontent=document.querySelector('.message-content');

        if(message.value===''){
            feedback.classList.add('show')
            setTimeout(function(){
                feedback.classList.remove('show')

            },4000);
        }else{
            messagecontent.textContent=message.value;
            message.value='';
        }
    })
}
)()