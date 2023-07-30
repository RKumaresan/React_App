import React from 'react';

const InputField = ({ field, label, type = 'text', onChange, error, value }) => (
    <div className="row mb-2">
        <div className="col-12 col-sm-6 offset-sm-3 p-1">
            <div className="form-group">
                <label htmlFor={field} className="form-label">{label}:</label>
                <input
                    type={type}
                    className="form-control form-control-lg"
                    id={field}
                    onChange={(e) => onChange(e, field)}
                    value={value}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    </div>
);

export default InputField;
