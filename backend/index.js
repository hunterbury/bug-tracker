const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes
// project/tickets/id
// project/tickets/priority
// project/tickets/status
// user/tickets/id
// user/tickets/status
// user/tickets/status


app.post("/tickets", async(req, res) => {
    try {
        const { description } = req.body;
        const newTicket = await pool.query(
            "INSERT INTO ticket (description) VALUES($1) RETURNING *", 
            [description]
        );

        res.json(newTicket.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

app.get("/tickets", async(req, res) => {
    try {
        const allTickets = await pool.query("SELECT * FROM ticket");
        res.json(allTickets.rows);
    } catch (error) {
        console.error(error.message);
    }
});

app.get("/tickets/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const ticket = await pool.query("SELECT * FROM todo WHERE ticket_id = $1", {id});

        res.json(ticket.rows[0]);
    } catch (error) {
        console.error(error.message)    
    }
});

app.put("/tickets/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTicket = await pool.query("UPDATE ticket SET description = $1 WHERE ticket_id = $2", [description, id]);

        res.json("Ticket was updated");
    } catch (error) {
        console.error(error.message);
    }
});

app.delete("/tickets/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteTicket = await pool.query("DELETE FROM ticket WHERE ticket_id = $1", [id]);

        res.json("Ticket was deleted");
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});