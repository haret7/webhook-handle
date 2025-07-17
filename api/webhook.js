export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const secret = req.headers['x-secret'];
  if (secret !== '123') {
    return res.status(403).send('Forbidden');
  }

  const email = req.body.email;
  if (!email) {
    return res.status(400).send('Email is required');
  }

  // يمكنك تخزين البريد الإلكتروني في ملف أو قاعدة بيانات هنا
  console.log("Email Received:", email);

  return res.status(200).send('Email received successfully');
}
