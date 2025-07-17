export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const secret = req.headers["x-secret"];
  if (secret !== "mySecret123") {
    return res.status(403).send("Forbidden");
  }

  const email = req.body.email;
  if (!email) {
    return res.status(400).send("No email provided");
  }

  res.status(200).send("Email received: " + email);
}
