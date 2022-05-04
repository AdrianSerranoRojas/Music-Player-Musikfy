import cloudinary from "cloudinary";
import config from "../config/config.js";

// datos de la cuenta de cloudinary
cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
});

export const uploadImageCloud = async (filePath) => {
  console.log("aaaaaaaaaaaaaaaa", config.cloudinary.cloud_name);
  return await cloudinary.v2.uploader.upload(filePath, {
    folder: "usersPictures",
  });
};

// es el nombre de la carpeta de cloudinary no tiene que ver con el nombre de la base de datos de mongo, que se llaman igual

export const deleteImageCloud = async (id) => {
  return await cloudinary.v2.uploader.destroy(id);
};