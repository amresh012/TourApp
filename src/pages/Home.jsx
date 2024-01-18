import {Container ,Box ,Grid} from '@mui/material'
import { SearchResult } from '../section/search';
import Filter from '../section/Filter/index.jsx';
const Home = () => {
  return <div>
    <Container maxWidth="xl">
       <Box>
        <Grid container>
         <Grid item md={3}  xs={12}>
          {/* filter */}
          <Filter/>
           </Grid>
         <Grid item md={9}  xs={12}>
          {/* serch result */}
          <SearchResult/>
           </Grid>
        </Grid>
       </Box>
    </Container>
  </div>;
};

export default Home;
