var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let products = [
    {
      name: "Iphone",
      category: "Mobile",
      description: "Its the latest Apple product",
      image:
        "https://media.istockphoto.com/id/1371695315/photo/iphone-13-pro-sierra-blue.jpg?s=612x612&w=0&k=20&c=-0Mr9DdIRHFoLUozdltlHdkum0ChCNTGfLhxc-3oHmI=",
    },
    {
      name: "ReadMe",
      category: "Mobile",
      description: "Its the a great product",
      image:
        "https://static.toiimg.com/thumb/msid-88052057,width-400,resizemode-4/88052057.jpg",
    },
    {
      name: "Moto",
      category: "Mobile",
      description: "Its the latest Moto product",
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/Motorola/Moto_G100/4_zu_3_moto_g100.jpg",
    },
    {
      name: "Samsung",
      category: "Mobile",
      description: "Its the latest Samsung product",
      image:
        "https://www.reliancedigital.in/medias/Samsung-A14-5G-Mobile-Phone-493664920-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTUwOXxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaDEzLzk5NTE1NjExMjE4MjIuanBnfDcyOTYyNGQzYzJlNzRhY2QyMDc0ODQ0MDFjNGZjNmU2YjEzNjA1NTcyZjA4OWJkNTViODE1MWMzN2U3MmU0M2Q",
    },
  ];
  res.render("index", {products, admin: false});
});

module.exports = router;
