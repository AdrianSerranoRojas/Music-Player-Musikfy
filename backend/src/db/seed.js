import { User } from "../models/user-model.js";
import { Product } from "../models/product-model.js";
import { getSeedUsers, getSeedProducts } from "./seed-data.js";

export async function seedProducts() {
  await Promise.all([User.deleteMany({}), Product.deleteMany({})]);
  const users = await User.insertMany([...getSeedUsers()]);
  return Product.insertMany([...getSeedProducts()]);
}
