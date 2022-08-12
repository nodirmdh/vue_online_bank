import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'

export function useRequestForm(fn){
    const {isSubmittimng,handleSubmit} = useForm({
        initialValues: {
            status: 'active'
        }
    })

    const {value: fio, errorMessage: fError, handleBlur: fBlur} = useField(
        'fio',
        yup.string()
            .trim()
            .required('Введите ФИО клиента')
    )
    const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
        'phone',
        yup.string()
            .trim()
            .required('Введите номер телефона')
        )
    const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField(
        'amount',
        yup.number()
            .required('Введите сумму')
            .min(0,'Сумма не может быть меньше 0')
        )
    const {value: status} = useField('status',)

    const onSubmit = handleSubmit(fn)

    return {
        status,
        isSubmittimng,
        onSubmit,
        fio,fBlur,fError,
        phone,pBlur,pError,
        amount,aBlur,aError
    }
}