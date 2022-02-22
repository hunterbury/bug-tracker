import React, { Fragment, useState } from "react";

const EditTicket = ({ ticket }) => {
  const [description, setDescription] = useState(ticket.description);
  const [tickets, setTickets] = useState([]);

  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/tickets/${ticket.ticket_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTicket = async id => {
    try {
      const deleteTicket = await fetch(`http://localhost:5000/tickets/${id}`, {
        method: "DELETE"
      });

      setTickets(tickets.filter(ticket => ticket.ticket_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <Fragment>
    <button
      type="button"
      class="btn btn-warning"
      data-toggle="modal"
      data-target={`#id${ticket.ticket_id}`}
    >
      Edit
    </button>

    {/* 
      id = id10
    */}
    <div
      class="modal"
      id={`id${ticket.ticket_id}`}
      onClick={() => setDescription(ticket.description)}
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Edit Todo</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              onClick={() => setDescription(ticket.description)}
            >
              &times;
            </button>
          </div>

          <div class="modal-body">
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-warning"
              data-dismiss="modal"
              onClick={e => updateDescription(e)}
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
              onClick={() => setDescription(ticket.description)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  );
};

export default EditTicket