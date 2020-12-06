
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Carousel } from 'react-responsive-carousel';
import image from '../../images/image-1.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const styles = {
    images: {
        backgroundSized: "cover"
    }
}

class Hero extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <Carousel autoPlay infiniteLoop  >
                <div>
                    <img className={classes.images} src={image} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={image} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={image} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                </Carousel>  
            </>
        )
    }
}

export default withStyles(styles)(Hero);