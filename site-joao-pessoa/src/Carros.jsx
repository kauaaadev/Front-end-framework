import { listaDeCarros } from './assets/Dados/Dados';
import './Carro.css';
function Carros() {
    return (
        <>
            <h1>Loja de carros</h1>
            <ul>
                {
                    listaDeCarros.map((carro, index) => (
                            <li key={index}>
                                <h2>{carro.modelo}</h2>
                                <p>Marca: {carro.marca}</p>
                                <p>Ano: {carro.ano}</p>
                            </li>
                    
                        ))
                    }
                        </ul>
                        
            

        </>
    );
}

export default Carros;