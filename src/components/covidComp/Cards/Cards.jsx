import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed) {
        return 'Fetching data... please wait...';
    }
    

    console.log(deaths.value);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={9} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                    <Typography gutterBottom>Infected</Typography>
                    <Typography variant="h5" className={styles.inf}>
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                    </Typography>
                    <Typography >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Current naughty people not wearing masks and wash their hands</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={9} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                    <Typography  gutterBottom>Recovered</Typography>
                    <Typography variant="h5" className={styles.rec}>
                        {(() => {
                            if (recovered.value === 0) {
                                return <div>NaN API Error</div>
                            } else {
                                return <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                            }
                          })()
                        } 
                    </Typography>
                    <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Current people who experienced the virus and survived</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={9} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                    <Typography gutterBottom>Deaths</Typography>
                    <Typography variant="h5" className={styles.dea}>
                        <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                    </Typography>
                    <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Current people that went to see Jesus due to COVID-19 *respects*</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
        
}

export default Cards;