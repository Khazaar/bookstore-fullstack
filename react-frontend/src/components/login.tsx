import { stat } from 'fs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../features/store';
import { Box, Button, Typography } from '@mui/material';
import { logIn } from '../features/userSlice';

const Login: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const isUserAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  if (isUserAuthenticated) return <>{children}</>;
  else
    return (
      <Box>
        <Typography>Please, Log In</Typography>
        <Button
          onClick={() => {
            dispatch(logIn());
          }}
        >
          Log In
        </Button>
      </Box>
    );
};

export default Login;
