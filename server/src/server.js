import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios'
import { parseSearchResult } from './helpers';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/items', (req, res) => {
    console.log(req.query);
    const query = req.query.q;
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then(response => {
        const parsedData = parseSearchResult(response.data);
        res.status(200).json(parsedData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

app.listen(8080, () => console.log("Server listening on port 8080"));
