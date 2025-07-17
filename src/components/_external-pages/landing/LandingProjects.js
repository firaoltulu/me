// Optimized and cleaned-up LandingProjects.js
import { Link as RouterLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { styled, useTheme, alpha } from '@mui/material/styles';
import { Box, IconButton, Link, Typography } from '@mui/material';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { MotionInView, varFadeInUp, varFadeInDown, TextAnimate } from '../../animate';
import { PATH_PAGE } from 'src/routes/paths';
import useNav from '../../../hooks/useNav';

// Assets
import grid from '../../../assets/project/grid.png';
// import screens from './screens'; // Create a file to export all screen image paths for cleaner imports
import screen_dark_1 from '../../../assets/project/project_one/screen_dark_1.png';
import screen_dark_2 from '../../../assets/project/project_one/screen_dark_2.png';
import screen_dark_3 from '../../../assets/project/project_one/screen_dark_3.png';
import screen_light_1 from '../../../assets/project/project_one/screen_light_1.png';
import screen_light_2 from '../../../assets/project/project_one/screen_light_2.png';
import screen_light_3 from '../../../assets/project/project_one/screen_light_3.png';
import screen_blue from '../../../assets/project/project_two/screen-blue.png';
import block1_blue from '../../../assets/project/project_two/block1-blue.png';
import block2_blue from '../../../assets/project/project_two/block2-blue.png';
import sidebar_blue from '../../../assets/project/project_two/sidebar-blue.png';
import project_three_one from '../../../assets/project/project_three/project_1.png';
import project_three_two from '../../../assets/project/project_three/project_2.png';
import project_three_three from '../../../assets/project/project_three/project_3.png';



const screens = [
    {
        id: 'project1',
        images: [screen_light_1, screen_light_2, screen_light_3],
        darkImages: [screen_dark_1, screen_dark_2, screen_dark_3],
        link: PATH_PAGE.project_one,
        content: `Wede is a trading platform that contains many features like orderflow of a cryptocurrency pairs of a different platform. I was in charge of developing both backend and frontend of the platform.`,
        gradient: theme => theme.palette.mode === 'light'
            ? `linear-gradient(180deg, ${alpha("#c7c7c7", 0.1)}, ${alpha("#434566", 1)}, ${alpha("#434566", 1)})`
            : `linear-gradient(180deg, ${alpha("#373737", 0.1)}, ${alpha("#48495b", 1)}, ${alpha("#3f4166", 1)})`,
    },
    {
        id: 'project2',
        images: [screen_blue, block1_blue, block2_blue, sidebar_blue],
        link: PATH_PAGE.project_two,
        content: `This is a solid and easy-to-use web-based software to manage content. With its intuitive dashboard and hand-crafted UI, helps every customer to easily manage every kind of content he/she needs.`,
        gradient: theme => theme.palette.mode === 'light'
            ? `linear-gradient(180deg, ${alpha("#c7c7c7", 0.1)}, ${alpha("#695b59", 1)}, ${alpha("#66443f", 1)})`
            : `linear-gradient(180deg, ${alpha("#373737", 0.1)}, ${alpha("#6c6564", 1)}, ${alpha("#66443f", 1)})`,
    },
    {
        id: 'project3',
        images: [project_three_one, project_three_two, project_three_three],
        link: PATH_PAGE.project_three,
        content: `Utopia is a cutting-edge e-learning company dedicated to transforming education through technology. the platform includes an e-learning platform, a robust course management system, and a dynamic website.`,
        gradient: theme => theme.palette.mode === 'light'
            ? `linear-gradient(180deg, ${alpha("#c7c7c7", 0.1)}, ${alpha("#46304d", 1)}, ${alpha("#46304d", 1)})`
            : `linear-gradient(180deg, ${alpha("#373737", 0.1)}, ${alpha("#46304d", 1)}, ${alpha("#46304d", 1)})`,
    },
];

const RootStyle = styled('div')({});

const ScreenStyle = styled(MotionInView)(({ theme }) => ({
    paddingRight: 2,
    paddingBottom: 1,
    maxWidth: 160,
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
        maxWidth: 320,
        paddingRight: 4,
        borderRadius: 12,
    },
    '& img': {
        borderRadius: 8,
        [theme.breakpoints.up('sm')]: {
            borderRadius: 12,
        },
    },
}));

const COMMON = {
    scaleX: 0.86,
    skewY: 8,
    skewX: 0,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    opacity: 0,
};

const createVariant = (x, y) => ({
    initial: COMMON,
    animate: { ...COMMON, translateX: x, translateY: y, opacity: 1 },
    exit: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.94, ease: [0.43, 0.13, 0.23, 0.96] },
    },
});

const variants = {
    left: createVariant('20%', -40),
    center: createVariant('50%', -100),
    right: createVariant('80%', -150),
    left_second: createVariant('-20%', -40),
    center_second: createVariant('-50%', -120),
    right_second: createVariant('-80%', -170),
};

const ProjectScreens = ({ isLight, isRTL, images, animateVariants }) => (
    <Box className="project_image_custom_stair">
        {images.map((src, index) => (
            <ScreenStyle
                key={index}
                threshold={0.72}
                variants={
                    index === 0
                        ? isRTL
                            ? variants.left_second
                            : animateVariants.left
                        : index === 1
                            ? isRTL
                                ? variants.center_second
                                : animateVariants.center
                            : isRTL
                                ? variants.right_second
                                : animateVariants.right
                }
                transition={{ duration: 0.72, ease: 'easeOut' }}
                sx={{
                    boxShadow: `${isRTL ? -80 : 80}px -40px 80px ${alpha(
                        isLight ? '#666' : '#000',
                        0.48
                    )}`,
                    zIndex: 3 - index,
                    position: 'absolute',
                    ...(index === 2 && { boxShadow: 'none' }),
                }}
            >
                <motion.div animate={{ y: index * -10 + 5 * (index % 2 ? 1 : -1) }} transition={{ duration: 8, repeat: Infinity }}>
                    <img alt={`screen ${index + 1}`} src={src} />
                </motion.div>
            </ScreenStyle>
        ))}
    </Box>
);

