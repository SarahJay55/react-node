const sunImages = ["http://webneel.com/wallpaper/sites/default/files/images/05-2014/6-sunrise.preview.jpg"];

module.exports = { 
    read: ( req, res ) => {
        res.status(200).send(sunImages)
    },
}