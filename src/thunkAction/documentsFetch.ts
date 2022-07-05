import { createAsyncThunk } from '@reduxjs/toolkit'

export const documentsFetch: any  = createAsyncThunk (
    'Data documents from serwer',
    async () => {

        try {
            
            const response = await fetch('https://omdbapi.com/?apikey=ed02d785&s=star'); //url взят с дипломной работы для ошибки 200
            const dataFromServer = await response.json();
            
            const dataDocuments = {
                    allDocuments: 5,
                    documents: [
                        {
                            id: 1,
                            category: 'Общие документы',
                            name: 'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"',
                            date: '20.07.2021',
                            documentsNumber: '1226',
                            size: '469 Кб',
                        },
                        {
                            id: 2,
                            category: 'Общие документы',
                            name: 'Приказ №486 от 22.09.2020 Об утверждении классификатора программ для электронных вычислительных машин и баз данных',
                            date: '22.09.2020',
                            documentsNumber: '468',
                            size: '10.81 Мб',
                        },
                        {
                            id: 3,
                            category: 'Общие документы',
                            name: 'Административный регламент ПРИКАЗ от 21 февраля 2019 года N62',
                            date: '21.02.2019',
                            documentsNumber: '62',
                            size: '2.25 Мб',
                        },
                        {
                            id: 4,
                            category: 'Общие документы',
                            name: 'Постановление Правительства РФ от 20.12.2017 № 1594 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"',
                            date: '20.12.2017',
                            documentsNumber: '1594',
                            size: '2.07 Мб',
                        },
                        {
                            id: 5,
                            category: 'Общие документы',
                            name: 'Об утверждении правил применения классификатора программ для электронных вычислительных машин и баз данных',
                            date: '31.12.2015',
                            documentsNumber: '622',
                            size: '4.69 Мб',
                        },
                    ]
                }               

            return dataDocuments

        } catch (err: any) {            
            return err.response.json();
      }

    }

)