import { FormEvent, useEffect, useState } from "react";

type Props = {
  passenger?: Passenger;
  onSubmit: (passenger: Passenger) => void;
};

const PassengersForm = (props: Props) => {
  const [passenger, setPassenger] = useState({} as Passenger);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(passenger);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value =
      e.target instanceof HTMLInputElement && e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;
    setPassenger(prevState => ({ ...prevState, [e.target.name]: value }));
  };

  useEffect(() => {
    if (props.passenger) setPassenger(props.passenger);
  }, [props.passenger]);

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3">
        <label htmlFor="id" className="form-label">
          ID
        </label>
        <input
          type="text"
          placeholder="please provide passenger id"
          id="id"
          className="form-control"
          name="id"
          value={passenger.id || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="e.g. John Doe"
          className="form-control"
          name="name"
          value={passenger.name || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          id="checkedIn"
          className="form-check-input"
          name="checkedIn"
          checked={passenger.checkedIn || false}
          onChange={handleChange}
        />
        <label htmlFor="checkedIn" className="form-check-label">
          Checked In
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="checkInDate" className="form-label">
          Check-In Date
        </label>
        <input
          type="date"
          id="checkInDate"
          className="form-control"
          name="checkInDate"
          value={passenger.checkInDate || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="baggage" className="form-label">
          Baggage
        </label>
        <select
          id="baggage"
          className="form-select"
          name="baggage"
          value={passenger.baggage || ""}
          onChange={handleChange}
        >
          <option value="hand-only">Hand Only</option>
          <option value="hold-only">Hold Only</option>
          <option value="hand-hold">Hand and Hold</option>
          <option value="none">None</option>
        </select>
      </div>

      {/* <div className="modal-footer"> */}
      <button type="submit" className="mt-4 btn btn-success w-100">
        Submit
      </button>
      {/* </div> */}
    </form>
  );
};

export default PassengersForm;
