import { Button, CssBaseline, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './auth/ChangePassword';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate('/login')
  }
  return <>
    <CssBaseline />
    {/* <Grid>
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 10 }}>Logout</Button>
      </Grid> */}
      <Grid item sm={8} sx={{mt:20}}>
        <ChangePassword />
        <Sidebar/>
      </Grid>
  </>;
};

export default Dashboard;