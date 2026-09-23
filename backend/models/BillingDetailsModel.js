import mongoose from 'mongoose'

const Billing_Detail_Schema = new mongoose.Schema({
    user_id:{type:String, required:true},
    first:{type:String, required:true},
    last:{type:String, required:true},
    street:{type:String, required:true},
    city:{type:String, required:true},
    state:{type:String, required:true},
    zipcode:{type:String, required:true},
    country:{type:String, required:true},
    phone:{type:String, required:true}
})

const Billing_Detail_Model = mongoose.models.BillingDetails || mongoose.model('BillingDetails', Billing_Detail_Schema)

export default Billing_Detail_Model;