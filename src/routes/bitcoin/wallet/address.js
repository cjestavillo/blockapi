import { parse } from 'url';

export default (req, res) => {
  const { query } = parse(req.url, true);
  const { secret } = query;

  const payload = { error: false };

  if (!secret) {
    payload.error = true;
    payload.message = 'No secret given';
    res.end(JSON.stringify(payload, null, 4));
    return;
  }

  payload.error = true;
  payload.message = 'TODO';
  res.end(JSON.stringify(payload, null, 4));
};
