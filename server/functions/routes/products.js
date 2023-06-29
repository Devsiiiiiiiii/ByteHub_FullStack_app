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


//get all the products

router.get("/all", async (req, res) => {
(async () => {
    try {
       let query = db.collection("products");
       let respone = []
       await query.get().then(querysnap => {
        let docs = querysnap.docs;
        docs.map(doc => {
            respone.push({...doc.data()})
        })
        return respone;
       }) 
       return res.status(200).send({ success: true, data: respone});

    }   catch(err){
    return res.send({success: false, msg: `Error : ${err}`})
    }
}) ();
})

//delete a product

router.delete("/delete/:productId", async(req,res) => {
    const productId = req.params.productId;
    try{
        await db.collection("products").doc(`/${productId}/`).delete().then(result => {
            return res.status(200).send({ success: true, data: respone});

        })
    }catch(err) {
        return res.send({success: false, msg: `Error : ${err}`})
    }
})
module.exports = router;