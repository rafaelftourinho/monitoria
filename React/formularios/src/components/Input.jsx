import { useState } from 'react';
import { formFields } from '../helpers/formFields'

const Input = () => {
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
  return {
    ...acc,
    [field.id]: '',
  }
}, {}));
const [response, setResponse] = useState(null);

function handleChange({ target }) {
  const { id, value } = target;
  setForm({ ...form, [id]: value });
}

function handleSubmit(event) {
  event.preventDefault();
  fetch('https://ranekapi.origamid.dev/json/api/usuario', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(form),
  }).then((response) => {
    setResponse(response);
  })
}

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <div>
            <label
            htmlFor={id}
            style={{ fontWeight: '800' }}
            >
              {label}
            </label>
          </div>
            <input
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
              style={{ padding: '8px', marginBottom: '20px'}}
            />
        </div>
      ))}
      <button style={{ padding: '15px 20px', background: 'blue'}}>Enviar</button>
      {response && response.ok && <p>Formulário enviado</p>}
      {response && response.status === 403 && <p>Forbidden</p>}
    </form>
  )
}

export default Input
