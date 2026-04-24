const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads/");
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (_req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp/;
  const isMimeTypeValid = allowedTypes.test(file.mimetype);
  const isExtensionValid = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  if (isMimeTypeValid && isExtensionValid) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed."));
  }
};

module.exports = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

