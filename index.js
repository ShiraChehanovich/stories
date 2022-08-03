let imgQuote = [
    { img: 'https://image.shutterstock.com/image-photo/fantastic-mountain-lake-national-park-260nw-205250962.jpg', quote: "לעולם לא תמצא קשת בענן אם תביט מטה", like: 0 },
    { img: 'https://i.pinimg.com/236x/39/15/6d/39156dbb1ecfb5f078be9bc26485a239--amazing-sunsets-beautiful-sunset.jpg', quote: "הזמן שלכם מוגבל, אז אל תבזבזו אותו בלחיות חיים של מישהו אחר", like: 0 },
    { img: 'https://i.pinimg.com/236x/20/80/d8/2080d89b29c2a771d2d21b16408ddf11--autumn-look-autumn-rain.jpg', quote: "צפה לטוב ביותר, התכונן לגרוע מכל, ונצל כל מה שמגיע", like: 0 },
    { img: 'https://i.pinimg.com/236x/e9/f4/70/e9f4706247cf427b92ac89ac76e9d899--autumn-leaves-autumn-fall.jpg', quote: "פעולה היא המפתח הבסיסי לכל הצלחה", like: 0 },
    { img: 'https://i.pinimg.com/originals/8a/f4/a6/8af4a692d64a58231570948c0ca3f675.jpg', quote: "אין מעלית ישירה להצלחה, כולנו צריכים להשתמש במדרגות", like: 0 },
    { img: 'https://i.pinimg.com/originals/8a/f4/a6/8af4a692d64a58231570948c0ca3f675.jpg', quote: "יום אחד החיים יחלפו לך מול העיניים, תוודא שהם יהיו שווים צפייה", like: 0 },

]
let index = 6;

const axios = require('axios').default;
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002

app.listen(PORT)
console.log("server is listening in port 3001")

app.use(express.static('static'))
app.use('/', express.static('index.html'))
app.use(express.json())

app.get('/api/get-new-quote', (req, res) => {
    var randomNum = Math.floor(Math.random() * (index-1))
    res.send(imgQuote[randomNum]);
});

app.post('/api/get-num-of-likes', (req, res) => {
    const obj = {
        img: req.body.img,
        quote: req.body.quote,
        like: req.body.like + 1
    };
    imgQuote = imgQuote.filter((Q) => Q.quote !== req.body.quote)
    imgQuote.push(obj)
    res.send(obj)
});

app.post('/add-new-quote', (req, res) => {
    index++;
    var randomNum2 = Math.floor(Math.random() * (index-1))
    const obj = {
        img: imgQuote[randomNum2].img,
        quote: req.body.quote,
        like: 0
    };
    imgQuote.push(obj);
    res.send(obj);
});