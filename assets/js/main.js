document.addEventListener('DOMContentLoaded', () => {
    //Elementos do formulário
    const form = document.getElementById('formApply');
    const inputSenha = document.getElementById('pass');
    const btnSubmit = document.getElementById('btnSubmit');

    //Senha validação
    const reqLength = document.getElementById('req-length');
    const reqUpper = document.getElementById('req-upper');
    const reqNumber = document.getElementById('req-number');
    const reqSpecial = document.getElementById('req-special');


    inputSenha.addEventListener('input', () => {
        const valor = inputSenha.value;

        const hasLength = valor.length >= 8;
        toggleClass(reqLength, hasLength);
        const hasUpper = /[A-Z]/.test(valor);
        toggleClass(reqUpper, hasUpper);
        const hasNumber = /[0-9]/.test(valor);
        toggleClass(reqNumber, hasNumber);
        const hasSpecial = /[$&+,:;=?@#|'<>*()%!ç]/.test(valor);
        toggleClass(reqSpecial, hasSpecial);

        if (hasLength && hasUpper && hasNumber && hasSpecial) {
            btnSubmit.removeAttribute('disabled');
            btnSubmit.classList.remove('btn-invalid');
        }
        else {
            btnSubmit.setAttribute('disabled','true');
            btnSubmit.classList.add('btn-invalid');
        }
    })

    function toggleClass (elemento, isValid) {
        const icon = elemento.querySelector('i');
        if (isValid) {
            elemento.classList.remove('invalid');
            icon.classList.remove('ph-circle');
            elemento.classList.add('valid');
            icon.classList.add('ph-check-circle');
        }
        else {
            elemento.classList.remove('valid');
            icon.classList.remove('ph-check-circle');
            elemento.classList.add('invalid');
            icon.classList.add('ph-circle');
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulário enviado com sucesso!')
    })
})