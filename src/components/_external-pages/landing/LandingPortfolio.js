// LandingPortfolio.js (RTL-safe, lightweight)
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import React, { memo, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';

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
                            padding: "0.4em"

                        }}
                        >
                            <strong style={{ paddingInline: 6 }}>{it.num}</strong>
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

const LandingPortfolio = memo(function LandingPortfolio() {
    const theme = useTheme();

    const items = useMemo(
        () => [
            { num: '20+', label: 'projects completed' },
            { dot: true },
            { num: '5+', label: 'years of experience' },
            { dot: true },
            { num: '20+', label: 'projects completed' },
            { dot: true },
            { num: '5+', label: 'years of experience' },
            { dot: true },
            { num: '20+', label: 'projects completed' },
            { dot: true },
            { num: '5+', label: 'years of experience' },
            { dot: true },
            { num: '20+', label: 'projects completed' },
            { dot: true },
            { num: '5+', label: 'years of experience' },
            { dot: true },

        ],
        []
    );

    return (
        <Section
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
    );
});

export default LandingPortfolio;
