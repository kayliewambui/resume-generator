import React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import Addexperience from './addexperience';
import { Grid } from '@mui/material';

function Work_info() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant='h4'  m={3}>
        Work Experience
      </Typography>
      <Typography variant='h6'  m={3}>
        Experience 1
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Job Title" {...register(`Job_Title`, { required: true })} variant="outlined" fullWidth />
          {errors.Job_Title && <span >*This Job Title is required*</span>}
        </Grid>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Organization" {...register(`Organization`, { required: true })} variant="outlined" fullWidth />
          {errors.Organization && <span>*This Organization is required*</span>}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" color="GrayText">Start Date</Typography>
          <TextField type='date' id="outlined-basic" {...register(`Start_Date`, { required: true })} variant="outlined" fullWidth />
          {errors.Start_Date && <span>*This start date field is required*</span>}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" color="GrayText">End Date</Typography>
          <TextField type='date' id="outlined-basic" {...register(`End_Date`, { required: true })} variant="outlined" fullWidth />
          {errors.End_Date && <span>*This end date field is required*</span>}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Description"
          multiline
          rows={4}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Addexperience register={register} errors={errors} />
      </Grid>
    </Box>
  );
}

export default Work_info;