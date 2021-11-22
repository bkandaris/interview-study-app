import React from 'react';
import { Box } from '@mui/system';
import { Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { handleScoreChange, handleAmountChange } from '../redux/actions';

const FinalScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state);
  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate('/');
  };

  return (
    <div>
      <Box mt={30}>
        <Typography variant='h3' fontWeight='bold' mb={3}>
          Final Score {score}
        </Typography>
        <Button variant='outline' onClick={handleBackToSettings}>
          Back to settings
        </Button>
      </Box>
    </div>
  );
};

export default FinalScreen;
