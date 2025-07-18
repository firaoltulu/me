import { useEffect } from "react";
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

  const animation = {
    x: ["0%", theme.direction === "rtl" ? "100%" : "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: ["circIn", "circOut"],
        type: "tween"
      },
    },
  };

  return (
    <Box ref={ref}>

      <RootStyle id='licence_section'>

        <Box className="loop_scroll" sx={{
          borderTop: '1px solid #371f0e33',
          borderBottom: '1px solid #371f0e33',
          borderColor: theme.palette.mode === 'light' ? '#371f0e33' : '#fcf2ec66'
        }}>

          <motion.div className="infinity_content" animate={animation}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
              color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'
            }}
          >

            <Box className="infinity_inside">
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
            </Box>

            <Box className="infinity_inside">
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
            </Box>
            <Box className="infinity_inside">
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
            </Box>
            <Box className="infinity_inside">
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
            </Box>
            <Box className="infinity_inside">
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
            </Box>
            <Box className="infinity_inside">
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
            </Box>
            <Box className="infinity_inside">
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
              <h5>Licenses & certifications</h5>
              <h5>•</h5>
            </Box>




          </motion.div>

        </Box>

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

      <Box sx={{ height: { md: '30vh' } }} />

    </Box>
  );

}