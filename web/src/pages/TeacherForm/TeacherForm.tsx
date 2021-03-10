import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Input, PageHeader, Select, Textarea } from '../../components';

// Assets
import './TeacherForm.styles.scss';
import warningIcon from '../../assets/images/icons/warning.svg';
import { api } from '../../services';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

type ScheduleItem = {
  week_day: number;
  from: string;
  to: string;
};

type Form = {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: string;
};

const TeacherForm: React.FC = () => {
  const history = useHistory();
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([
    { week_day: 0, from: '', to: '' },
  ]);

  const [form, setForm] = useState<Form>({
    name: '',
    avatar: '',
    whatsapp: '',
    bio: '',
    subject: '',
    cost: '',
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreateClass = async (event: FormEvent) => {
    event.preventDefault();

    setLoading(true);

    await api
      .post('/classes', {
        ...form,
        cost: Number(form.cost),
        schedule: scheduleItems,
      })
      .then(() => {
        setLoading(false);

        toast.success('Cadastro salvo com sucesso!', {
          progress: undefined,
          onClose: () => history.push('/'),
        });
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response.data.error);
      });
  };

  const addNewScheduleItem = () =>
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);

  const setScheduleItemValue = (
    index: number,
    fieldName: string,
    value: string
  ) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, i) => {
      if (i === index) {
        return {
          ...scheduleItem,
          [fieldName]: value,
        };
      } else {
        return scheduleItem;
      }
    });

    setScheduleItems(updatedScheduleItems);
  };

  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader
        title='Que incrível que você quer dar aulas'
        description='O primeiro passo é preencher este formulário de inscrição'
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name='name'
              label='Nome completo'
              value={form.name}
              onChange={handleInputChange}
            />
            <Input
              name='avatar'
              label='Avatar'
              value={form.avatar}
              onChange={handleInputChange}
            />
            <Input
              name='whatsapp'
              label='Whatsapp'
              value={form.whatsapp}
              onChange={handleInputChange}
            />
            <Textarea
              name='bio'
              label='Biografia'
              value={form.bio}
              onChange={handleInputChange}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

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
            <Input
              name='cost'
              label='Custo da sua hora por aula'
              type='number'
              onChange={handleInputChange}
              value={form.cost}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type='button' onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div className='schedule-item' key={index}>
                  <Select
                    label='Dia da semana'
                    name='week_day'
                    onChange={(event) =>
                      setScheduleItemValue(
                        index,
                        'week_day',
                        event.target.value
                      )
                    }
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                    value={scheduleItem.week_day}
                  />

                  <Input
                    name='from'
                    label='Das'
                    type='time'
                    onChange={(event) =>
                      setScheduleItemValue(index, 'from', event.target.value)
                    }
                    value={scheduleItem.from}
                  />
                  <Input
                    name='to'
                    label='Até'
                    type='time'
                    onChange={(event) =>
                      setScheduleItemValue(index, 'to', event.target.value)
                    }
                    value={scheduleItem.to}
                  />

                  {/* <button type='button' onClick={() => removeScheduleItem(index)}>
                  <FaTimes />
                </button> */}
                </div>
              );
            })}
          </fieldset>
        </form>

        <footer>
          <p>
            <img src={warningIcon} alt='Aviso importante' />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button disabled={loading} type='button' onClick={handleCreateClass}>
            {loading ? 'Carregando...' : 'Salvar cadastro'}
          </button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
