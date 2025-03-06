import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddBusinessPartner({ show, onHide, onSave, formData }) {
  const [formValues, setFormValues] = useState({
    Id: 0,
    CardCode: "",
    ClientId: "",
    ClientName: "",
    Address: "",
    City: "",
    Country: "",
    Telephone: "",
    ContactPerson: "",
  });

  useEffect(() => {
    if (formData) {
      setFormValues({
        Id: formData.id || 0,
        CardCode: formData.cardCode || "",
        ClientId: formData.clientId || "",
        ClientName: formData.clientName || "",
        Address: formData.street || "",
        City: formData.city || "",
        Country: formData.country || "",
        Telephone: formData.telephone || "",
        ContactPerson: formData.contactPerson || "",
      });
    }
  }, [formData]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <Modal
      show={show}
      size="xl"
      aria-labelledby="Add-Business-Partner"
      centered
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="Add-Business-Partner-Title">
          New Business Partner
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={(event) => onSave(event, formValues)}>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <input type="hidden" name="Id" value={formValues.Id} />

              <div className="col-md-4">
                <label className="form-label">Card Code</label>
                <input
                  type="text"
                  className="form-control"
                  name="CardCode"
                  value={formValues.CardCode}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Client Id</label>
                <input
                  type="text"
                  className="form-control"
                  name="ClientId"
                  value={formValues.ClientId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Client Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="ClientName"
                  value={formValues.ClientName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-8">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="Address"
                  value={formValues.Address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="City"
                  value={formValues.City}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  className="form-control"
                  name="Country"
                  value={formValues.Country}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Telephone</label>
                <input
                  type="text"
                  className="form-control"
                  name="Telephone"
                  value={formValues.Telephone}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Contact Person</label>
                <input
                  type="text"
                  className="form-control"
                  name="ContactPerson"
                  value={formValues.ContactPerson}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" className="btn btn-primary">
            Save
          </Button>
          <Button className="btn btn-danger" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
export default AddBusinessPartner;
