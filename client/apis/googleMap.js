import request from 'superagent'

export const getTrips = () => {
  const endPoint = "https://api.foursquare.com/v2/venues/explore?"
  const parameters = {
    client_id: "FEYZK4IJDHO2ICJHSXQNNIIVEGPFDLHTOTYZDCGS5EB54DII",
    client_secret: "PTDR3B50GQS5EG5MXE42BSZETQY0GW1T0IX3TBMQ4FGWK5ID",
    categoryId: "4bf58dd8d48988d163941735",
    near: "Auckland",
    v: "20201206"
  }

  return request
    .get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      return response.body.response.groups[0].items
    })
    .catch(error => {
      console.log("ERROR" + error)
    })
}