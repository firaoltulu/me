import { useEffect, useMemo } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SendIcon from '@mui/icons-material/Send';

// material
import { useTheme, styled } from '@mui/material/styles';
import {
  Box, Grid, Container, Typography, useMediaQuery,
  Card, CardContent, CardMedia, Button
} from '@mui/material';
//
import { TextAnimate } from '../../animate';
// Hooks
import useNav from '../../../hooks/useNav';
// Assets
import googleicon from "../../../assets/license/googleicon.png";
import metaicon from "../../../assets/license/metaicon.png";
import alxicon from "../../../assets/license/alxicon.png";
import certificateone from "../../../assets/license/certificateone.png";
import certificatetwo from "../../../assets/license/certificatetwo.png";
import certificatethree from "../../../assets/license/certificatethree.png";

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  // backgroundSize: 'cover',

  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    padding: 0,
    height: 840,
  }
}));

const Section = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  contentVisibility: 'auto',
  containIntrinsicSize: '80px',
  color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
}));

const Clamp = styled('div')(() => ({
  width: '100%',
  maxWidth: '100vw',
  overflowX: 'clip',
  isolation: 'isolate',
}));

const Track = styled('div')(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '1.25rem',
  whiteSpace: 'nowrap',
  willChange: 'transform',
  padding: '0.75rem 1rem',
  animation: 'marquee var(--marquee-duration, 18s) linear infinite',
  '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
  '@keyframes marquee': {
    '0%': { transform: 'translate3d(0,0,0)' },
    // move by half the width; sign is controlled by --flow
    '100%': { transform: 'translate3d(calc(var(--flow, 1) * -50%), 0, 0)' },
  },
}));

const Item = styled('span')(() => ({
  display: 'inline-flex',
  alignItems: 'baseline',
  fontSize: '1.1rem',
}));
const Dot = styled('span')(() => ({ fontSize: '1.2rem', opacity: 0.7 }));

function Row({ items }) {
  return (
    <>
      {items.map((it, i) =>
        it.dot ? (
          <Dot key={`d-${i}`}>•</Dot>
        ) : (
          <Item key={`i-${i}`}>
            {/* <strong style={{ paddingInline: 6 }}>{it.num}</strong> {it.label} */}
            <Typography variant='h5' sx={{
              fontFamily: 'sans-serif',
              alignContent: "center",
              alignItems: "center",
              textAlign: "center",
              // padding: "1em",
              paddingLeft: "1em",
              paddingRight: "1em",
              paddingTop: "0.4em",
              paddingBottom: "0.4em",
            }}
            >
              <Typography variant='h5' sx={{
                fontFamily: 'Ade display, sans-serif',
              }}
              > {it.label}</Typography>
            </Typography>
          </Item>
        )
      )}
    </>
  );
}


// ----------------------------------------------------------------------

