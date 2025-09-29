const config = {
  variant: "wide",
  subvariant: "split",
  appearance: "light",
  theme: {
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: "#f7557c"
          },
          secondary: {
            main: "#00A35A"
          },
          background: {
            default: "#ffeff3",
            paper: "#ffffff"
          },
          text: {
            primary: "#190006",
            secondary: "#766066"
          },
          grey: {
            200: "#F0E5E8",
            300: "#E5D7DA",
            700: "#7A666B",
            800: "#58373F"
          },
          playground: {
            main: "#f7557c"
          }
        }
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif"
    },
    container: {
      boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.12)",
      borderRadius: "16px"
    },
    shape: {
      borderRadius: 16,
      borderRadiusSecondary: 16,
      borderRadiusTertiary: 24
    },
    components: {
      MuiCard: {
        defaultProps: {
          variant: "elevation"
        }
      },
      MuiNavigationTabs: {
        styleOverrides: {
          root: ({theme:e})=>({[`.${bu.indicator}`]:{backgroundColor:"#ffffff",filter:`drop-shadow(0 1px 4px rgba(${e.vars.palette.common.onBackgroundChannel} / 0.08))`,borderRadius:"16px"}})
        }
      }
    }
  }
}