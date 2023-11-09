import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// export default function LoginPage() {
// const [isLogin, setIsLogin] = React.useState(true)
// const handleLogin = () => {
//   isLogin ? setIsLogin(false) : setIsLogin(true)
// }   

// return (
//     <div>
//         <Box
//         component="form"
//         sx={{
//             '& > :not(style)': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//         >
//         <TextField id="outlined-basic" label="Username" variant="outlined" />
//         <TextField id="outlined-basic" label="Password" variant="outlined" />
//         </Box>
//         <div>
//           {/* {isLogin ? 
//           <Home /> : 
//           <Login />} */}
//         </div>

//     </div>
//   );
// }
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {}
      <Link color="inherit" href="https://mui.com/">
      </Link>{' '}
    </Typography>
  );
}


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp(props) {
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const [nama, setNama] = React.useState('');
const [phone, setPhone] = React.useState('');
const onSignUp = (status) =>{
    const accountDetails = { email, password, nama, phone };
    props.onSignUp(status, accountDetails)
}
return ( 
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="nama"
                  label="Nama"
                  type="nama"
                  id="nama"
                  autoComplete="nama"
                  value={nama}
              onChange={(e) => setNama(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="phone"
                  id="phone"
                  autoComplete="phone"
                  value={phone}
              onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => onSignUp(false)}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}