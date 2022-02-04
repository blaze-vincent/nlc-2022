import nextConnect from "./nextConnect";

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler = nextConnect()
.post((req, res) => {
  console.log(req.body)
  res.json(req.body.message)
})