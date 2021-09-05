import env from './environment.js';

class WorkshopsListPage {
    constructor( containerEl ) {
        this.containerEl = containerEl;
    }

    fetchWorkshops() {
        return fetch( `${env.apiBaseUrl}/workshops` )
                    .then( response => {
                        if( !response.ok ) {
                            throw new Error( response.statusText );
                        }

                        return response;
                    })
                    .then( response => {
                        console.log( response );
                        return response.json();
                    })
                    .then( data => {
                        console.log( data );
                        return data;
                    })
                    .catch( error => console.log( error.message ) );
    }
    
    renderWorkshops( workshops ) {
        const workshopsListEl = this.containerEl;

        workshopsListEl.innerHTML = ``;

        workshops.forEach(
            workshop => {
                // destructuring
                const { imageUrl, name, description } = workshop;
                
                workshopsListEl.innerHTML += `
                    <div class="workshop-card">
                        <div class="workshop-image-wrapper">
                            <img src="${imageUrl}" class="img-fluid" />
                        </div>
                        <h2>${name}</h2>
                        <div>${description}</div>
                    </div>
                `;
            }
        );
    }

    fetchAndRenderWorkshops() {
        this.fetchWorkshops()
            .then( workshops => {
                this.renderWorkshops( workshops );
            });
    }

    init() {
        this.fetchAndRenderWorkshops();
    };
}

( new WorkshopsListPage( document.querySelector( '#workshops-list' ) ) ).init();