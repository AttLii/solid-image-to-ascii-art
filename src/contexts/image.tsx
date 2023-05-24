import { Accessor, JSX, Setter, createContext, createSignal, useContext } from "solid-js";


type Context = {
  file: Accessor<File | undefined>,
  setFile: (image: File | undefined) => void,
  coordinates: Accessor<string[][]>,
  setCoordinates: Setter<string[][]>
  hexToCharMap: Accessor<Map<string, string>>,
  setHexToCharMap: Setter<Map<string, string>>
  setHexToChar: (hex: string, char: string) => void,
  getCharForCoordinate: (x: number, y: number) => string
}

export const ImageContext = createContext<Context>();
export const useImageContext = () => {
  const context = useContext(ImageContext)
  if (!context) {
    throw new Error('useImageContext called outside of ImageContextProvider')
  }
  return context
}

type Props = {
  children: JSX.Element
}
export const ImageContextProvider = (props: Props) => {
  const [file, setFile] = createSignal<File | undefined>()
  const [coordinates, setCoordinates] = createSignal<string[][]>([], { equals: false })
  const [hexToCharMap, setHexToCharMap] = createSignal<Map<string, string>>(new Map(), { equals: false })

  const value = {
    file,
    setFile,
    coordinates,
    setCoordinates,
    hexToCharMap,
    setHexToCharMap,
    setHexToChar: (hex: string, char: string) => {
      setHexToCharMap((map) => {
        map.set(hex, char)
        return map
      })
    },
    getCharForCoordinate: (x: number, y: number) => {
      const hex = coordinates()[x][y]
      return hexToCharMap().get(hex)
    }
  }
  return (
    <ImageContext.Provider value={value}>
      {props.children}
    </ImageContext.Provider>
  )
}