const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({message:'Hello Express!'});
});


app.get('/api/customers', (req, res) => {
    res.send([
        {
          id: 1,
          image: "https://placeimg.com/64/64/1",
          name: "홍길동",
          birthday: "989861",
          gender: "남자",
          job: " 대학생",
        },
        {
          id: 2,
          image: "https://placeimg.com/64/64/2",
          name: "홍광표",
          birthday: "283901",
          gender: "남자",
          job: " 대학생",
        },
        {
          id: 3,
          image: "https://placeimg.com/64/64/3",
          name: "Gon",
          birthday: "880313",
          gender: "남자",
          job: "유튜버",
        },
        {
            id: 4,
            image: "https://placeimg.com/64/64/4",
            name: "Bruce",
            birthday: "930111",
            gender: "남자",
            job: "프로게이머",
        },
        {
            id: 5,
            image: "https://placeimg.com/64/64/5",
            name: "Larry",
            birthday: "910103",
            gender: "남자",
            job: "삼국지",
        },
      ]);
});


app.listen(port, () => 
{
    console.log(`Example app listening at http://localhost:${port}`);
}
)