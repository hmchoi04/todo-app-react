import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const AddNewTodoForm = ({ onAddTodo }) => {
    const formik = useFormik({
        validateOnChange: false, 
        validateOnBlur: false,
        initialValues: {
            todo: '',
        },
        validationSchema: Yup
        .object()
        .shape({
            todo: Yup.string()
            .min(3, 'Text is too short.')
            .max(20, 'Text is too long.')
            .required('Text is required.')
        }
        ),
        onSubmit: (values, { resetForm }) => {
            onAddTodo(values.todo);
            resetForm();
        },
    })
    const errorKeys = Object.keys(formik.errors);
    const aFormikError = errorKeys.keys.length > 0 ? formik.errors[errorKeys[0]]: null;
    return (
        <form onSubmit={formik.handleSubmit}>
            <label>Todo</label>
            <input
                id='todo'
                name='todo'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.todo}
                autoComplete="off"
            />
            <button type="submit">Submit</button>
            {aFormikError && <span>{aFormikError}</span>}
        </form>
    )
};

export default React.memo(AddNewTodoForm)