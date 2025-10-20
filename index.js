const axios = require('axios');
const { load } = require('cheerio');

try {
    const title_name = "";

    const Options = {
        headers: {
            "User-Agent":
                "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/114.0.5735.99 Mobile/15E148 Safari/604.1",
        },
    };

    await axios.get(`https://www.themoviedb.org/search?query=${String(title_name).replaceAll(' ', '%20')}`, Options).catch((err) => {
        return res.status(500).json({ error: 'Erro ao buscar filme' });
    }).then(response => {
        if (response) {
            const $ = load(response.data);
            link = $('div .results').find('div .card .wrapper .details .title').find('a').attr('href');
            const result = {
              status: 'success',
              parcial_link: link,
              full_link: `https://www.themoviedb.org${link}`,
              type: link.split('/')[1],
              id: link.split('/')[2].split('-')[0],
            };

            console.log(result);
        } else {
            console.log("Título não encontrado!");
        };
    });


} catch (err) {
    console.log(err);
};  
