import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddBusinessPartner from "./AddBusinessPartner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

function BPList() {
  const [businessPartners, setBusinessPartners] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    populateBPData();
  }, []);
  return (
    <div>
      <AddBusinessPartner
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSave={handleOnSave}
      />
      <h1>Business Partner List</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-10"></div>

          <div className="col-md-2">
            <Button
              className="btn btn-primary"
              onClick={() => setModalShow(true)}
            >
              <FontAwesomeIcon icon={faPlus} /> Add New
            </Button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="table-responsive scroll">
              <Table
                className="table table-striped table-bordered table-hover"
                aria-labelledby="tableLabel"
              >
                <thead>
                  <tr>
                    <th>Sr. </th>
                    <th hidden>CardCode</th>
                    <th>Client Id</th>
                    <th>Client Name</th>
                    <th hidden>City</th>
                    <th>Country Name</th>
                    <th>Street</th>
                    <th>Telephone</th>
                    <th>Contact Person</th>
                    <th width="10%">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {businessPartners.map((businessPartner) => (
                    <tr key={businessPartner.id}>
                      <td>{businessPartner.id}</td>
                      <td hidden>{businessPartner.cardCode}</td>
                      <td>{businessPartner.clientId}</td>
                      <td>{businessPartner.clientName}</td>
                      <td hidden>{businessPartner.city}</td>
                      <td>{businessPartner.countryName}</td>
                      <td>{businessPartner.street}</td>
                      <td>{businessPartner.telephone}</td>
                      <td>{businessPartner.contactPerson}</td>
                      <td>
                        <FontAwesomeIcon
                          className="btn btn-primary"
                          icon={faEdit}
                        />{" "}
                        <FontAwesomeIcon
                          className="btn btn-danger"
                          icon={faTrash}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  async function populateBPData() {
    const response = await fetch(
      "https://localhost:7161/api/Home/GetBusinessPartners"
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setBusinessPartners(data);
    }
  }

  async function handleOnSave(event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(event.target);
    const modal = {
      Id: formData.get("Id"),
      cardCode: formData.get("CardCode"),
      clientId: formData.get("ClientId"),
      clientName: formData.get("ClientName"),
      address: formData.get("Address"),
      city: formData.get("City"),
      country: formData.get("Country"),
      telephone: formData.get("Telephone"),
      contactPerson: formData.get("ContactPerson"),
    };
    console.log("modal", modal);
    try {
      const res = await axios.post(
        "https://localhost:7161/api/Home/SaveBusinessPartner",
        modal,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        console.log("res", res);
        populateBPData();
        setModalShow(false); // Close modal
      } else {
        console.log("res", res);
      }

      //   const response = await fetch(
      //     "https://localhost:7161/api/Home/SaveBusinessPartner",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(modal),
      //     }
      //   );

      //   if (response.ok) {
      //     const savedPartner = await response.json();
      //     setBusinessPartners([...businessPartners, savedPartner]); // Update list
      //     setModalShow(false); // Close modal
      //   } else {
      //     console.error("Failed to save business partner");
      //   }
    } catch (error) {
      console.error("Error: ", error);
    }
  }
}

export default BPList;
