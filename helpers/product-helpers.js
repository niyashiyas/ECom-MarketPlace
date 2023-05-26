// var db = require("../config/connection");

module.exports = {
  addProduct: (product, callback) => {
    console.log("product details in product helpers: ");
    console.log(product);
    // db.get()
    //   .collection("product")
    //   .insertOne(product)
    //   .then((data) => {
    //     callback(data);
    //   });
  },
};
// var db = require("../config/connection");

// module.exports = {
//   addProduct: (product, callback) => {
//     console.log("product details in product helpers: ");
//     console.log(product);
//     if (!db) {
//       const error = new Error("Database connection not established");
//       return callback(error);
//     }

//     db.get()
//       .then((database) => {
//         if (!database) {
//           const error = new Error("Database object not available");
//           throw error;
//         }
//         database
//           .collection("product")
//           .insertOne(product)
//           .then(() => {
//             callback(null, true);
//           })
//           .catch((error) => {
//             callback(error);
//           });
//       })
//       .catch((error) => {
//         callback(error);
//       });
//   },
// };
