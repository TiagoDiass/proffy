import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './TeacherItem.styles.scss';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/49597377?s=460&u=1cb884e66bd9b53aa849220d6d16597493f1ddda&v=4"
          alt="Foto do Proffy"
        />
        <div>
          <strong>Tiago Dias</strong>
          <span>Geografia</span>
        </div>
      </header>

      <p>
        Professor de Geografia ensinando o melhor do bioma brasileiro.
        <br />
        <br />
        As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória
        fotográfica e nunca fico perdido. Eu ensino a galera como não se perder na vida, com lições geográficas simples
        pra você nunca mais precisar de mapa na sua bela vida.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 40,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
