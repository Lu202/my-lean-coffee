import { Container, Grid, Typography } from "@mui/material";

export default function Cards() {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1"> cards </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
