import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

// material
import { styled, useTheme, alpha } from '@mui/material/styles';
import { Grid, Container, Card, CardHeader, CardContent, Skeleton } from '@mui/material';
// components
import {
    ContactForm,
    ContactMap
} from '../contact';
import { MapMarkersPopups } from 'src/components/map';
import { mapConfig } from 'src/config';
// Hooks
import useNav from '../../../hooks/useNav';

// const MapMarkersPopups = lazy(() => import('src/components/map'));


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(1)
    }
}));

const MapWrapperStyle = styled('div')(({ theme }) => ({
    zIndex: 0,
    height: 560,
    overflow: 'hidden',
    position: 'relative',
    borderRadius: theme.shape?.borderRadius || 8, // Ensuring a fallback value
    '& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right': {
        display: 'none',
    },
}));


// ----------------------------------------------------------------------

export default function LandingContact() {
    const theme = useTheme();

    const { navOption, isLock, onScrollChange } = useNav();

    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView && (isLock === false)) {
            onScrollChange(navOption[4]);
        } else {
        }
    }, [inView]);



    return (
        <RootStyle id='contact_section' ref={ref}>

            <Container sx={{ my: 10 }}>

                <Grid container spacing={3}>

                    <Grid item xs={12} md={6}>
                        <ContactForm />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        {/* <Card sx={{
                            p: 0.1,
                            backgroundImage:
                                theme.palette.mode === 'light'
                                    ? `linear-gradient(180deg, ${alpha("#dad8d6", 1)}, ${alpha("#e8e8e8", 1)},  ${alpha("#dad8d6", 1)})`
                                    : `linear-gradient(45deg, ${theme.palette.grey[700]} 0%, ${alpha(theme.palette.grey[900], 1)} 100%)`,
                        }}>
                            <CardHeader title="My Location" sx={{}} />
                            <CardContent sx={{}}> */}
                                <MapWrapperStyle>
                                    <ContactMap></ContactMap>
                                    {/* <MapMarkersPopups  {...baseSettings} data={COUNTRIES} mapStyle={THEMES.light} /> */}
                                </MapWrapperStyle>
                            {/* </CardContent>
                        </Card> */}
                    </Grid>


                </Grid>
            </Container>

        </RootStyle>
    );
}
