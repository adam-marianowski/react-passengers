import PassengersNotifications from "./PassengersNotifications";
import PassengersTable from "./PassengersTable";
import usePassengers from "hooks/usePassengers";
import PassengersModal from "./PassengersModal";
import PassengersForm from "./PassengersForm";

const Passengers = () => {
  const service = usePassengers();

  return (
    <div>
      <section className="d-flex align-items-center justify-content-between mb-4">
        <h1>Passengers</h1>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#passengersCreator"
        >
          <i className="bi bi-person-fill-add me-3"></i>
          Add Passenger
        </button>
      </section>

      <section className="d-flex gap-5" style={{ maxHeight: "90vh" }}>
        <PassengersTable
          passengers={service.passengers}
          onRemovePassenger={service.removePassenger}
          onEditPassenger={service.getPassenger}
        />
        <PassengersNotifications passengers={service.passengers} />
      </section>

      <section>
        <PassengersModal title="Passengers Editor Form" id="passengersEditor">
          <PassengersForm
            onSubmit={service.editPassenger}
            passenger={service.selectedPassenger}
          />
        </PassengersModal>

        <PassengersModal title="Passengers Creator Form" id="passengersCreator">
          <PassengersForm onSubmit={service.createPassenger} />
        </PassengersModal>
      </section>
    </div>
  );
};

export default Passengers;
