import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light", // Set this to light mode by default
    useSystemColorMode: false, // You can set this to true to use the system theme
  },
  styles: {
    global: {
      body: {
        bg: "gray.50", // Default background color in light mode
        color: "gray.800", // Default text color in light mode
      },
    },
  },
});

export default theme;
