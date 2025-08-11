import { useEffect, useMemo } from "react";
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Paper, Rating, Container, Typography, useMediaQuery } from '@mui/material';
//
import { varFadeInUp, MotionInView, TextAnimate } from '../../animate';
// Hooks
import useNav from '../../../hooks/useNav';
// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    name: 'Gadisa H',
    rating: 5,
    dateCreate: 'April 19, 2023',
    content: `Excellent Work! Thanks a lot!`
  },
  {
    name: 'Habtamu T',
    rating: 4.1,
    dateCreate: 'January 1, 2021',
    content: `U have shown consistently exhibited a profound understanding of Next.js and its core principles From the initial project kick-off to the final deployment.`
  },
  {
    name: 'Eliya M',
    rating: 5,
    dateCreate: 'December 08, 2023',
    content: `On a personal note, an absolute pleasure to work with.`
  },
  {
    name: 'Endale C',
    rating: 4,
    dateCreate: 'August 26, 2022',
    content: `it is without reservation that I highly recommend you for any organization seeking a skilled and experienced BackEnd developer.`
  },
  {
    name: 'Bahiru H',
    rating: 5,
    dateCreate: 'October 29, 2023',
    content: `Throughout our collaboration, I have been thoroughly impressed by your diligence and professionalism. They consistently adhere to project deadlines and effectively communicate progress updates, keeping the team informed and involved throughout.Tnx u..`
  },
];

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

TestimonialCard.propTypes = {
  testimonial: PropTypes.object
};

function TestimonialCard({ testimonial }) {
  const theme = useTheme();

  const { name, rating, dateCreate, content } = testimonial;
  return (
    <Paper
      sx={{
        mt: 3,
        p: 3,
        color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        backgroundImage: theme.palette.mode === 'light'
          ? `linear-gradient(45deg, ${theme.palette.grey[100]} 0%, ${alpha(theme.palette.grey[0], 1)} 100%)`
          : `linear-gradient(45deg, ${theme.palette.grey[700]} 0%, ${alpha(theme.palette.grey[900], 1)} 100%)`,
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>
      <Typography gutterBottom component="p" variant="caption" >
        {dateCreate}
      </Typography>
      <Rating value={rating} readOnly size="small" />
      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {content}
      </Typography>
    </Paper>
  );
}

export default function LandingTestimonials() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const { navOption, isLock, onScrollChange } = useNav();

  const [ref, inView] = useInView();


  useEffect(() => {
    if (inView && (isLock === false)) {
      onScrollChange(navOption[3]);
    } else {
    }
  }, [inView])


  // Content items (cleaned up to avoid repeated JSX)
      const items = useMemo(
          () => [
              { num: '', label: 'Licenses & certifications' },
              { dot: true },
              { num: '', label: 'Licenses & certifications' },
              { dot: true },
              { num: '', label: 'Licenses & certifications' },
              { dot: true },
              { num: '', label: 'Licenses & certifications' },
              { dot: true },
              { num: '', label: 'Licenses & certifications' },
              { dot: true },
              { num: '', label: 'Licenses & certifications' },
              { dot: true },

              { num: '', label: 'Licenses & certifications' },
              { dot: true },
              

              
          ],
          []
      );

  return (
    <Box ref={ref}>

      <RootStyle id='testimonials_section'>

        <Container maxWidth="lg" sx={{
          position: 'relative',
          top: 0,
          left: 0,
          height: '100%', color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
        }}>

          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent={{ xs: 'center', md: 'space-between' }}
            sx={{ height: '100%' }}
          >

            <Grid item xs={10} md={4}>
              <Box sx={{ maxWidth: { md: 360 } }}>

                <TextAnimate
                  text="Testimonials"
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

                <br />

                <TextAnimate
                  text="Who love my work"
                  component={motion.h6}

                  sx={{
                    typography: 'h6',
                    'textTransform': 'uppercase',
                    'marginTop': '20px',
                    'marginBottom': '10px',
                    'fontFamily': 'Ade display, sans-serif',
                    'fontSize': '3.5em',
                    'fontWeight': 400,
                  }}
                >

                </TextAnimate>


                <MotionInView variants={varFadeInUp}>
                  <Typography sx={{
                    color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                  }}>
                    My goal is to create a product and service that you’re satisfied with and customer use it every day.
                  </Typography>
                </MotionInView>


              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={7}
              lg={6}
              sx={{
                right: { md: 24 },
                position: { md: 'absolute' }
              }}
            >
              <Grid container spacing={isDesktop ? 3 : 0} alignItems="center">
                <Grid item xs={12} md={6}>
                  {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
                    <MotionInView key={testimonial.name} variants={
                      {
                        ...varFadeInUp,
                        animate: {
                          ...varFadeInUp.animate, transition: {
                            duration: 0.6,
                            ease: [0.43, 0.13, 0.93, 0.96]
                          }
                        },
                        exit: {
                          ...varFadeInUp.exit, transition: {
                            duration: 0.6,
                            ease: [0.43, 0.13, 0.23, 0.96]
                          }
                        }
                      }
                    }>
                      <TestimonialCard testimonial={testimonial} />
                    </MotionInView>
                  ))}
                </Grid>

                <Grid item xs={12} md={6}>
                  {TESTIMONIALS.slice(3, 6).map((testimonial, index) => (
                    <MotionInView key={testimonial.name} variants={
                      {
                        ...varFadeInUp,
                        animate: {
                          ...varFadeInUp.animate, transition: {
                            duration: 0.94,
                            ease: [0.43, 0.13, 0.93, 0.96]
                          }
                        },
                        exit: {
                          ...varFadeInUp.exit, transition: {
                            duration: 0.94,
                            ease: [0.43, 0.13, 0.23, 0.96]
                          }
                        }
                      }
                    }>
                      <TestimonialCard testimonial={testimonial} />
                    </MotionInView>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box sx={{ height: { xs: '1vh' } }} />

        </Container>

      </RootStyle>

      <Box sx={{ height: { xs: '5vh' } }} />

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
