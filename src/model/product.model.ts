import mongoose, { ObjectId, Schema, model } from "mongoose";

export interface Product {
  id: string;
  description: string;
  category: string;
  productName: string;
  price:number;

}

export const ProductSchema = new Schema<Product>(
  {
    category: { type: String, required: true },
    productName: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

export const ProductModel = model<Product>("product", ProductSchema);
