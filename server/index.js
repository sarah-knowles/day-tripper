const server = require('./server')

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  ('Server listening on http://localhost:' + PORT)
})
