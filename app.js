const express = require("express");
const mysql = require("mysql"); //kết nối với thư viện mysql.
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //hỗ trợ encoded JSON.
app.use(
  bodyParser.urlencoded({
    //hỗ trợ encoded URL.
    extended: true,
  })
);

// kết nối tới MySQL và gán với biến connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "order_shopshoes",
});

//tiến hành thực hiện một kết nối.
connection.connect(function (err) {
  err ? console.log("huhu", err) : console.log(connection);
});

app.get("/api/sanpham", (req, res) => {
  var sql = "SELECT * FROM sanpham "; //chọn dữ liệu table sp gán vào biến sql.
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ sanpham: results }); //dữ liệu sẽ được gửi dưới dạng JSON.
  });
  //   res.json({ message: "I am a message from Server!" });
}); //là một API đơn giản gọi nội dung

app.post("/api/insert", function (req, res) {
  var sql =
    "INSERT " +
    "INTO sanpham(id,tensp,gia,chitiet,id_dm) " +
    "VALUES('" +
    req.body.id +
    "','" +
    req.body.tensp +
    "','" +
    req.body.gia +
    "','" +
    req.body.chitiet +
    "','" +
    req.body.id_dm +
    "')";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ sanpham: results });
  });
});

// app.post("/api/edit", (req, res) => {
//   var sql =
//     "UPDATE sanpham SET " +
//     "tensp='" +
//     req.body.tensp +
//     "'," +
//     "gia='" +
//     req.body.gia +
//     "'," +
//     "chitiet='" +
//     req.body.chitiet +
//     "'," +
//     "WHERE id='" +
//     req.body.id +
//     "',";
//   connection.query(sql, function (err, results) {
//     if (err) throw err;
//     res.json({ sanpham: results });
//   });
// });
app.listen(4000, () => console.log("App listening on port 4000")); // quy định port cho ứng dụng
