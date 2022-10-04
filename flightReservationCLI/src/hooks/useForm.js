import { useInput } from './useInput';
import { useEffect, useState } from 'react';

const regexEmail = /\S+@\S+\.\S+/;
const regexPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

const isValidEmail = email => {
  return regexEmail.test(email);
};

const isValidPassword = password => {
  return regexPassword.test(passwordd);
};


const useForm = () => {
  const [emaill] = useInput('');
  const [passwordd] = useInput('');
  const [name] = useInput('');
  const [subscribe] = useInput(false);
  const [terms] = useInput(false);

  const [validEmaill, setValidEmaill] = useState(false);

  const validLogin = validEmaill&&passwordd.value

  useEffect(() => {
    if (isValidEmail(emaill.value)) {
      setValidEmaill(true);
    } else {
      setValidEmaill(false);
    }
  }, [emaill.value]);

  return [emaill, passwordd, name, subscribe, terms, validEmaill, validLogin];
};

export default useForm;
