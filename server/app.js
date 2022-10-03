const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./models/Unit");
require("../../FlashcardMaster_Server/models/User");
app.use(bodyParser.json());

const Unit = mongoose.model("unit");
const User = mongoose.model("user");

const mongoUri =
  "mongodb+srv://nhaphuong:!2345@cluster0.i3iqx2l.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Kiểm tra kết nối

mongoose.connection.on("connected", () => {
  console.log("Yehhh, congratulation! Connected with Mongo");
});
mongoose.connection.on("error", (err) => {
  console.log("Has an error when connect with Mongo", err);
});



//unit test
app.get("/", (req, res) => {
  Unit.find({})
    .then((data) => {
      console.log("got all");
      res.send(data);
    })
    .catch((err) => {
      console.log("err", err);
    });
});

app.post("/send", (req, res) => {
  const unit = new Unit({
    unit_name: req.body.unit_name,
    username: req.body.username,
  });
  unit
    .save()
    .then((data) => {
      res.send("success");
      console.log(data);
    })
    .catch((err) => {
      console.log("err", err);
    });
});

app.post("/delete", (req, res) => {
  Unit.findByIdAndRemove(req.body.id)
    .then((data) => {
      res.send("deleted");
      console.log(data);
    })
    .catch((err) => {
      console.log("err", err);
    });
});

app.post("/update", (req, res) => {
  Unit.findByIdAndUpdate(req.body.id, {
    unit_name: req.body.unit_name,
    username: req.body.username,
  })
    .then((data) => {
      res.send("updated");
      console.log(data);
    })
    .catch((err) => {
      console.log("err", err);
    });
});

app.listen(3000, () => {
  console.log("server is running");
});
