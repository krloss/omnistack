const multer = require('multer');
const path = require('path');

const uploadConfig = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        filename:(req,file,cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname,ext);

            cb(null,`${name}-${Date.now()}${ext}`);
        },
    }),
};

module.exports = multer(uploadConfig);
