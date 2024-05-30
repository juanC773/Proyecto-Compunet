import multer from 'multer';
import fs from 'fs';

const dir = 'uploads';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname)
    }
});

const upload = multer({ storage: storage });
export { upload };