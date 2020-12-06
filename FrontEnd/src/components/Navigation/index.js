import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Link  from 'react-router-dom/Link';

//MUI Stuff
import AppBar from '@material-ui/core/AppBar';
import ToolBar  from "@material-ui/core/Toolbar";
import Button  from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const styles = {
    navigation: {
        height: '70px',
        width: '100%',
        alignItems: 'flex-end',
        backgroundColor: "transparent" 
    },
    toolbar: {
        
    },
    logo: {
        alignItems: "flex-start",
        tectAlign: "left"
    },
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all .75s ease",
        outline: "invert",
        background: "#0c5d7a",
        marginRight: "10px",
        paddingLeft: "10px",
    }

}

class Navigation extends Component {
   
    render() {
    const { classes } = this.props;
        return (
            <>
            <div >
                <AppBar className={classes.navigation}>
                    <ToolBar className={classes.toolbar}>
                        <Typography className={classes.logo}>Logo</Typography>
                        <Button className={classes.button} component={Link} to="/login">Log in</Button>
                        <Button className={classes.button} component={Link} to="/signup">Sign Up</Button>
                    </ToolBar>
                </AppBar>  
            </div>
                
            </>
        )
    }
}

export default withStyles(styles)(Navigation);
