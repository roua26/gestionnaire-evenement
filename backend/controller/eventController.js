const db = require('../config/db');

exports.getEvents = (req, res) => {
    const sql = "SELECT * FROM `ev-cor`";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching events:", err);
            return res.json({ massage: "error dans le serveur" })
        }
        return res.json(data);
    });
};

exports.createEvent = (req, res) => {
    const sql = "INSERT INTO `ev-cor` (`titre`, `description`, `date`, `temps`) VALUES (?)";
    const values = [
        req.body.titre,
        req.body.description,
        req.body.date,
        req.body.temps];
    db.query(sql, [values], (err, data) => {
       // if (err) {
          //  console.error("Error creating event:", err);
          // return res.json({ message: "Error creating event" });
      //  }
        return res.json(data);
    });
}; 
exports.updateEvent = (req, res) => {
    const sql = "UPDATE `ev-cor` SET `titre` = ?, `description` = ?, `date` = ?, `temps` = ? WHERE `id` = ?";
    const values = [
        req.body.titre,
        req.body.description,
        req.body.date,
        req.body.temps,
        req.params.id];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error("Error updating event:", err);
            return res.json({ message: "Error updating event" });
        }
        return res.json(data);
    });
};

exports.deleteEvent = (req, res) => {
    const sql = "DELETE FROM `ev-cor` WHERE `id` = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error("Error deleting event:", err);
            return res.json({ message: "Error deleting event" });
        }
        return res.json(data);
    });
};
exports.getRecord = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM `ev-cor` where id = ?";
    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error("Error recording event:", err);
            return res.json({ message: "Error recording event" });
        }
        return res.json(data);
    });
};