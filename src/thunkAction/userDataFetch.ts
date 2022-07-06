import { createAsyncThunk } from '@reduxjs/toolkit'

export const userDataFetch: any  = createAsyncThunk (
    'User data from serwer',
    async () => {

        try {
            
            const response = await fetch('https://omdbapi.com/?apikey=ed02d785&s=star'); //url взят с дипломной работы для ошибки 200
            const dataFromServer = await response.json();
            
            const userData = {
                    name: 'Захар',
                    surname: 'Палазник',
                    patronymic: 'Геннадьевич',
                    photo: 'https://s3-alpha-sig.figma.com/img/d835/0a92/1d03d73360fa772829d007cce5379724?Expires=1658102400&Signature=B6DLcWsl2dTYF4PgmYpusy-VqJWro7bkjy6Xz4Jsd6VI7~wz3NIeVMgAHQElbRRRDl749bWMuREu04R1zNoPse9EUx42yZVqFOHVqHS7tpAkeS0pMFYNf5XwNMg8vIp34X-3ZGNWcklqRHtbvUc7df1-ZcnhzjRoyFsZrN1WZHA9cRwwABrV4-0v2I8ppSXPbbDoBivFaMUufb7CJICqL5Zy6RRLR89rKnm1jfpS0YeabsSHToWmPwBflCVyGUC3vmFpvWxVkPDvMu7MWqx9XA7O2Mrb5Hacg-H5CgM7XM3wV~eY8BAaycon13JWbSuSCdTBtepxn0yn8RR0PFv7yA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                    country: 'Беларусь',
                    city: 'Минск',
                    mobileNumber: '+375 22 111 33 44',
                }

            return userData

        } catch (err: any) {            
            return err.response.json();
      }

    }

)