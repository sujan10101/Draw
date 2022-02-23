
function load(){

    const main = document.querySelector('.main-container');

    for (i = 0; i < 32; i++){
        const rowDiv = document.createElement('div');
        rowDiv.className = "flex-container";

        for (j = 0; j <32; j++){
            const colDiv = document.createElement('div');
            colDiv.className = "flex-item"; 
            rowDiv.append(colDiv);
        }
        main.append(rowDiv);
    }

   
}

function changecolor() {
    document.querySelector('.flex-item').style.background='#333230';
 }