export default function LandingLicenses() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const { navOption, isLock, onScrollChange } = useNav();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && (isLock === false)) {
      onScrollChange(navOption[5]);
    } else {
    }
  }, [inView])


  const items = useMemo(
    () => [
      { num: '', label: 'For More Information Contact Me' },
      { dot: true },
      { num: '', label: 'For More Information Contact Me' },
      { dot: true },
      { num: '', label: 'For More Information Contact Me' },
      { dot: true },
      { num: '', label: 'For More Information Contact Me' },
      { dot: true },
      
    ],
    []
  );


  return (
    <Box ref={ref}>

      <RootStyle id='licence_section'>

        <Container maxWidth="lg" sx={{
          position: 'relative',
          top: 0,
          left: 0,
          height: '100%', color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
        }}>

          <Grid item xs={12} sx={{
            color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
            padding: "1em",
          }}>

            <Grid container direction="row" rowSpacing={0} sx={{ padding: "1em", }}>

              <Grid item xs={12} sx={{ marginBottom: "5em" }}>

                <TextAnimate
                  text="Licenses & certifications"
                  component={motion.h3}
                  sx={{
                    typography: 'h3',
                    'textTransform': 'uppercase',
                    'marginTop': '20px',
                    'marginBottom': '10px',
                    'fontFamily': 'Ade display, sans-serif',
                    'fontSize': '3.5em',
                    'fontWeight': 400,
                  }}
                >

                </TextAnimate>
              </Grid>

              <Grid container direction="row" rowSpacing={0} sx={{ padding: "1em", }}>

                <Grid item xs={12} sx={{
                  borderBottom: '1px solid #371f0e33',
                  borderColor: theme.palette.mode === 'light' ? '#371f0e33' : '#fcf2ec66'
                }}>

                  <Grid container direction="row"
                    sx={{
                      alignContent: "center",
                      borderRadius: "1em",
                    }}>

                    <Grid item xs={12} md={6} >
                      <Box sx={{ padding: "1em" }}>
                        <Card elevation={0} sx={{ display: 'flex', }}>
                          <CardMedia
                            component="img"
                            sx={{ maxWidth: "170px", minWidth: "104px", maxHeight: "114px", minHeight: "104px", padding: "1px" }}
                            image={metaicon}
                            alt="Meta Icon"
                          />
                          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                              <Typography variant="h6">
                                Mobile Development
                              </Typography>
                              <Typography>
                                Meta<br></br>
                              </Typography>
                              <Typography >
                                Issued Sep 2022<br></br>
                              </Typography>
                              <Typography >
                                Credential ID DPUHGZGE6VAY<br></br>
                              </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                              <Button variant="outlined" size="small" href={'https://www.coursera.org/account/accomplishments/certificate/DPUHGZGE6VAY'} target="_blank" endIcon={<SendIcon />}>
                                show Credential
                              </Button>

                            </Box>
                          </Box>
                        </Card>

                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6} >

                      <Box sx={{ padding: "1em" }}>
                        <Card elevation={0} sx={{ display: 'flex', }}>
                          <CardMedia
                            component="img"
                            sx={{ borderRadius: "5px", maxWidth: "170px", minWidth: "104px", maxHeight: "144px", padding: "1px" }}
                            image={certificatetwo}
                            alt="Mobile Developement certificate"
                          >
                          </CardMedia>
                          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                              <Typography textAlign={"center"} >
                                Skills: Reactjs | React.Native
                              </Typography>

                            </CardContent>

                          </Box>
                        </Card>

                      </Box>

                    </Grid>


                  </Grid>

                </Grid>

                <Grid item xs={12} sx={{
                  marginBottom: "1em", borderBottom: '1px solid #371f0e33',
                  borderColor: theme.palette.mode === 'light' ? '#371f0e33' : '#fcf2ec66'
                }}>

                  <Grid container direction="row"
                    sx={{
                      alignContent: "center",
                      borderRadius: "1em",
                    }}>

                    <Grid item xs={12} md={6} >
                      <Box sx={{ padding: "1em" }}>
                        <Card elevation={0} sx={{
                          display: 'flex',
                        }}>
                          <CardMedia
                            component="img"
                            sx={{ maxWidth: "170px", minWidth: "104px", maxHeight: "144px", padding: "6px" }}
                            image={googleicon}
                            alt="Live from space album cover"
                          />
                          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                              <Typography variant="h6">
                                Foundations: Data, Data, Everywhere
                              </Typography>
                              <Typography>
                                Google<br></br>
                              </Typography>
                              <Typography
                              >
                                Issued Sep 2022<br></br>
                              </Typography>
                              <Typography
                              >
                                Credential ID ABSCVTD5FCWW<br></br>
                              </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                              <Button variant="outlined" size="large" href={'https://www.coursera.org/account/accomplishments/certificate/ABSCVTD5FCWW'} target="_blank" size="small" endIcon={<SendIcon />}>
                                show Credential
                              </Button>

                            </Box>
                          </Box>
                        </Card>

                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6} >

                      <Box sx={{ padding: "1em" }}>
                        <Card elevation={0} sx={{
                          display: 'flex',
                          // backgroundColor: theme.palette.certifications.main, 
                        }}>
                          <CardMedia
                            component="img"
                            sx={{ borderRadius: "5px", maxWidth: "170px", minWidth: "104px", maxHeight: "144px", padding: "6px" }}
                            image={certificateone}
                            alt="Live from space album cover"
                          />
                          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                              <Typography textAlign={"center"}
                              // color={theme.palette.certifications.contrastText}
                              >
                                Skills: R
                              </Typography>

                            </CardContent>

                          </Box>
                        </Card>

                      </Box>

                    </Grid>


                  </Grid>

                </Grid>

                <Grid item xs={12} sx={{
                  marginBottom: "1em", borderBottom: '1px solid #371f0e33',
                  borderColor: theme.palette.mode === 'light' ? '#371f0e33' : '#fcf2ec66'
                }}>

                  <Grid container direction="row"
                    sx={{
                      alignContent: "center",
                      borderRadius: "1em",
                    }}>

                    <Grid item xs={12} md={6} >
                      <Box sx={{ padding: "1em" }}>
                        <Card elevation={0} sx={{
                          display: 'flex',

                        }}>
                          <CardMedia
                            component="img"
                            sx={{ maxWidth: "170px", minWidth: "104px", maxHeight: "144px", padding: "6px" }}
                            image={alxicon}
                            alt="Live from space album cover"
                          />
                          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                              <Typography variant="h6">
                                Software Engineering
                              </Typography>
                              <Typography>
                                ALX<br></br>
                              </Typography>
                              <Typography>
                                Issued July 2024<br></br>
                              </Typography>
                              <Typography>
                                Credential ID 3XcLC9pTfG<br></br>
                              </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                              <Button variant="outlined" href={'https://intranet.alxswe.com/certificates/3XcLC9pTfG'} target="_blank" size="small" endIcon={<SendIcon />}>
                                show Credential
                              </Button>

                            </Box>
                          </Box>
                        </Card>

                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6} >

                      <Box sx={{ padding: "1em" }}>
                        <Card elevation={0} sx={{ display: 'flex' }}>
                          <CardMedia
                            component="img"
                            sx={{ borderRadius: "5px", maxWidth: "170px", minWidth: "104px", maxHeight: "144px", padding: "6px" }}
                            image={certificatethree}
                            alt="Live from space album cover"
                          />
                          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                              <Typography >
                                Skills: C++, Python, C#, JavaScript, Node.js
                              </Typography>

                            </CardContent>

                          </Box>
                        </Card>

                      </Box>

                    </Grid>


                  </Grid>

                </Grid>


              </Grid>

            </Grid>

          </Grid>

          <Box sx={{ height: { xs: '1vh' } }} />

        </Container>

      </RootStyle>

      <Box sx={{ height: { md: '10vh' } }} />

      <Section
        id="project_section"
        // set the flow once based on your theme direction
        style={{ '--flow': theme.direction === 'rtl' ? -1 : 1 }}
      >
        <Box
          sx={{
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Clamp>
            {/* Duplicate content once for seamless loop */}
            <Track>
              <div className="marquee-inner">
                <Row items={items} />
              </div>
              <div className="marquee-inner" aria-hidden>
                <Row items={items} />
              </div>
            </Track>
          </Clamp>
        </Box>
      </Section>

    </Box>
  );

}