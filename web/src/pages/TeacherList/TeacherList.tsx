import React from 'react';
import { Input, PageHeader, TeacherItem } from '../../components';

// Assets
import './TeacherList.styles.scss';

const TeacherList: React.FC = () => {
  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis.'>
        <form id='search-teachers'>
          <Input label='Matéria' name='subject' />
          <Input label='Dia da semana' name='week_day' />
          <Input label='Hora' name='time' type='time' />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
