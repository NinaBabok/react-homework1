import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Title, FormRow, InputLabel, InputText, InputError, SuccessMessage } from '../../lib/style/generalStyles';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import { Spinner } from '../../components/Spinner/Spinner';
import { loginUser } from '../../api/login';
import { getAllUsers } from '../../api/user';

export const Login = ({login}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [isRequestFinished, setIsRequestFinished] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            isAdmin: false
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email adress')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            setIsLoading(true);
            setIsError(false);
            setIsRequestFinished(false);

            try {
                const response = await loginUser({
                    email: values.email,
                    password: values.password
                });
                const users = await getAllUsers(response.token);
                const isAdmin = users.find(u => u.email === values.email).isAdmin;

                resetForm({});
                
                setSuccessMessage('You\'ve logged in, welcome!');
                setTimeout(() => {
                    login(response.token, isAdmin);
                }, 4000);

            } catch (error) {
                setIsError(true);
                setSuccessMessage('Something went wrong.');
            } finally {
                setIsLoading(false);
                setIsRequestFinished(true);
            }
        }
    });

    return (
        <>
            <Title>Login</Title>
            <Section withoutTopPadding={true}>
                {isRequestFinished &&
                    <SuccessMessage isError={isError}>{successMessage}</SuccessMessage>
                }
                {!isLoading
                    ? <Form onSubmit={formik.handleSubmit}>
                        <FormRow>
                            <InputLabel htmlFor='email'>Email</InputLabel>
                            <InputText
                                id='email'
                                type='email'
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email
                                ? <InputError>{formik.errors.email}</InputError>
                                : null}
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <InputText
                                id='password'
                                type='password'
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password
                                ? <InputError>{formik.errors.password}</InputError>
                                : null}
                        </FormRow>
                        <Button type="submit">Login</Button>
                    </Form>
                    : <Spinner />
                }
            </Section>
        </>

    );
}