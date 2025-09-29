'use client'

import type { WidgetConfig } from '@lifi/widget'
import { LiFiWidget, WidgetSkeleton } from '@lifi/widget'
import { ClientOnly } from './ClientOnly'

export function Widget() {
 const config = {
  variant: "wide",
  subvariant: "split",
  appearance: "light",
  hiddenUI: ['poweredBy'], 
  theme: {
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: "#1d19f5"
          },
          secondary: {
            main: "#0b19e5"
          },
          background: {
            paper: "#0eece8"
          },
          text: {
            secondary: "#234329"
          },
          success: {
            main: "#0df283"
          },
          common: {
            white: "#deed07"
          },
          grey: {
            300: "#150404",
            700: "#0499be",
            800: "#450707"
          }
        }
      },
      dark: {
        palette: {
          primary: {
            main: "#5C67FF"
          },
          secondary: {
            main: "#F7C2FF"
          }
        }
      }
    },
    typography: {
      fontFamily: "Verdana, sans-serif"
    },
    container: {
      boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
      borderRadius: "16px"
    },
    shape: {
      borderRadius: 16,
      borderRadiusSecondary: 16
    }
  },
  walletConfig: {
    onConnect: ()=>{e()},
    usePartialWalletManagement: true
  }
}

  return (
    <ClientOnly fallback={<WidgetSkeleton config={config} />}>
      <LiFiWidget config={config} integrator="nextjs-example" />
    </ClientOnly>
  )
}
