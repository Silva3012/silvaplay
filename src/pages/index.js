/*
Index page
*/
import { Grid, Typography, Box } from '@mui/material';
import { getAccessToken } from '@/spotifyAuth';
import Link from 'next/link';

export default function Home({ genres }) {
  return (
    // Grid container to create a grid layout
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12}}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to SILVAPLAY
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Select one of the Spotify genres below to see the top 10 recommended songs for Today.
        </Typography>
        <hr />
      </Grid>
      {/* Iterate over the genres and create a grid item for each genre */}
      {genres.map((genre) => (
        <Grid item xs={2} sm={4} md={4} key={genre}>
          <Box sx={{ textAlign: 'center', border: '1px solid #010D00', borderRadius: '3%', padding: '1rem' }}>
            <Link href={`/genre/${genre}`}>
              <Typography variant="body1">
                {genre}
              </Typography>
            </Link>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};


export async function getStaticProps() {
  // Get the access token using the getAccessToken function
  const accessToken = await getAccessToken();

  // Fetch the available genre seeds from the Spotify API
  const data = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then(response => response.json());

  // Return the fetched data as props
  return {
    props: {
      genres: data.genres,
    },
  };
}

/*
References.
Data Fetching:

https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props

*/