export default function LandingProjects() {
    const theme = useTheme();
    const isRTL = theme.direction === 'rtl';
    const isLight = theme.palette.mode === 'light';
    const { navOption, isLock, onScrollChange } = useNav();
    const [ref, inView] = useInView();
    const targetRef = useRef(null);

    useEffect(() => {
        if (inView && !isLock) onScrollChange(navOption[2]);
    }, [inView]);

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


    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end start'],
    });

    const useScrollX = (values) => useTransform(scrollYProgress, values.inputs, values.outputs);

    const x1 = useScrollX({ inputs: [0, 0.10, 0.30], outputs: ['0%', '0%', '-100%'] });
    const x2 = useScrollX({ inputs: [0, 0.30, 0.48, 0.65], outputs: ['100%', '-100%', '-100%', '-200%'] });
    const x3 = useScrollX({ inputs: [0, 0.30, 0.65, 0.85, 1], outputs: ['200%', '100%', '-200%', '-200%', '-200%'] });

    const rightx1 = useScrollX({ inputs: [0, 0.13, 0.30], outputs: ['0%', '0%', '100%'] });
    const rightx2 = useScrollX({ inputs: [0, 0.30, 0.50, 0.65], outputs: ['-100%', '100%', '100%', '200%'] });
    const rightx3 = useScrollX({ inputs: [0, 0.30, 0.65, 0.85, 1], outputs: ['-200%', '-100%', '200%', '200%', '200%'] });

    const animatedX = [x1, x2, x3];
    const animatedRightX = [rightx1, rightx2, rightx3];
    const allProjects = screens.map((project, idx) => ({
        ...project,
        x: isRTL ? animatedRightX[idx] : animatedX[idx],
    }));

    return (
        <RootStyle sx={{ color: isLight ? '#371f0e' : '#fcf2ec' }} id="project_section" ref={ref}>
            <Box ref={targetRef} className="projects">

                <Box className="projects_stiky">
                    <Box className="project_title">
                        <TextAnimate
                            text="Projects"
                            component={motion.h2}
                            sx={{
                                typography: 'h2',
                                textTransform: 'uppercase',
                                mt: 2.5,
                                mb: 1.25,
                                fontFamily: 'Ade display, sans-serif',
                                fontSize: '3.5em',
                                fontWeight: 400,
                            }}
                        />
                    </Box>

                    <Box className="project_slider">
                        {allProjects.map(({ id, x, imageStyles, content, images, link, gradient }, i) => (
                            <motion.div key={id} className={`project_0${i + 1}`} style={{
                                x,
                                border: '1px solid',
                                borderBottom: 'none',
                                borderTop: 'none',
                                borderColor: isLight ? '#371f0e' : '#fcf2ec',
                            }}>
                                <Box className={`project_image pr_0${i + 1}`} sx={{ backgroundImage: gradient }}>
                                    <Box className="project_image_custom">
                                        <Box component="img" src={grid} />
                                        {images.length === 3 ? (
                                            <ProjectScreens
                                                isLight={isLight}
                                                isRTL={isRTL}
                                                images={images}
                                                animateVariants={variants}
                                            />
                                        ) : (
                                            images.map((src, idx) => (
                                                <Box key={idx} sx={{ position: 'absolute', top: 0 }}>
                                                    <MotionInView variants={idx === 0 ? varFadeInUp : varFadeInDown}>
                                                        <motion.div animate={{ y: [0, -10 * (idx + 1), 0] }} transition={{ duration: 8, repeat: Infinity }}>
                                                            <img alt={`screen ${idx}`} src={src} />
                                                        </motion.div>
                                                    </MotionInView>
                                                </Box>
                                            ))
                                        )}
                                    </Box>
                                </Box>

                                <Box className="project_info">
                                    <Box className="project_copy">
                                        <Box className="font_light">
                                            {content}
                                            <br /><br />
                                            <Link variant="h6" component={RouterLink} to={link} sx={{ color: isLight ? '#371f0e' : '#fcf2ec' }}>
                                                Read More
                                                <IconButton><ArrowRightAltIcon fontSize="small" /></IconButton>
                                            </Link>
                                        </Box>
                                    </Box>

                                    <Box className="project_num">
                                        <Box className="font_light no_wrap">
                                            <TextAnimate
                                                text={`0${i + 1}`}
                                                component={motion.h6}
                                                sx={{
                                                    typography: 'h6',
                                                    textTransform: 'uppercase',
                                                    mt: 2.5,
                                                    mb: 1.25,
                                                    fontFamily: 'Ade display, sans-serif',
                                                    fontSize: '3.5em',
                                                    fontWeight: 400,
                                                    color: isLight ? '#371f0e' : '#fcf2ec',
                                                }}
                                            />
                                            0{i + 1} / 03
                                        </Box>
                                    </Box>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </Box>

            </Box>

            <Box className="loop_scroll" sx={{
                borderTop: '1px solid #371f0e33',
                borderBottom: '1px solid #371f0e33',
                borderColor: theme.palette.mode === 'light' ? '#371f0e33' : '#fcf2ec66',
                [theme.breakpoints.up('md')]: {
                    height: '5em'
                },
            }
            }>

                <motion.div className="infinity_content" animate={animation} style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",

                }}>

                    <Box className="infinity_inside" sx={{
                        color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                    }}>

                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>

                    </Box>

                </motion.div>

            </Box >

        </RootStyle>
    );

}
