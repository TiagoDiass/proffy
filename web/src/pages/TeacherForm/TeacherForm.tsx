import React, { useState } from 'react';
import { PageHeader, Input, TextArea, Select } from '../../components';

import warningIcon from '../../assets/images/icons/warning.svg';

import './TeacherForm.styles.scss';

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }]);

  const subjectOptions = [
    {
      value: 'Artes',
      label: 'Artes',
    },
    {
      value: 'Biologia',
      label: 'Biologia',
    },
    {
      value: 'Ciências',
      label: 'Ciências',
    },
    {
      value: 'Educação Física',
      label: 'Educação Física',
    },
    {
      value: 'Física',
      label: 'Física',
    },
    {
      value: 'Geografia',
      label: 'Geografia',
    },
    {
      value: 'História',
      label: 'História',
    },
    {
      value: 'Matemática',
      label: 'Matemática',
    },
    {
      value: 'Português',
      label: 'Português',
    },
    {
      value: 'Química',
      label: 'Química',
    },
  ];

  const weekDayOptions = [
    {
      value: '0',
      label: 'Domingo',
    },
    {
      value: '1',
      label: 'Segunda-feira',
    },
    {
      value: '2',
      label: 'Terça-feira',
    },
    {
      value: '3',
      label: 'Quarta-feira',
    },
    {
      value: '4',
      label: 'Quinta-feira',
    },
    {
      value: '5',
      label: 'Sexta-feira',
    },
    {
      value: '6',
      label: 'Sabádo',
    },
  ];

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Link do seu avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <TextArea name="bio" label="Escreva um pouco sobre você" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select name="subject" label="Matéria" options={subjectOptions} />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((scheduleItem) => (
            <div className="schedule-item" key={scheduleItem.week_day}>
              <Select name="week_day" label="Dia da Semana" options={weekDayOptions} />
              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até as" type="time" />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
