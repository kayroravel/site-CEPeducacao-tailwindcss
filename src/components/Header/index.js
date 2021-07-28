import React from 'react';

import './styles.css';

export default props => {
    return (
        <header className="header-site-cep">
            <div className="menu-topo-cep">


                {/* MENU MOBILE */}
                <div className="devmenu-mobile"></div>
                {/* FIM MENU MOBILE */}

                {/* MENU DESKTOP */}
                <div className="cepmenu">
                    <a className="logo-img" title="Centro Educacional Profissionalizante" >Logo</a>


                    <nav className="menu-itens-cep">
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Cursos</a></li>
                            <li><a href="#">Especialização</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Fale Conosco</a></li>

                        </ul>
                    </nav>

                    <div className="menu-itens-cep">
                        <ul>
                            <li><a href="#" className="botao-alunoOnline" >Aluno Online</a></li>
                            <li><a className="botao-EAD" href="#">EAD</a></li>
                        </ul>
                    </div>
                </div>
                {/* FIM MENU DESKTOP */}
            </div>

            <div className="form-busca">

                <form className="form-busca-site">
                    <input className="btn-text-top" type="text" name="txtsearch" placeholder="Buscar"></input>
                    <button class="btn-buscar-top" type="submit"></button>
                </form>

            </div>

        </header>

    )
}


