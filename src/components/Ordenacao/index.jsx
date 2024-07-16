import './styles.css';

export default function Ordenacao(){

    function trocaClasse(event){
        var links = document.querySelectorAll('.ordenacao__link');
        links.forEach(e => e.classList.contains("ordenacao__link--active") ? e.classList.remove('ordenacao__link--active') : null);
        event.target.classList.add('ordenacao__link--active');
    }

    return(
        <div className="ordenacao">
            <a href="#" className='ordenacao__link ordenacao__link--active' onClick={trocaClasse}>Recentes</a>
            <a href="#" className='ordenacao__link' onClick={trocaClasse}>Publicações</a>
        </div>
    )
}