import { IframeTabsProps } from "."

declare global {
    namespace astroHTML.JSX {
        interface IntrinsicElements {
            "na-iframe-tabs": IframeTabsProps & HTMLAttributes
        }
    }
}
