/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

const RegisterForm = () => {
  const [form, setForm] = useState({
    firstName: 'Mari',
    lastName: 'Gas',
    email: 'mari@email.com',
  });

  return (
    <div>
      <label className="label">
        First name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <br />
      <label className="label">
        Last name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <br />
      <label className="label">
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {form.firstName}
        {form.lastName}
        (
        {form.email}
        )
      </p>
    </div>
  );
};

export default RegisterForm;
