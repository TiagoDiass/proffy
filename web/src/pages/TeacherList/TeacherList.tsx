import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Input, PageHeader, Select, TeacherItem } from '../../components';
import { FaSearch } from 'react-icons/fa';

// Assets
import './TeacherList.styles.scss';
import { api } from '../../services';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';

type Form = {
  subject: string;
  week_day: string;
  time: string;
};

export type Teacher = {
  id: number;
  name: string;
  avatar: string;
  subject: string;
  whatsapp: string;
  bio: string;
  cost: number;
};

const TeacherList: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Form>({
    subject: '',
    week_day: '',
    time: '',
  });

  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSearchTeachers = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    await api
      .get('/classes', {
        params: {
          ...form,
        },
      })
      .then((response: AxiosResponse<Teacher[]>) => {
        setLoading(false);
        setTeachers(response.data);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          err.response.data || 'Ocorreu um erro durante sua requisição'
        );
      });
  };

  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis.'>
        <form id='search-teachers' onSubmit={handleSearchTeachers}>
          <Select
            name='subject'
            label='Matéria'
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Física', label: 'Física' },
              { value: 'Química', label: 'Química' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
            ]}
            value={form.subject}
            onChange={handleInputChange}
          />

          <Select
            label='Dia da semana'
            name='week_day'
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
            value={form.week_day}
            onChange={handleInputChange}
          />

          <Input
            label='Hora'
            name='time'
            type='time'
            value={form.time}
            onChange={handleInputChange}
          />

          <button type='submit' disabled={loading}>
            <FaSearch /> {loading ? 'Carregando...' : 'Buscar'}
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
};

export default TeacherList;
