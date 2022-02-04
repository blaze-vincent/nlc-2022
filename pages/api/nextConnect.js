import nc from 'next-connect'

export default nextConnect = _ => nc({
  onError: (err, req, res) => res.status(500).json({err}),
  onNoMatch: (req, res) => res.status(404).end('page not found')
})