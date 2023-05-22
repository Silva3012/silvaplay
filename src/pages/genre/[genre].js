/*
This page will show details of the top 10 recommended tracks from Spotify based on the
selected genre.
The paths are genred dynamically based on the data received from the API.
*/
import { Typography, Grid } from '@mui/material';
import { getAccessToken } from '@/spotifyAuth';

export default function Genre({ genre, tracks }) {
  return (
    <>
      <Typography variant="h3" align="center" gutterBottom>
        {genre.toUpperCase()}
      </Typography>
      <Typography variant="h6" align="center">
        Here are the top 10 recommended Tracks for you from the {genre} genre today.
      </Typography>
      <hr />
      <Grid container spacing={5} columns={32} align="center">
        {tracks.map((track) => (
          <Grid item xs={6} sm={6} md={6} key={track.id}>
            <div>
              <img 
                src={track.album.images[0].url} 
                style={{ maxWidth: '100%', height: 'auto' }} 
                alt={track.name}
              />
            </div>
              <Typography variant="body1">{track.name} - {track.artists[0].name}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export async function getStaticPaths() {
  const accessToken = await getAccessToken();

  // Retreive the available genre seeds
  const response = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const { genres } = await response.json();
  // Generate the dynamic paths based on the available genres
  const paths = genres.map((genre) => ({
    params: { genre },
  }));

  console.log(paths)

  // Return an object with paths and a fall back property
  return {
    paths,
    fallback: false,
  };
}


// Async function that receives a params object which contains the dynamic route parameter
export async function getStaticProps({ params }) {
  const accessToken = await getAccessToken();

  // console.log(params);
  //Calling the Spotify API with a specified genre parameter to fetch the recommendations
  const response = await fetch(
    `https://api.spotify.com/v1/recommendations?limit=10&seed_genres=${params.genre}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);

  // Return an object with the props property
  return {
    props: {
      genre: params.genre,
      tracks: data.tracks
    },
  };
}

/*
References.
Data Fetching:

https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props

https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths
*/