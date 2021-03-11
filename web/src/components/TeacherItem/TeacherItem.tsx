import React from 'react';

// Assets
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import { Teacher } from '../../pages/TeacherList/TeacherList';
import { api } from '../../services';
import './TeacherItem.styles.scss';

type Props = {
  teacher: Teacher;
};

const TeacherItem: React.FC<Props> = ({ teacher }) => {
  const teacherFirstName = teacher.name.split(' ')[0];

  const createNewConnection = async () => {
    await api.post('/connections', {
      user_id: teacher.id,
    });
  };

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

        <a
          onClick={createNewConnection}
          href={`https://wa.me/55${teacher.whatsapp}?text=Olá ${teacherFirstName}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
