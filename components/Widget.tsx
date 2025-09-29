'use client'

import type { WidgetConfig } from '@lifi/widget'
import { LiFiWidget, WidgetSkeleton } from '@lifi/widget'
import { ClientOnly } from './ClientOnly'

export function Widget() {
 const config = {
  variant: "wide",
  appearance: "system",
  hiddenUI: ['poweredBy'],
  theme: {
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: "#5C67FF"
          },
          secondary: {
            main: "#F7C2FF"
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
      fontFamily: "Inter, sans-serif"
    },
    container: {
      boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
      borderRadius: "16px"
    },
    shape: {
      borderRadius: 16,
      borderRadiusSecondary: 16
    }
  }
}
