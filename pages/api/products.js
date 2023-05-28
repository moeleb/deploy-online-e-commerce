import Product from "../../models/Product";
import { initMongoose } from "../../lib/mongoose";


export async function findAllProducts() {
        return Product.find().exec()
}
export default async function handle (req,res) {
        await initMongoose()
        const {ids} = req.query;
        if (ids) {
                res.json(await Product.find({ _id: { $in: ids.split(',') } }).exec());
        } else {
        res.json(await findAllProducts())

        }


}

