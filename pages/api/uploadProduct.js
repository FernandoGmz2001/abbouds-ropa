import { dbConnect } from "../../utils/mongodb";
import Product from "../../models/schema";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const product = await Product.find();
        return res.status(200).json(product);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    case "POST":
      try {
        const newTask = new Product(body);
        const savedTask = await newTask.save();
        return res.status(201).json(savedTask);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "Este método no está soportado" });
  }
}
