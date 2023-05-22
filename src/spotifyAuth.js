const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET; 

export function getAccessToken() {
  const authOptions = {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64')), // Base64-encoded client ID and client secret
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials', // Request body for client credentials grant type
  };

  return fetch('https://accounts.spotify.com/api/token', authOptions) // Make a POST request to Spotify API token endpoint
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      const accessToken = data.access_token; // Extract the access token from the response data
      return accessToken;
    })
    .catch((error) => {
      console.error('Error retrieving access token:', error); // Log any errors that occurred during the request
      return null
    });
}

/*
Reference:
Creating and sending auth

https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow

*/