import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es requerido"],
      trim: true,
      maxLength: [50, "El nombre no puede tener más de 50 caracteres"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxLength: [100, "El nombre no puede tener más de 100 caracteres"],
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Product || model("Product", productSchema);

// module.exports =
//   mongoose.models.Product || mongoose.model("Product", productSchema);
