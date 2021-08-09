import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import  getIcon  from '../../helperFunctions/getIcon';
import { Grid, Icon, Typography } from '@material-ui/core';

import { FunctionComponent } from "react";
import { ProjectInterface  } from '../../utils/resumeData';
import CustomButton from '../Button/Button'

import './ProjectDialog.css';

const ProjectDialog:FunctionComponent<{
  projectDialog: ProjectInterface;
  open: boolean;
  onClose:(val: boolean) => void;
}> = ({ projectDialog, open, onClose } ) => {
  
  
  return (
    <Dialog 
      className="projectDialog" 
      fullWidth 
      open={open} 
      onClose={() => onClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      
      <p className="dialogClose_button"  onClick={() => onClose(false)}>
        <Icon>{getIcon('CloseIcon')}</Icon>
      </p>      

      <DialogTitle className="projectDialog_title" id="alert-dialog-title">{projectDialog?.title}</DialogTitle>
        
        <img className="projectDialog_image" src={projectDialog?.image_path} alt="" />
        <DialogContent id="alert-dialog-description">
          <Typography variant="h6" className="projectDialog_description">
            Description:
          </Typography>
          <Typography variant="body2" className="projectDialog_description">
            {projectDialog?.description}
          </Typography>
          <Typography variant="h6" className="projectDialog_description">
            Key Techs:
          </Typography>
            <div>
              <Grid container spacing={1}>  
                <Grid container item xs={12} spacing={1}>
                  {
                    projectDialog?.key_techs?.map((item) => (
                      <Grid key={item} item xs={2} >
                        <Typography variant="body2">{item}</Typography>
                      </Grid> 
                  ))
                  }
                </Grid> 
              </Grid>
            </div>
         </DialogContent>
          <DialogActions className="projectDialog_actions">
           <CustomButton 
            text="View Codes on Github" 
            icon={
            <a href={projectDialog?.github_url} target="_blank" rel="noreferrer">
              <span>{getIcon('GitHubIcon')}</span>
            </a>
            } 
            />
            <CustomButton 
            text="View Live Hosted Site" 
            icon={
            <a href={projectDialog?.github_url} target="_blank" rel="noreferrer">
              <span>{getIcon('GitHubIcon')}</span>
            </a>
            } 
        />
        </DialogActions>
      </Dialog>
  )
}

export default ProjectDialog