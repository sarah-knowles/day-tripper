import React from 'react'
import { connect } from 'react-redux'

export class Trips extends React.Component {
  render() {
    return (
      <>
        <h3>things to do ...</h3>


        <div className="wrapper">
          <div className="item">
            <a href="">
              <div className="frame">
                <img className="image" src="" />
                <div className="caption"><a className="link" href="">Trip 1</a>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div className="frame">
                <img className="image" src="" />
                <div className="caption"><a className="link" href="">Trip 2</a>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div className="frame">
                <img className="image" src="" />
                <div className="caption"><a className="link" href="">Trip 3</a>
                </div>
              </div>
            </a>
          </div>
        </div>  
          {/* map = new google.maps.Map(document.createElement('div'));

           this.googlePlaces = new google.maps.places.PlacesService(map);
           this.googlePlaces.getDetails(request, callback); */}
      </>
    )
  }

}




function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Trips)


//API google search javascript 
/* <script src="https://apis.google.com/js/api.js"></script>
<script>
  /**
   * Sample JavaScript code for search.cse.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

  // function loadClient() {
  //   gapi.client.setApiKey("YOUR_API_KEY");
  //   return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest")
  //       .then(function() { console.log("GAPI client loaded for API"); },
  //             function(err) { console.error("Error loading GAPI client for API", err); });
  // }
  // Make sure the client is loaded before calling this method.
//   function execute() {
//     return gapi.client.search.cse.list({})
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client");
// </script>
// <button onclick="loadClient()">load</button>
// <button onclick="execute()">execute</button> */}


//HTTP get request;
//GET 'https://customsearch.googleapis.com/customsearch/v1?key=[YOUR_API_KEY] HTTP/1.1' 
// 
