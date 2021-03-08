import React from 'react';

// Assets
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './TeacherItem.styles.scss';

const TeacherItem: React.FC = () => {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://dcnt5qvi2hv76.cloudfront.net/b5335837/resize_cache/304069/23365dd92c1f65a6eb81283cfddb6812/main/a64/a646cc7a3715596b68e1c9c648dd1a24/pic.png'
          alt='Tiago Dias'
        />

        <div>
          <strong>Tiago Dias</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores fórmulas de equações de segundo grau
        <br />
        <br />
        Apaixonado por resolver problemas matemáticos e por mudar a vida das
        pessoas através de logaritmos
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 35,00</strong>
        </p>

        <button type='button'>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
