module.exports = async (req, res) => {
    const qs = req.url.split('?')[1] || '';
    const upstream = `http://www.travel-advisory.info/api${qs ? '?' + qs : ''}`;
    const r = await fetch(upstream);
    const body = await r.text();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(r.status).send(body);
};
