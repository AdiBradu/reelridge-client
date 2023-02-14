import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteColor {
    main100?: string;
    main200?: string;
    main600?: string;
    main700?: string;
    main900?: string;
  }

  interface SimplePaletteColorOptions {
    main100?: string;
    main200?: string;
    main600?: string;
    main700?: string;
    main900?: string;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h0: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h0?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h0: true;
  }
}

const font = "'Work Sans', sans-serif";

const theme = createTheme();

// breakpoints
theme.breakpoints.values.lg = 1440;

// primary color Yellowstone
theme.palette.primary.main = '#FFA845';
theme.palette.primary.main100 = '#FFE7CC';
theme.palette.primary.main200 = '#FFE7CC';
theme.palette.primary.main600 = '#CC6D00';
theme.palette.primary.main700 = '#995200';

// secondary color Pitfall
theme.palette.secondary.main = '#201F24';
theme.palette.secondary.main900 = '#18181B';

//typography
theme.typography.h0 = {
  fontSize: '96px',
  lineHeight: '96px',
  fontFamily: font,
  [theme.breakpoints.up('lg')]: {
    fontSize: '128px',
    lineHeight: '128px',
  },
};

theme.typography.h1 = {
  fontSize: '48px',
  lineHeight: '56px',
  fontWeight: 400,
  fontFamily: font,
  textTransform: 'capitalize',
  [theme.breakpoints.up('lg')]: {
    fontSize: '64px',
    lineHeight: '72px',
  },
};

theme.typography.h2 = {
  fontSize: '40px',
  lineHeight: '48px',
  fontWeight: 500,
  fontFamily: font,
  textTransform: 'capitalize',
  [theme.breakpoints.up('lg')]: {
    fontSize: '48px',
    lineHeight: '56px',
  },
};

theme.typography.h3 = {
  fontSize: '24px',
  lineHeight: '32px',
  fontWeight: 400,
  fontFamily: font,
  [theme.breakpoints.up('lg')]: {
    fontSize: '32px',
    lineHeight: '40px',
  },
};

theme.typography.body1 = {
  fontSize: '16px',
  lineHeight: '32px',
  fontWeight: 400,
  fontFamily: font,
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
    lineHeight: '32px',
  },
};

theme.typography.caption = {
  fontSize: '10px',
  lineHeight: '16px',
  fontWeight: 400,
  letterSpacing: '0.6px',
  fontFamily: font,
  textTransform: 'uppercase',
  [theme.breakpoints.up('lg')]: {
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.75px',
  },
};

export default theme;
