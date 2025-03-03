import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddBusinessPartner(props) {
  return (
    <Modal {...props} size="xl" aria-labelledby="Add-Business-Partner" centered>
      <Modal.Header closeButton>
        <Modal.Title id="Add-Business-Partner-Title">
          New Business partner
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={(event) => props.onSave(event)}>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <input type="number" hidden name="Id" value={0} />
              <div className="col-md-4">
                <label className="form-label">Card Code</label>
                <input type="text" className="form-control" name="CardCode" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Client Id</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  name="ClientId"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Client Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  name="ClientName"
                />
              </div>
              <div className="col-md-8">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  name="Street"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">City</label>
                <input type="text" className="form-control" name="City" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  name="CountryName"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Telephone</label>
                <input type="text" className="form-control" name="Telephone" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Contact Person</label>
                <input
                  type="text"
                  className="form-control"
                  name="ContactPerson"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" className="btn btn-primary">
            Save
          </Button>
          <Button className="btn btn-danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
export default AddBusinessPartner;
