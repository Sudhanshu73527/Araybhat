import Library from '../models/Library.js';

import cloudinary from '../Config/cloudinary.js';

import streamifier from 'streamifier';

// ======================
// CLOUDINARY FUNCTION
// ======================

const uploadToCloudinary = (buffer) => {
   return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
         {
            folder: 'library',
         },

         (error, result) => {
            if (error) {
               reject(error);
            } else {
               resolve(result.secure_url);
            }
         },
      );

      streamifier.createReadStream(buffer).pipe(stream);
   });
};

// ======================
// GET LIBRARY
// ======================

export const getLibrary = async (req, res) => {
   try {
      const library = await Library.findOne();

      res.status(200).json(library);
   } catch (error) {
      console.log(error);

      res.status(500).json({
         success: false,
         message: error.message,
      });
   }
};

// ======================
// UPDATE LIBRARY
// ======================

export const updateLibrary = async (req, res) => {
   try {
      console.log(req.body);

      console.log(req.files);

      let library = await Library.findOne();

      const { heading, subHeading, description, quote } = req.body;

      let image1 = library?.image1 || '';

      let image2 = library?.image2 || '';

      // IMAGE 1
      if (req.files && req.files.image1) {
         image1 = await uploadToCloudinary(req.files.image1[0].buffer);
      }

      // IMAGE 2
      if (req.files && req.files.image2) {
         image2 = await uploadToCloudinary(req.files.image2[0].buffer);
      }

      // CREATE
      if (!library) {
         library = new Library({
            heading,
            subHeading,
            description,
            quote,
            image1,
            image2,
         });

         await library.save();

         return res.status(201).json({
            success: true,
            message: 'Library Created Successfully',
            library,
         });
      }

      // UPDATE
      library.heading = heading;
      library.subHeading = subHeading;
      library.description = description;
      library.quote = quote;
      library.image1 = image1;
      library.image2 = image2;

      await library.save();

      res.status(200).json({
         success: true,
         message: 'Library Updated Successfully',
         library,
      });
   } catch (error) {
      console.log('LIBRARY ERROR:', error);

      res.status(500).json({
         success: false,
         message: error.message,
      });
   }
};
