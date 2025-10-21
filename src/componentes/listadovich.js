import React from 'react';

class Listadovichz extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Stefano</td>
                    <td>lachispa@nashe.com</td>
                </tr>

            </tbody>
        </table> );
    }
}
export 
default Listadovichz;