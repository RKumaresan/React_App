import React from 'react';
import Form from '../../../common/Form';

const fields = [
    { name: 'name', label: 'Full Name' },
    { name: 'email', label: 'Email address' },
    { name: 'pwd', label: 'Password', type: 'password' },
    { name: 'confirmpwd', label: 'Confirm Password', type: 'password' },
];

const validationRules = {
    name: 'Please enter name',
    email: 'Please enter email..',
    pwd: 'Please enter password..',
    confirmpwd: 'Please enter confirm password..',
};

export default function RegisterPage() {
    const handleSubmit = (values, errors) => {
        let userData = JSON.parse(localStorage.getItem('users')) ?? [];
        userData.push(values);

        if (Object.keys(errors).length === 0) {
            localStorage.setItem('users', JSON.stringify(userData));
        }
    };

    return (
        <div className="container min-vh-100 d-flex justify-content-center align-items-center">
            <div className="card col-12 col-md-6 offset-md-3 shadow p-3 mb-5 bg-white rounded">
                <div className="card-body">
                    <h2 className="text-center mb-3">Register</h2>
                    <Form
                        fields={fields}
                        validationRules={validationRules}
                        onSubmit={handleSubmit}
                        existingUser={JSON.parse(localStorage.getItem('users')) ?? []}
                    />
                </div>
            </div>
        </div>
    );
}
