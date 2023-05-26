var express = require("express");
var router = express.Router();
var productHelpers = require("../helpers/product-helpers");

/* GET users listing. */
router.get("/", function (req, res, next) {
  let products = [
    {
      name: "Iphone",
      category: "Mobile",
      description: "Its the latest Apple product",
      price: 10000,
      image:
        "https://media.istockphoto.com/id/1371695315/photo/iphone-13-pro-sierra-blue.jpg?s=612x612&w=0&k=20&c=-0Mr9DdIRHFoLUozdltlHdkum0ChCNTGfLhxc-3oHmI=",
    },
    {
      name: "RealMe",
      category: "Mobile",
      description: "Its the a great product",
      price: 6000,
      image:
        "https://static.toiimg.com/thumb/msid-88052057,width-400,resizemode-4/88052057.jpg",
    },
    {
      name: "Moto",
      category: "Mobile",
      description: "Its the latest Moto product",
      price: 9000,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/Motorola/Moto_G100/4_zu_3_moto_g100.jpg",
    },
    {
      name: "Samsung",
      category: "Mobile",
      description: "Its the latest Samsung product",
      price: 8000,
      image:
        "https://www.reliancedigital.in/medias/Samsung-A14-5G-Mobile-Phone-493664920-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTUwOXxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaDEzLzk5NTE1NjExMjE4MjIuanBnfDcyOTYyNGQzYzJlNzRhY2QyMDc0ODQ0MDFjNGZjNmU2YjEzNjA1NTcyZjA4OWJkNTViODE1MWMzN2U3MmU0M2Q",
    },
  ];
  res.render("admin/view-products", {admin: true, products});
});

router.get("/add-product", function (req, res) {
  res.render("admin/add-product");
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  console.log(req.files.Image);
  // productHelpers.addProduct(req.body, (result) => {
  productHelpers.addProduct(req.body, (res) => {
    console.log("reached here");
    res.render("admin/add-product");
  });
});

module.exports = router;
