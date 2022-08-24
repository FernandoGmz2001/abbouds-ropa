import { dbConnect } from "../../../utils/mongodb";
import Product from "../../../models/schema";

dbConnect();

export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req;
  switch (method) {
    case "GET":
      try {
        const product = await Product.findById(id);
        if (!product)
          return res.status(404).json({ msg: "Producto no encontrado" });
        return res.status(200).json(product);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "PUT":
      try {
        const product = await Product.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!product)
          return res.status(400).json({ msg: "Producto no encontrado" });
        return res.status(200).json(product);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "DELETE":
      try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct)
          return res.status(404).json({ msg: "Producto no encontrado" });
        return res.status(200).json({ msg: "Producto eliminado" });
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }

    default:
      return res.status(400).json({ msg: "Este método no esta soportado" });
  }
};
