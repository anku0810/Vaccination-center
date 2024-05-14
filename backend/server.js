import express from "express";
import mysql2 from "mysql2";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());


const db = mysql2.createConnection({
  host: "localhost",
  user:"root",
  password: "1417@anku",
  database: "covid_db",
});


app.get("/", (req, res) => {
  res.json("hello");
});


app.get("/Centering", (req, res) => {
  const q = "SELECT center_name, Address, slots, DATE_FORMAT(Idate,'%d-%m-%Y') as Idate, zone from centers"; //date format ko check kar lenaa 

  //DATE_FORMAT(Idate,'%d-%m-%Y') 

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});


app.post("/Centering", (req, res) => {
  console.log("bookpage");
  const q = "INSERT INTO centers(center_name, Address, slots, Idate, zone) VALUES (?,?,?,?,?)";


  const values = [
    req.body.center_name,
    req.body.Address,
    req.body.slots,
    req.body.Idate,
    req.body.zone,
  ];


  db.query(q, values, (err, data) => {
    if (err) {
      return res.send(err);
    }
    else{
    // return res.json(data);
    console.log(res.json(data));
    }
  });
});


app.delete("/Centering/:id", (req, res) => {
  const CenterId = req.params.id;
  const q = " DELETE FROM centers WHERE id = ? ";


  db.query(q, [CenterId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


app.put("/Centering/:id", (req, res) => {
  const CenterId = req.params.id;
  const q = "UPDATE centers SET center_name = ?,  Address = ?, slots = ?,  Idate = ?, zone = ? WHERE id = ?";


  const values = [
    req.body.center_name,
    req.body.Address,
    req.body.slots,
    req.body.Idate,
    req.body.zone,
  ];


  db.query(q, [...values,CenterId], (err, data) => {
    if (err) return res.send(err);
    //return res.json(data);
    console.log(data);
  });
});


app.listen(8081, () => {
  console.log("Connected to Database");
});