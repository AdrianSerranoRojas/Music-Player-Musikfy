import { User, Product } from "../models";
import { getSeedUsers, getSeedProducts } from "./seed-data";

async function seedProducts() {
  await Promise.all([User.deleteMany({}), Product.deleteMany({})]);
  const users = await User.insertMany([...getSeedUsers()]);
  return Product.insertMany([...getSeedProducts()]);
}

export const seedProducts = seedProducts;
