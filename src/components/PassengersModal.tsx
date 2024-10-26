import { ReactNode } from "react";

type Props = { id: string; title: string; children: ReactNode };

const PassengersModal = (props: Props) => {
  return (
    <div className="modal fade modal-centered" id={props.id} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {props.title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default PassengersModal;
