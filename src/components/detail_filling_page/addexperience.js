import React from 'react';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { useFieldArray, useFormContext } from 'react-hook-form';

function Addexperience(props) {
  const { register, errors } = props;
  const { append, fields, remove } = useFieldArray({ name: "experiences" });

  return (
    <>
      {fields.map((item, index) => {
        return (
          <>
            <Typography variant='h6'  m={3}>
              Experience {index + 2}
            </Typography>
            <Grid key={item.id} container spacing={2}>
              <Grid item xs={6}>
                <TextField id="filled-basic" label="Job Title" {...register(`experiences[${index}].Job_Title`, { required: true })} defaultValue={item.Job_Title} variant="outlined" fullWidth />
                {errors.Job_Title && <span>*This Job Title field is required*</span>}
              </Grid>
              <Grid item xs={6}>
                <TextField id="filled-basic" label="Organization" {...register(`experiences[${index}].Organization`, { required: true })} defaultValue={item.Organization} variant="outlined" fullWidth />
                {errors.Organization && <span>*This Organization field is required*</span>}
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" color="GrayText">start Date</Typography>
                <TextField type='date' id="filled-basic" {...register(`experiences[${index}].Start_Date`, { required: true })} defaultValue={item.Start_Date} variant="outlined" fullWidth />
                {errors.Start_Date && <span>*This start date field is required*</span>}
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" color="GrayText">End Date</Typography>
                <TextField type='date' id="filled-basic" {...register(`experiences[${index}].End_Date`, { required: true })} defaultValue={item.End_Date} variant="outlined" fullWidth />
                {errors.End_Date && <span>*This end date field is required*</span>}
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
                <Stack direction="row" spacing={2} justifyContent="right">
                  <Button variant='contained' color='error' onClick={() => { remove(index) }}>Remove</Button>
                </Stack>
              </Grid>
            </Grid>
          </>
        )
      })}

      <Grid item xs={12}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant='contained' onClick={() => { append({ Job_Title: "", Organization: "", Start_Date: "", End_Date: "" }) }}>Add New</Button>
        </Stack>
      </Grid>
    </>
  )
}

export default Addexperience;