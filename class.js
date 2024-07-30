export class DialogBox{

    constructor(color,border,text){
        this.background = color;
        this.border = border;
        this.text = text;
    }

    addDialog = function(){
        document.body.innerHTML +=`
            <dialog open style="background:${this.background};position:fixed;width:20%;top:50%">
            <p>${this.text}</p>
            <p>
            <form method="dialog">
                <button style="float:right">OK</button>
            </form>
            <p>
            </dialog>    
        `;
    }
}

