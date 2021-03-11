import React from 'react';

// Assets
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import { Teacher } from '../../pages/TeacherList/TeacherList';
import './TeacherItem.styles.scss';

type Props = {
  teacher: Teacher;
};

const TeacherItem: React.FC<Props> = ({ teacher }) => {
  return (
    <article className='teacher-item'>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
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
