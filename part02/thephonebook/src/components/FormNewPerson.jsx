const FormNewPerson = ({
  onSubmit,
  valueName,
  onChangeName,
  valueNumber,
  onChangeNumber,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          value={valueName}
          onChange={onChangeName}
          placeholder="Name"
          type="text"
        />
      </div>
      <div>
        <input
          value={valueNumber}
          onChange={onChangeNumber}
          placeholder="Number"
          type="tel"
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default FormNewPerson;
