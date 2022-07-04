import { createAsyncThunk } from '@reduxjs/toolkit'

export const registryFetch: any  = createAsyncThunk (
    'Data from serwer',
    async () => {

        try {
            
            const response = await fetch('https://omdbapi.com/?apikey=ed02d785&s=star'); //url взят с дипломной работы для ошибки 200
            const dataFromServer = await response.json();
            
            const datatable = [
                {
                    registrationNumber: '#1',
                    name: 'Система управления базами данных «Ред База Данных»',
                    classCode: '02.09',
                    softwareClass: 'Системы управления базами данных',
                    registrationDate: '29.01.2016',
                    url: 'https://www.google.com/',
                },
                {
                    registrationNumber: '#2',
                    name: '1С:Школа. Информатика, 11 класс',
                    classCode: '04.11',
                    softwareClass: 'Системы управления  процессами  организации',
                    registrationDate: '29.01.2016',
                    url: 'https://www.google.com/',
                },
                {
                    registrationNumber: '#3',
                    name: '1С:Школа. Русский язык, 5–6 класс. Лексикология',
                    classCode: '04.11',
                    softwareClass: 'Информационные системы для решения специфических отраслевых задач',
                    registrationDate: '29.01.2016',
                    url: 'https://www.google.com/',
                },
                {
                    registrationNumber: '#4',
                    name: '1С:Комплексная автоматизация 8',
                    classCode: '04.11',
                    softwareClass: 'Системы управления процессами организации',
                    registrationDate: '20.02.2016',
                    url: 'https://www.google.com/',
                },
                {
                    registrationNumber: '#5',
                    name: 'Электронный периодический справочник "Система ГАРАНТ"',
                    classCode: '04.15',
                    softwareClass: 'Прикладное программное обеспечение общего назначения',
                    registrationDate: '20.02.2016',
                    url: 'https://www.google.com/',
                },
                {
                    registrationNumber: '#6',
                    name: 'Система электронного документооборота и автоматизации бизнес-процессов «Е1 Евфрат»',
                    classCode: '04.13',
                    softwareClass: 'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
                    registrationDate: '11.03.2016',
                    url: 'https://www.google.com/',
                },
                {
                    registrationNumber: '#7',
                    name: 'ABBYY Lingvo',
                    classCode: '04.07',
                    softwareClass: 'Лингвистическое программное обеспечение',
                    registrationDate: '11.03.2016',
                    url: 'https://www.google.com/',
                },
                {
                    registrationNumber: '#8',
                    name: '1С-Битрикс24 (Компания)',
                    classCode: '04.03',
                    softwareClass: 'Офисные приложения',
                    registrationDate: '14.03.2016',
                    url: 'https://www.google.com/',
                },
                {
                    registrationNumber: '#9',
                    name: '1С-Битрикс24 (Проект+)',
                    classCode: '04.03',
                    softwareClass: 'Системы управления проектами, исследованиями, разработкой, проектированием и внедрением',
                    registrationDate: '14.03.2016',
                    url: 'https://www.google.com/',
                },
                {
                    registrationNumber: '#10',
                    name: '1С-Битрикс24 (Команда)',
                    classCode: '04.03',
                    softwareClass: 'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
                    registrationDate: '14.03.2016',
                    url: 'https://www.google.com/',
                },
                {
                    registrationNumber: '#11',
                    name: 'Система управления базами данных «Ред База Данных»',
                    classCode: '02.09',
                    softwareClass: 'Системы управления базами данных',
                    registrationDate: '29.01.2016',
                    url: 'https://www.google.com/',
                },
                {
                    registrationNumber: '#12',
                    name: '1С:Школа. Информатика, 11 класс',
                    classCode: '04.11',
                    softwareClass: 'Системы управления  процессами  организации',
                    registrationDate: '29.01.2016',
                    url: 'https://www.google.com/',
                },
                {
                    registrationNumber: '#13',
                    name: '1С:Школа. Русский язык, 5–6 класс. Лексикология',
                    classCode: '04.11',
                    softwareClass: 'Информационные системы для решения специфических отраслевых задач',
                    registrationDate: '29.01.2016',
                    url: 'https://www.google.com/',
                },
                {
                    registrationNumber: '#14',
                    name: '1С:Комплексная автоматизация 8',
                    classCode: '04.11',
                    softwareClass: 'Системы управления процессами организации',
                    registrationDate: '20.02.2016',
                    url: 'https://www.google.com/',
                },
                {
                    registrationNumber: '#15',
                    name: 'Электронный периодический справочник "Система ГАРАНТ"',
                    classCode: '04.15',
                    softwareClass: 'Прикладное программное обеспечение общего назначения',
                    registrationDate: '20.02.2016',
                    url: 'https://www.google.com/',
                },
            ]

            return datatable

        } catch (err: any) {            
            return err.response.json();
      }

    }

)