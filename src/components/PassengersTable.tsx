type Props = {
  passengers: Passenger[];
  onRemovePassenger: (id: string) => void;
  onEditPassenger: (id: string) => void;
};

const PassengersTable = (props: Props) => {
  return (
    <div className="w-75 shadow p-3" style={{ maxHeight: "80vh" }}>
      <table className=" table table-sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th className="text-center">Checked In</th>
            <th className="text-center">Check-In Date</th>
            <th>Baggage</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.passengers.map(passenger => (
            <tr key={passenger.id}>
              <td>{passenger.id}</td>
              <td style={{ width: "14vw" }}>{passenger.name}</td>
              <td className="text-center">
                <i
                  className={`bi bi-${
                    passenger.checkedIn
                      ? "check-circle-fill text-success"
                      : "x-circle-fill text-danger"
                  }`}
                ></i>
              </td>
              <td className="text-center">{passenger.checkInDate}</td>
              <td>{passenger.baggage}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => props.onEditPassenger(passenger.id)}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#passengersEditor"
                  aria-label="edit"
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  aria-label="remove"
                  className="btn btn-danger ms-2"
                  onClick={() => props.onRemovePassenger(passenger.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PassengersTable;
