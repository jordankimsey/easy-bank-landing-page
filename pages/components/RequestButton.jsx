import React from 'react';
import { Button } from '@mui/material';

const RequestButton = () => {
  return (
    <Button
      variant='contained'
      className='linear-gradiant'
      sx={{
        '&:hover': { backgroundColor: 'primary.light' },
        display: { sm: 'block' },
        borderRadius: 6,
        py: 1,
      }}
    >
      Request Invite
    </Button>
  );
};

export default RequestButton;
