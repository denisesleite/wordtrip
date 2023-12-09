import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/home"
import Continent from "./pages/continent/[slug]"

const theme = extendTheme({
  textStyles: {
    styleCard: {
      fontFamily: 'Barlow',
      color: 'heading.dark'
    },
    styleQuantities: {
      color: 'highlight.default',
      fontWeight: 'extrabold',
      fontSize: ['2xl', '4xl']
    },
    styleTextQuantities: {
      fontWeight:["inherit", "extrabold"], 
      color:"heading.dark",
      fontSize: ['medium', 'larger']
    }
  },
  colors: {
    heading: {
      dark: '#47585B',
      light: "#F5F8FA",
    },
    info: {
      50: '#99999980',
      default: '#999999',
    },
    highlight: {
      50: '#FFBA0880',
      default: '#FFBA08',
    },
  },
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/continent/:slug" element={<Continent />} />
    </>
  )
)

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
