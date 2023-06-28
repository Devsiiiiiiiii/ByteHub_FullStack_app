const router = require('express').Router();
const admin = require('firebase-admin');
const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true})

router.post("/create", async(req,res) =>{
    try{
        const id=Date.now();
        const data = {
            productId: id,
            product_name: req.body.product_name,
            product_category: req.body.product_category,
            product_price: req.body.product_price,
            imageURL: req.body.imageURL,
          };

          const respone = await db.collection("products").doc(`/${id}/`).set(data);
          console.log(respone);
          return res.status(200).send({ success: true, data: respone});


    } catch (err) {
        return res.status(200).send({ success: false, msg:`Error: ${err}`});

    }
})



module.exports = router;