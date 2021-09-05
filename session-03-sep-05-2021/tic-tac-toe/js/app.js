/* <div class="circle">&#9675;</div> */
/* <div class="cross">&times;</div> */

const state = {
    next: -1,
    cells: [
        [ 0, 0, 0 ],
        [ 0, 0, 0 ],
        [ 0, 0, 0 ]
    ],
    isGameOver: false
};

const nextPlayer = () => {
    if( state.next === 1 ) {
        state.next = 2;
    } else {
        state.next = 1;
    }
};

const bindListeners = () => {
    const rows = Array.from( document.querySelectorAll( '.row' ) );

    rows.forEach( ( row, idxRow ) => {
        const cols = Array.from( row.querySelectorAll( '.col' ) );

        cols.forEach( ( col, idxCol ) => {
            col.addEventListener( 'click', function() {
                console.log( 'cell has been clicked', idxRow, idxCol );

                if( state.cells[idxRow][idxCol] !== 0 ) {
                    alert( 'Cell has already been selected. Try again!' );
                    return;
                }

                state.cells[idxRow][idxCol] = state.next;

                // CHECK IF GAME IS OVER

                nextPlayer();
                render();
            });
        });
    });
};

const render = () => {
    document.querySelector( '.next-player' ).innerHTML = state.next;

    const rows = Array.from( document.querySelectorAll( '.row' ) );

    rows.forEach( ( row, idxRow ) => {
        const cols = Array.from( row.querySelectorAll( '.col' ) );

        cols.forEach( ( col, idxCol ) => {
            if( state.cells[idxRow][idxCol] === 1 ) {
                col.innerHTML = `<div class="circle">&#9675;</div>`;
            } else if( state.cells[idxRow][idxCol] === 2 ) {
                col.innerHTML = `<div class="cross">&times;</div>`;
            }
        });
    });
};

const init = () => {
    bindListeners();
    nextPlayer();
    render();
};

init();