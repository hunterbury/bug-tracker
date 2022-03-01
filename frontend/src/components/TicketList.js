import React, { Fragment, useEffect, useState } from "react";
import EditTicket from "./EditTicket";

function TicketList() {
  const [tickets, setTickets] = useState([]);

  const getTickets = async () => {
    try {
      const response = await fetch("http://localhost:5000/tickets");
      const jsonData = await response.json();

      setTickets(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
      <Fragment>
        <div class="container-fluid px-4">
            <h1 class="mt-4">Developer Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Dashboard</li>
            </ol>
            <div class="row">
                <div class="col-xl-3 col-md-6">
                    <div class="card bg-primary text-white mb-4">
                        <div class="card-body">In Progress</div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <a class="small text-white stretched-link" href="#">View Details</a>
                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card bg-warning text-white mb-4">
                        <div class="card-body">Low Priority</div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <a class="small text-white stretched-link" href="#">View Details</a>
                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card bg-danger text-white mb-4">
                        <div class="card-body">High Priority</div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <a class="small text-white stretched-link" href="#">View Details</a>
                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-chart-area me-1"></i>
                            Area Chart Example
                        </div>
                        <div class="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-chart-bar me-1"></i>
                            Bar Chart Example
                        </div>
                        <div class="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                    </div>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-header">
                    <i class="fas fa-table me-1"></i>
                    Project Bugs
                </div>
                <div class="card-body">
                    <table id="datatablesSimple">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Priority</th>
                                <th>Date</th>
                                <th>Assigned to</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                            </tr>
                            <tr>
                                <td>Garrett Winters</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>63</td>
                                <td>2011/07/25</td>
                            </tr>
                            {tickets.map(ticket => (
                            <tr key={ticket.ticket_id}>
                            <td>{ticket.description}</td>
                            <td>
                                <EditTicket ticket={ticket} />
                            </td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </Fragment>
  )
};

export default TicketList;


  // return (
  //   <Fragment>
  //     {" "}
  //     <table class="table mt-5 text-center">
  //       <thead>
  //         <tr>
  //           <th>Description</th>
  //           <th>Edit</th>
  //           <th>Delete</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {/*<tr>
  //           <td>John</td>
  //           <td>Doe</td>
  //           <td>john@example.com</td>
  //         </tr> */}
  //         {todos.map(todo => (
  //           <tr key={todo.todo_id}>
  //             <td>{todo.description}</td>
  //             <td>
  //               <EditTodo todo={todo} />
  //             </td>
  //             <td>
  //               <button
  //                 className="btn btn-danger"
  //                 onClick={() => deleteTodo(todo.todo_id)}
  //               >
  //                 Delete
  //               </button>
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </Fragment>
