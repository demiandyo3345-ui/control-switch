let state = false;

export default function handler(req, res) {
  state = false;
  res.json({ maintenance: false });
}
