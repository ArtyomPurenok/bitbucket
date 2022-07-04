import { createAsyncThunk } from '@reduxjs/toolkit'

export const registryNewsFetch: any  = createAsyncThunk (
    'Data news from serwer',
    async () => {

        try {
            
            const response = await fetch('https://omdbapi.com/?apikey=ed02d785&s=star'); //url взят с дипломной работы для ошибки 200
            const dataFromServer = await response.json();
            
            const datatable = [
                {
                    id: 1,
                    img: 'https://s3-alpha-sig.figma.com/img/f2c3/8cb2/9848ce0f870fbd323f8c37a33669b6ff?Expires=1658102400&Signature=QhdNHLGZRWHuFEeq3eDG5~yvlRkDm1vRTAs3MnRwg~XZN-kGzJ66LH0CmRLABVwpQQFXgV~xyiTl0A3oS6os7xQnRNf1TLf7dE~YXQ-tMth6gaRC134JjlJuSU3Qv81ghuujfjrvQmvMHixcepL~323YBakd~qjsujWTU1THrtFMmij90IAgG8Qy6LUpCuI2qqqNSrJH6Ci3ZxG3C~p65MMo46uNUOYDT8QBhsslF3EsZ3kBga3lKIIQ3h9LDV-bgvXE5JckqZapYXkH-wFnwXdnp5DiIR~LiywRtVH2z1BZ-AIkqeWS0AaE79rqaGEEVhs6mXRMnPFZExX56emfiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                    title: 'Технические работы 30.05.2022',
                    date: '30.05.2022',
                    description: 'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться ттттттттттттттттттттт',
                },
                {
                    id: 2,
                    img: 'https://s3-alpha-sig.figma.com/img/1e97/a46f/fd6c9aabe0765048e8ee732bb3f56709?Expires=1658102400&Signature=XYe4L7fcPdJ0~TFAbL~YqxUKLnYRsjMM2h7lmcUmE2PmSQOVQdPW2dz-izVzaFJvEtBILCAxTMQWoovY84b0EdYtXcqTvStDjZyqVQnBjUlZx08uK32wHZmpO5NB7yPkdI2SyF7DkvZmL1AEgPiHbUDsSFuxfqAZ7wXOlS1KuR~hwRhwHMIV3gttOCNaq0idL7sUD-3JMtyU55JmCE3O-N3x3LftegA83nLnmuAfEXGcHFbUDO6ffDBKhkBbfkjB-FYJwxXbRHdPoyMBCphfjvsg6dW49kXgaVuQr30aeJM10vIh-Ydv3YtjDipHZEAIXdUW7l23tZtwcdM44F2CjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                    title: 'Изменение справочника',
                    date: '28.05.2022',
                    description: 'Обращаем внимание, что с 28.05.2022 внесены изменения в справочник ttttttttttttttttttttttttttttttttttttttttttttttttttt',
                },
                {
                    id: 3,
                    img: 'https://s3-alpha-sig.figma.com/img/368d/8b8f/73baacd53bbf13d8ceefac86d5d7eef3?Expires=1658102400&Signature=EpjLwaQ0uEoApadEOj9nmEx5EZb4Gb7BmA0GTuTZlgxiMZe2HdYM0GMqfwaEQwnvvMd2cu~wJUXLAT~TwfKo8Lwhkx2Fdnbf1lJCTpT3MxbMbmCeHPXEPMSlXVLa7gfj8o1PF3HtB1x5br4htopd5mkLb9p2cMYJITsjKG53aXZL7DI4ntH6E0sR2tGOuJPqCG6Ha1jDo7-nSV72YqGZGsOQfMDMm2ApYBjHerODZq2D9BVbVpCfsl4sjrmhgnO3X3ZA2NCiGOUyP10T8Ze9Vea0SmjISpILnx2LJNXSHdXg6UxwT0dEr7ari6x0-uRMSZQ1dxvooGy4YvhNtRbElw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                    title: 'Технические работы 26.05.2022',
                    date: '26.05.2022',
                    description: 'В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться ttttttttttttttttttttttttttttttttttttttttt',
                },
                {
                    id: 4,
                    img: 'https://s3-alpha-sig.figma.com/img/809f/c150/1ad9c834fc7f275519a4090ce3f3da79?Expires=1658102400&Signature=S8uULmZHdby6bsSMCM15m6lyh6AR6Lip2cZmbV8dKjHZ6Hc3hVWKJMHC9lqNctssTxA97JcO82SV5pXNQ2iFOA5QVkI7xjwgPfwDwjjjgcJm46btBAbIm6-Q-LzTLHKs7gCZC8lrhLfvslcUIkOFLwmTimDFnB56QQbOqAiJfAbLahy~P-TRZ44QVIU~ozdQmHfUmXn8KwUa86IFrEj2lJzhQEfToirTH9txKP9SvP4F1PaVBGd8K57oivmCbf~RdR7jLPbGfoLktD4DX3as7P7MgitdbmYm26WH-wa9PO42-GSkh2jN1qWRNHZJe54WcBPMQrLDKkZ~IEi8baJ3XA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                    title: 'Лицензирование в Беларуси',
                    date: '25.05.2022',
                    description: 'Лицензирование затрагивает отдельные виды деятельности в Республике ttttttttttttttttttttttttttttttttttttttttttttttttttt',
                },
                {
                    id: 5,
                    img: 'https://s3-alpha-sig.figma.com/img/ced5/ae07/dca7c0e77b7f051f989e3930444dc6f2?Expires=1658102400&Signature=P0fzCCu84MA10Ii4UK~iB9onG3adBnJceNXzpJQn1CVADaDLW5I5bdIiIWJ-w84S8eS8eXwTLN~tf16cvD6TFocl6Xafu-N5hsskUMMzRojfWr4WKUk9ksRRUyEHHc1qlotRi5wpqfSAxp6hp8oJe46v5ivuGm1dYPUni~hZDpY7IR7mKR55eohMh9-C8fE0NEa2LtWq~MBbL3B~bDcBnRayuawbDNA4LNmk0oaogg05~yKEpeKrGMY~Tx8yhBNQYEgCtT7UkoYngKfdA~MN-PyQaWeFzgoiareDSMoitWfH54XSukgmcEmLhTsjkPHEFe3QZvPxPkgO18M3peHgQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                    title: 'Тестирование системы новостей',
                    date: '20.05.2022',
                    description: 'Тестирование системы новостей ЕРЛ.',
                },
                {
                    id: 6,
                    img: 'https://s3-alpha-sig.figma.com/img/a66b/9b35/0a7bfd2ebfe1fe8b3a2eccfc28a14f96?Expires=1658102400&Signature=ekZrr85LDGWB2n2eDF7OXT~0i-S03bMDxaPjZdVQ~NKgqGPptAgCGJNsnk1omEfGez-k3VEvdJ45nsUL~-p2cEFSsFq9fDIJr~6uge0iFmycwZ5~izvMcr13-~cb8in6sgPfaiFcRhO-7CvIcX1pGhUYM-xJGI~w-9SmZDtp3cW4WgB5YU8n8YzJl9s99tN~GTqklHgQG2QE0ayaPN71Ca34kB-Fzvl3cVrdwKBBHeNcijHZJFgfLDbYLLVSadIBlaLJM4iWER2z58xFnvYfKWzPjoEGpXB0R4Wv4SRpFo-0w10C21lRMexcNu2mxBTcAN7YjlTkClYl~IvSZivd2Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                    title: 'Обновление версии реестра ПО',
                    date: '18.05.2022',
                    description: 'В новой версии доступны новые функции, которые упрощают использование сервиса tttttttttt',
                },
                {
                    id: 7,
                    img: 'https://s3-alpha-sig.figma.com/img/f2c3/8cb2/9848ce0f870fbd323f8c37a33669b6ff?Expires=1658102400&Signature=QhdNHLGZRWHuFEeq3eDG5~yvlRkDm1vRTAs3MnRwg~XZN-kGzJ66LH0CmRLABVwpQQFXgV~xyiTl0A3oS6os7xQnRNf1TLf7dE~YXQ-tMth6gaRC134JjlJuSU3Qv81ghuujfjrvQmvMHixcepL~323YBakd~qjsujWTU1THrtFMmij90IAgG8Qy6LUpCuI2qqqNSrJH6Ci3ZxG3C~p65MMo46uNUOYDT8QBhsslF3EsZ3kBga3lKIIQ3h9LDV-bgvXE5JckqZapYXkH-wFnwXdnp5DiIR~LiywRtVH2z1BZ-AIkqeWS0AaE79rqaGEEVhs6mXRMnPFZExX56emfiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                    title: 'Технические работы 30.05.2022',
                    date: '30.05.2022',
                    description: 'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться ттттттттттттттттттттт',
                },
                {
                    id: 8,
                    img: 'https://s3-alpha-sig.figma.com/img/ced5/ae07/dca7c0e77b7f051f989e3930444dc6f2?Expires=1658102400&Signature=P0fzCCu84MA10Ii4UK~iB9onG3adBnJceNXzpJQn1CVADaDLW5I5bdIiIWJ-w84S8eS8eXwTLN~tf16cvD6TFocl6Xafu-N5hsskUMMzRojfWr4WKUk9ksRRUyEHHc1qlotRi5wpqfSAxp6hp8oJe46v5ivuGm1dYPUni~hZDpY7IR7mKR55eohMh9-C8fE0NEa2LtWq~MBbL3B~bDcBnRayuawbDNA4LNmk0oaogg05~yKEpeKrGMY~Tx8yhBNQYEgCtT7UkoYngKfdA~MN-PyQaWeFzgoiareDSMoitWfH54XSukgmcEmLhTsjkPHEFe3QZvPxPkgO18M3peHgQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                    title: 'Тестирование системы новостей ttttttttt',
                    date: '20.05.2022',
                    description: 'Тестирование системы новостей ЕРЛ.',
                },
                {
                    id: 9,
                    img: 'https://s3-alpha-sig.figma.com/img/809f/c150/1ad9c834fc7f275519a4090ce3f3da79?Expires=1658102400&Signature=S8uULmZHdby6bsSMCM15m6lyh6AR6Lip2cZmbV8dKjHZ6Hc3hVWKJMHC9lqNctssTxA97JcO82SV5pXNQ2iFOA5QVkI7xjwgPfwDwjjjgcJm46btBAbIm6-Q-LzTLHKs7gCZC8lrhLfvslcUIkOFLwmTimDFnB56QQbOqAiJfAbLahy~P-TRZ44QVIU~ozdQmHfUmXn8KwUa86IFrEj2lJzhQEfToirTH9txKP9SvP4F1PaVBGd8K57oivmCbf~RdR7jLPbGfoLktD4DX3as7P7MgitdbmYm26WH-wa9PO42-GSkh2jN1qWRNHZJe54WcBPMQrLDKkZ~IEi8baJ3XA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                    title: 'Лицензирование в Беларуси',
                    date: '25.05.2022',
                    description: 'Лицензирование затрагивает отдельные виды деятельности в Республике ttttttttttttttt',
                },
                
            ]

            return datatable

        } catch (err: any) {            
            return err.response.json();
      }

    }

)