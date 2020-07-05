import React from "react";

import Routes from "./src/routes";

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';


export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 8,
    colors: {
      ...DefaultTheme.colors,
      primary: "#FB0C06",
      accent: "#f1c40f",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
}
