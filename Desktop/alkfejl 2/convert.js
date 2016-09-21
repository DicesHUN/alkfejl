const fs = require( 'fs' );
const jimp = require( 'jimp' );
const DataStore = require( 'nedb' );

const db = new DataStrore({
    filename: 'images.nedb',
    autoload: true,
});

db.remove({}, {multi: true}, function (err, numRemoved) {
    if (err) throw err;
    fs.readdir('images/', function (err, files) {
    if (err) throw err;

        files.forEach(function (fileName) {
            jimp.read(`images/${fileName}`, function (err, image) {
                //const width = image.bitmap.width;
                //const height = image.bitmap.height;   
                const {width, height} = image.bitmap;   //ua. mint az előző két sor
                db.insert({fileName, width, height}, function (err, insertedImage) {
                    image.resize(100, jimp.AUTO);
                    image.write(`converted/${insertedImage._id}.png`, function (err) {
                        if (err) throw err;
                        console.log( fileName, 'feldolgozva' );
                    });
                });
            })
        })
    } );
}); //mindent ürít az adatbázisból
 