
    let secret = Math.random();
    secret = secret * 100;
    secret = Math.floor(secret);
    secret = secret + 1;

    function game(){
        for(let i = 10; i >= 0; i = i - 1){

            let option = +numberInput.value;

            attempt.innerHTML = (`${i}`);

            if(secret == option){
                main.innerHTML = (`${option}`);
                number.innerHTML = (`Ваш варіант ${option} - вірний!`);
                break;
            } else if(secret > option){
                number.innerHTML = (`Ваш варіант ${option} - менший за моє число`);
            } else {
                number.innerHTML = (`Ваш варіант ${option} - більший за моє число`);
            }
    
        }

    }