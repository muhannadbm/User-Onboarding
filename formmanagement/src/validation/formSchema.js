import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string().required('Name is required'),
    password: yup.string().required('Password is required')
        .min(8, 'Password must be 8 characters long at least'),
    email: yup.string().email('Must be Email format').required('Email is required'),
    term: yup.string().oneOf(['true'],'Please accept terms and conditions').required('Terms are required'),

    }
)
export default formSchema