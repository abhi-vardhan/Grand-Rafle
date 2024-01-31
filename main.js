const handleInput= (inputNumber, event) => {
    const currentInput = document.querySelector(`.inputContainer input:nth-child(${inputNumber})`);
    const nextInput = document.querySelector(`.inputContainer input:nth-child(${inputNumber + 1})`);

    if(currentInput.value.length === 1 && nextInput) {
        nextInput.ariaDisabled = false;
        nextInput.focus();
    }

    const allInputsFilled = Array.from(document.querySelectorAll(`.inputContainer input`)).every(input => input.value.length === 1);

    const verifyBtn = document.querySelector('.verifyBtn');
    verifyBtn.disabled = !allInputsFilled;



}

const handleBackspace = (inputNumber, event) => {
    if(event.key === "Backspace") {
        const currentInput = document.querySelector(`.inputContainer input:nth-child(${inputNumber})`);
        const prevInput = document.querySelector(`.inputContainer input:nth-child(${inputNumber - 1})`);

        if(currentInput.value.length === 0 && prevInput) {
            currentInput.ariaDisabled = true;
            currentInput.value = "";
            prevInput.focus();
        }

        const allInputsFilled = Array.from(document.querySelectorAll(`.inputContainer input`)).every(input => input.value.length === 1);

            const verifyBtn = document.querySelector(".verifyBtn");
            verifyBtn.disabled = !allInputsFilled;


    }
}