import {computed, watch} from 'vue'
import * as yup from 'yup'
import {useField, useForm, } from 'vee-validate'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export function useLoginForm(){
    const store = useStore()
    const router = useRouter()
    const {
        handleSubmit,
        isSubmitting,
        submitCount
    } = useForm()

    const {
        value: email,
        errorMessage: eError,
        handleBlur: eBlur
    } = useField(
        'email',
        yup
        .string()
        .trim()
        .required('Пожалуйста введите email')
        .email('Необходимо ввести корректный email')
    )

    const {
        value: password,
        errorMessage: pError,
        handleBlur: pBlur
    } = useField(
        'password',
        yup
        .string()
        .trim()
        .required('Пожалуйста введите пароль')
        .min(6, 'Длинна пароля должно быть больше 6')
    )

    const onSubmit = handleSubmit(async values => {
        console.log('Form:', values)
        try{
                    await store.dispatch('auth/login', values)
                    router.push('/')
        }catch(e){
            
        }
    })

    const isTooManyAttempts = computed(() => submitCount.value >= 3)

    watch(isTooManyAttempts, val => {
        if (val) {
            setTimeout(() => submitCount.value = 0, 1500)
        }
    })

    return {
        email,
        password,
        eError,
        pError,
        eBlur,
        pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttempts,
        
    }
}