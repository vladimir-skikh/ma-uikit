// @ts-ignore
import React from "react";

import type {Preview} from "@storybook/react";
import Theme from "../src/components/Theme/Theme";

const preview: Preview = {
    parameters: {
        options: {
            storySort: (a, b) =>
                a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, {numeric: true}),
        },
    },
    decorators: [
        (Story) => (
            <Theme>
                <Story />
            </Theme>
        )
    ]
};

export default preview;
