// COLORS

export const lightTheme = {
  colors: {
    white: '#FFF',
    grayClearOne: '#D5D5D5',
    grayClear: '#868080',
    grayOne: '#878787',
    gray: '#5f5b5b',
    purple: '#B06FF1',
    purpleDark: '#9F5FDE',
    pink: '#F270FC',
    blue: '#336AE9',
    red: '#ED5A68',
    green: '#28A138',
    blueClear: '#dcefed',
    colorCard: '#F5F8FF',
    colorGrayElephant: '#5F738C',
    colorBorderCard: '#DBE6FF',
    colorsBaseProductNormal: '#3f45ea',
    colorsBaseProductNormalHover: '#2e33b7',
    colorsBaseInkNormal: '#252A31',
    colorsBaseInkLight: '#5F738C',
    colorsBaseProductNormalActive: '#336AE9',
    colorNavyBlue: '#24234F',
    colorCardOrange: '#FCAD09',
    colorsBaseProductLightActive: '#ccd0ee',
    colorsBaseCloudNormal: '#EFF2F5',
    colorsBaseProductDarkHover: '#1C1F7F',
    colorsBaseInkNormalActive: '#0B0C0F',
    colorsBaseInkLighterActive: '#94a8be',
    colorsBaseInkLightHover: '#52647a',
    colorsBaseProductLighter: '#fafafe',
    backgroundColor: '#fff',
    orange: '#fcad09',
    form: '#fafafa',
  },
  gap: (v: number) => v * 8,
} as const;

export const darkTheme = {
  colors: {
    white: '#F8F8F2', // Dracula Foreground
    grayClearOne: '#6272A4', // Dracula Comment
    grayClear: '#6272A4',
    grayOne: '#BFBFBF',
    gray: '#44475A', // Dracula Current Line
    purple: '#BD93F9', // Dracula Purple
    purpleDark: '#8A63B5',
    pink: '#FF79C6', // Dracula Pink
    blue: '#8BE9FD', // Dracula Cyan (Água no tema escuro)
    red: '#FF5555', // Dracula Red
    green: '#50FA7B', // Dracula Green
    blueClear: '#253545', // Fundo sutil azulado escuro
    colorCard: '#44475A', // Dracula Current Line (Usado para cartões)
    colorGrayElephant: '#94A8BE',
    colorBorderCard: '#6272A4', // Bordas sutis
    colorsBaseProductNormal: '#BD93F9', // Dracula Purple (Cor principal da marca)
    colorsBaseProductNormalHover: '#D6ACFF',
    colorsBaseInkNormal: '#F8F8F2', // Texto principal (Claro)
    colorsBaseInkLight: '#BCC2CD', // Texto secundário
    colorsBaseProductNormalActive: '#FF79C6',
    colorNavyBlue: '#F8F8F2', // Invertido para leitura
    colorCardOrange: '#FFB86C', // Dracula Orange
    colorsBaseProductLightActive: '#44475A',
    colorsBaseCloudNormal: '#282A36', // Fundo principal
    colorsBaseProductDarkHover: '#191A21',
    colorsBaseInkNormalActive: '#FFFFFF',
    colorsBaseInkLighterActive: '#6272A4',
    colorsBaseInkLightHover: '#F8F8F2',
    colorsBaseProductLighter: '#282A36',
    backgroundColor: '#282A36', // Dracula Background
    orange: '#FFB86C',
    form: '#282A36', // Input bg
  },
  gap: (v: number) => v * 8,
} as const;

// Theme of Application
export type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

export const appThemes: AppThemes = {
  light: lightTheme,
  dark: darkTheme,
};

export const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
} as const;

export type AppBreakpoints = typeof breakpoints;
