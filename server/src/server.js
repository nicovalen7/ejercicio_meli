import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios'
import { parseSearchResult, parseItemDetails, parseDescription } from './helpers';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/items', (req, res) => {
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

app.get('/api/items/:id', (req, res) => {
    const itemId = req.params.id;
    const reqDetails = axios.get(`https://api.mercadolibre.com/items/${itemId}`);
    const reqDescription = axios.get(`https://api.mercadolibre.com/items/${itemId}/description`);
    axios.all([reqDetails, reqDescription])
    .then(
        axios.spread((...responses) => {
            const itemResponse = responses[0];
            const descriptionResponse = responses[1];
            let itemDetailsParsed = parseItemDetails(itemResponse.data);
            itemDetailsParsed.description = parseDescription(descriptionResponse.data);
            res.status(200).json(itemDetailsParsed);
        })
    )
    .catch(errs => {
        console.log(errs);
        res.status(500).json(errs);
    })
});

app.listen(8080, () => console.log("Server listening on port 8080"));
