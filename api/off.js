let state = true;

export default function handler(req, res) {
  state = true;
  res.json({ maintenance: true });
}
