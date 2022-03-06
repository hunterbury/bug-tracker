import React, { Fragment, useState} from "react";

function CreateTicket() {
  const [ticket, setTicket] = useState({
    name: "",
    description: "",
    project: "",
    assigned_by: "",
    assigned_to: "",
    type: "",
    priority: "low",
    status: ""
  });

  const [tickets, setTickets] = useState([]);

  const onSubmitForm = async (e) => {
      e.preventDefault();  

      try {
          const { name, description, project, assigned_by, assigned_to, type, priority, status } = ticket;
          const response = await fetch("http://localhost:5000/tickets", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ticket)
      });

      window.location = "/";
      } catch (error) {
          console.error(error.message)
      }
  } 
  return (
      <Fragment>
        <h1 className="text-center mt-5">Create Ticket</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
          <input
            type="text"
            className="form-control"
            value={ticket.description}
            onChange={(e) =>
              setTicket((ticket) => ({ ...ticket, description: e.target.value }))
            }
          />
          <button className="btn btn-success">Create Ticket</button>
        </form>
      </Fragment>
  )
};

export default CreateTicket;

// export default function App() {
//   const [issue, setIssue] = useState({
//     description: "",
//     priority: "low",
//     assignee: ""
//   });
//   const [issues, setIssues] = useState([]);

//   const addIssue = (e) => {
//     e.preventDefault();
//     const { description, priority, assignee } = issue;
//     const formValid = description && priority && assignee;
//     if (!formValid) {
//       return;
//     }
//     setIssues((issues) => [
//       ...issues,
//       { id: uuidv4(), description, priority, assignee }
//     ]);
//   };

//   const deleteIssue = (index) => {
//     setIssues((issues) => issues.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="App">
//       <form onSubmit={addIssue}>
//         <div>
//           <label>description</label>
//           <input
//             value={issue.description}
//             onChange={(e) =>
//               setIssue((issue) => ({ ...issue, description: e.target.value }))
//             }
//           />
//         </div>

//         <div>
//           <label>priority</label>
//           <select
//             value={issue.priority}
//             onChange={(e) =>
//               setIssue((issue) => ({ ...issue, priority: e.target.value }))
//             }
//           >
//             <option>low</option>
//             <option>medium</option>
//             <option>high</option>
//           </select>
//         </div>

//         <div>
//           <label>assignee</label>
//           <input
//             value={issue.assignee}
//             onChange={(e) =>
//               setIssue((issue) => ({ ...issue, assignee: e.target.value }))
//             }
//           />
//         </div>
//         <button type="submit">add issue</button>
//       </form>
//       {issues.map((issue, index) => {
//         return (
//           <div key={issue.id}>
//             <p>description: {issue.description}</p>
//             <p>priority: {issue.priority}</p>
//             <p>assignee: {issue.assignee}</p>
//             <button type="button" onClick={() => deleteIssue(index)}>
//               delete issue
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }