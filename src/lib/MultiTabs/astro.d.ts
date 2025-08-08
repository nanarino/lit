import { MultiTabsProps } from "."

declare global {
    namespace astroHTML.JSX {
        interface IntrinsicElements {
            "na-multi-tabs": MultiTabsProps
        }
    }
}
