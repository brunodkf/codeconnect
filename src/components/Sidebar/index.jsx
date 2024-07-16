import './styles.css';
import Logo from './assets/Logo.svg';
import Feed from './assets/feed.svg';
import Perfil from './assets/account_circle.svg';
import Info from './assets/info.svg';
import Sair from './assets/logout.svg';

export const Sidebar = () => {
  return (
      <aside>
        <img src={Logo} alt="Logo do CodeConnect" />

        <nav>
            <ul className='lista-sidebar'>
                <li>
                    <a href="#" className='item__link-publicacao'>Publicar</a>
                </li>
                <li>
                    <a href="#" className='item__link  item__link--ativo'>
                        <img src={Feed} alt='Icone'/>
                        <span>Feed</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='item__link'>
                        <img src={Perfil} alt='Icone'/>
                        <span>Perfil</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='item__link'>
                        <img src={Info} alt='Icone'/>
                        <span>Sobre Nós</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='item__link'>
                        <img src={Sair} alt='Icone'/>
                        <span>Sair</span>
                    </a>
                </li>
            </ul>
        </nav>
      </aside>
   
  );
};
