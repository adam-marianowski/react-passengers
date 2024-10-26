type Props = { passengers: Passenger[] };

const PassengersNotifications = (props: Props) => {
  const getCheckedInPassengers = () => {
    return props.passengers.filter(passenger => passenger.checkedIn).length;
  };

  const getCheckedInPassengersPercentage = () => {
    return (getCheckedInPassengers() / props.passengers.length) * 100;
  };

  const getBaggagePercentage = () => {
    const value = props.passengers.filter(
      passenger => passenger.baggage !== "none" && passenger.baggage !== undefined
    ).length;

    return (value / props.passengers.length) * 100;
  };

  return (
    <div className="w-25">
      <section className="p-3 shadow mb-3 text-center">
        <span className="mb-2 d-block">
          You have{" "}
          <span className="fw-bold">
            {getCheckedInPassengers()}/{props.passengers.length}
          </span>{" "}
          checked-in passengers on this flight.
        </span>

        <div className="mb-3">
          <small className="text-secondary">Checked-in passengers</small>
          <div className="progress" role="progressbar" aria-label="Basic example">
            <div
              className="progress-bar"
              style={{ width: `${getCheckedInPassengersPercentage()}%` }}
            ></div>
          </div>
        </div>
        <div>
          <small className="text-secondary">Registered baggage %</small>
          <div className="progress" role="progressbar" aria-label="Basic example">
            <div
              className="progress-bar"
              style={{ width: `${getBaggagePercentage()}%` }}
            ></div>
          </div>
        </div>
      </section>

      <div className="alert alert-primary" role="alert">
        <h5 className="alert-heading border-bottom border-secondary pb-2">
          New version is coming!{" "}
        </h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo eum alias
        necessitatibus illum labore, pariatur voluptatum hic ipsam velit, voluptate
        error laborum animi reprehenderit explicabo ipsum perferendis eius quisquam.
      </div>

      <div className="alert alert-warning" role="alert">
        <h5 className="alert-heading border-bottom border-secondary pb-2">
          Server maintenance
        </h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo eum alias
        necessitatibus illum labore, pariatur voluptatum hic ipsam velit, voluptate
        error laborum animi reprehenderit explicabo ipsum perferendis eius quisquam.
      </div>
    </div>
  );
};

export default PassengersNotifications;
