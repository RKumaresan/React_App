import React, { useState } from 'react';

import InputField from './InputField';

const Form = ({ fields, validationRules, onSubmit, login, loginError, setLoginError = () => { } }) => {
    const [inputValue, setInputValue] = useState({});
    const [errorMsg, setErrorMsg] = useState({});

    const handleChange = (e, field) => {
        const { value } = e.target;
        setInputValue((prevInputValue) => ({
            ...prevInputValue,
            [field]: value,
        }));
        setErrorMsg((prevErrorMsg) => ({
            ...prevErrorMsg,
            [field]: '',
        }));
        setLoginError((prev) => ({ ...prev, [field]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};

        Object.keys(validationRules).forEach((key) => {
            if (!inputValue[key]) {
                errors[key] = validationRules[key];
            }
        });

        if (inputValue['pwd'] !== inputValue['confirmpwd'] && inputValue['pwd'] && inputValue['confirmpwd']) {
            errors['wrongpwd'] = 'Password and confirm password must be the same..';
        }

        let userData = JSON.parse(localStorage.getItem('users')) ?? [];

        if (userData.find((item) => item.email === inputValue.email) && !login) {
            errors.email = 'Email is already registered';
        }

        setErrorMsg(errors);
        if (Object.keys(errors).length === 0) {
            onSubmit(inputValue, errors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map(({ name, label, type }) => (
                <InputField
                    key={name}
                    field={name}
                    label={label}
                    type={type}
                    onChange={handleChange}
                    error={errorMsg[name] || loginError?.[name]}
                    value={inputValue[name]}
                />
            ))}
            {errorMsg['wrongpwd'] && (
                <div className="row mb-2">
                    <div className="col-md-6 offset-md-3 p-1">
                        <p style={{ color: 'red' }}>{errorMsg['wrongpwd']}</p>
                    </div>
                </div>
            )}
            <div className="row mb-2">
                <div className="col-md-6 offset-md-3 pt-0 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary btn-block">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form;
