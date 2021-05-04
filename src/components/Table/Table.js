import React, { useState } from 'react';
import Button from '../Button/Button';
import { Modal } from '../Modal/Modal';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Form, FormRow, InputLabel, InputText, InputError, Select, TextArea } from '../../lib/style/generalStyles';
import { Message, AddEventButton, TableWrapper, BtnDeleteEvent } from './TableStyle';
import { MdDelete } from 'react-icons/md';

export const Table = () => {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            category: '',
            date: '',
            timeFrom: '',
            timeTo: '',
            capacity: '',
            firm: ''
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Title is required'),
            description: Yup.string()
                .required('Description is required'),
            category: Yup.string()
                .ensure()
                .required('Category is required'),
            date: Yup.string()
                .required('Date is required'),
            timeFrom: Yup.string()
                .required('Time from is required'),
            timeTo: Yup.string()
                .required('Time to is required'),
            capacity: Yup.number().integer().positive()
                .required('Capacity  is required'),
            firm: Yup.string()
                .ensure()
                .required('Firm is required')
        }),
        onSubmit: values => {
            values.id = Math.round(Math.random() * 100000000);
            setEvents(events.concat(values));
            setShowModal(false);
            formik.resetForm();
        }
    });

    return (
        <>
            <AddEventButton onClick={() => setShowModal(true)}>Add event</AddEventButton>
            {events.length > 0
                ? <TableWrapper>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Naslov</th>
                            <th>Datum</th>
                            <th>Vrijeme od</th>
                            <th>Vrijeme do</th>
                            <th>Kapacitet</th>
                            <th>Firma</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(event =>
                            <tr key={event.id}>
                                <td>1</td>
                                <td>{event.title}</td>
                                <td>{event.date}</td>
                                <td>{event.timeFrom}</td>
                                <td>{event.timeTo}</td>
                                <td>{event.capacity}</td>
                                <td>{event.firm}</td>
                                <td><BtnDeleteEvent onClick={() => setEvents(events.filter(e => e.id !== event.id))}>
                                        <MdDelete />
                                    </BtnDeleteEvent>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </TableWrapper>
                : <Message>There are no events yet!</Message>}
            {showModal && <Modal hideModal={e => { setShowModal(false); formik.resetForm() }}>
                <Form onSubmit={formik.handleSubmit}>
                    <FormRow gridSpan={true}>
                        <InputLabel htmlFor='title'>Title</InputLabel>
                        <InputText
                            id='title'
                            type='text'
                            {...formik.getFieldProps('title')}
                        />
                        {formik.touched.title && formik.errors.title
                            ? <InputError>{formik.errors.title}</InputError>
                            : null}
                    </FormRow>
                    <FormRow gridSpan={true}>
                        <InputLabel htmlFor='description'>Description</InputLabel>
                        <TextArea
                            id='description'
                            type='textarea'
                            {...formik.getFieldProps('description')}
                        />
                        {formik.touched.description && formik.errors.description
                            ? <InputError>{formik.errors.description}</InputError>
                            : null}
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='category'>Category</InputLabel>
                        <Select
                            id='category'
                            type='select'
                            {...formik.getFieldProps('category')}
                        >
                            <option value=''>Select ...</option>
                            <option value='marketing'>#marketing</option>
                            <option value='design'>#design</option>
                            <option value='frontend'>#frontend</option>
                            <option value='backend'>#backend</option>
                        </Select>
                        {formik.touched.category && formik.errors.category
                            ? <InputError>{formik.errors.category}</InputError>
                            : null}
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='date'>Date</InputLabel>
                        <InputText
                            id='date'
                            type='text'
                            {...formik.getFieldProps('date')}
                        />
                        {formik.touched.date && formik.errors.date
                            ? <InputError>{formik.errors.date}</InputError>
                            : null}
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='timeFrom'>From</InputLabel>
                        <InputText
                            id='timeFrom'
                            type='text'
                            {...formik.getFieldProps('timeFrom')}
                        />
                        {formik.touched.timeFrom && formik.errors.timeFrom
                            ? <InputError>{formik.errors.timeFrom}</InputError>
                            : null}
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='timeTo'>To</InputLabel>
                        <InputText
                            id='timeTo'
                            type='text'
                            {...formik.getFieldProps('timeTo')}
                        />
                        {formik.touched.timeTo && formik.errors.timeTo
                            ? <InputError>{formik.errors.timeTo}</InputError>
                            : null}
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='capacity'>Capacity</InputLabel>
                        <InputText
                            id='capacity'
                            type='text'
                            {...formik.getFieldProps('capacity')}
                        />
                        {formik.touched.capacity && formik.errors.capacity
                            ? <InputError>{formik.errors.capacity}</InputError>
                            : null}
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='firm'>Firm</InputLabel>
                        <Select
                            id='firm'
                            type='select'
                            {...formik.getFieldProps('firm')}
                        >
                            <option value=''>Select ...</option>
                            <option value='Speck'>Speck</option>
                            <option value='Five'>Five</option>
                            <option value='Bornfight'>Bornfight</option>
                            <option value='Agency 04'>Agency 04</option>
                        </Select>
                        {formik.touched.firm && formik.errors.firm
                            ? <InputError>{formik.errors.firm}</InputError>
                            : null}
                    </FormRow>
                    <Button gridSpan={true} type="submit">Add Event</Button>
                </Form>
            </Modal>}
        </>
    );
}