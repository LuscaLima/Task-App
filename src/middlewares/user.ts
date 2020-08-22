import multer from 'multer'

/** Basic config of multer */
const upload = multer({
  dest: 'avatar',
  limits: {
    fileSize: 500000
  },
  fileFilter(_, file, callback) {
    const name: string = file.originalname

    if (!/\.(png|jpe?g)$/.test(name)) {
      return callback(new Error('File must be JPG, JPEG or PNG'))
    }

    callback(null, true)
  }
})

/** Request a multipart with an image */
export const uploadAvatar = upload.single('avatar')
