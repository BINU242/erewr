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
        }
      }
    }
  } as Partial<WidgetConfig>

  return (
    <ClientOnly fallback={<WidgetSkeleton config={config} />}>
      <LiFiWidget config={config} integrator="nextjs-example" />
    </ClientOnly>
  )
}
