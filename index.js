const show = document.querySelectorAll('.show')
const hide = document.querySelectorAll('.hide')
const form = document.querySelector('#container')
const submitBtn = document.querySelector('#submit')
const resultForm = document.getElementById('results')



form.addEventListener('submit', Submit) 

function Submit() {

    event.preventDefault()

    console.log('button hit');
    console.log(form.classList.contains('show'));

    if (form.classList.contains('show')) {

        console.log('if');

        form.classList.remove('show')
        form.classList.add('hide')
        resultForm.classList.remove('hide')
        resultForm.classList.add('show')
    }





}

