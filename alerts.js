function errorAlert(text){
alert(text)
}

function confirmAlert(text){
    if(confirm(text)!=true){
        document.write(`
            <h1>Pieeja ir aizliegta</h1>    
        `)
    };
}

export {errorAlert,confirmAlert}