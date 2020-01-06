const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '홍길동',
            'birthdays' : '030506',
            'sex' : '남자',
            'job' : '대학생'
            },
            {
              'id' : 2,
              'image' : 'https://placeimg.com/64/64/2',
              'name' : '유혜리',
              'birthdays' : '040305',
              'sex' : '여자',
              'job' : '고등학생'
              },
              {
                'id' : 3,
                'image' : 'https://placeimg.com/64/64/3',
                'name' : '김상현',
                'birthdays' : '040310',
                'sex' : '남자',
                'job' : '초등학생'
                }
    ]);
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});