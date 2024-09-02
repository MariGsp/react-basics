/* eslint-disable no-undef */
/* eslint-disable no-console */
import { v4 as uuid } from 'uuid';

const ButtonUUID = () => {
  const generateUUID = () => {
    const newUuid = uuid();
    console.log(newUuid);
  };

  return (
    <>
      <button type="button" onClick={generateUUID}>Generate UUID</button>
      <p>UUID: </p>
    </>

  );
};

export default ButtonUUID;
