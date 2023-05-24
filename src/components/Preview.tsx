import { createEffect, createSignal } from "solid-js"
import { useImageContext } from "../contexts/image"
import { rgbaToHex } from "../utils/color"

export default function Preview() {
  const { file, setCoordinates, setHexToCharMap } = useImageContext()
  const [src, setSrc] = createSignal("")

  createEffect(() => {
    if (!file()) return;
    const reader = new FileReader();
    reader.readAsDataURL(file()!);
    reader.onload = (e) => {
      if (typeof e.target?.result !== "string") return;
      setSrc(e.target.result)
    };
  })

  const onLoad = (e: Event & {
    currentTarget: HTMLImageElement;
    target: Element;
  }) => {
    console.time("Conversion time");
    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d", { willReadFrequently: true })
    if (!context) return;

    canvas.width = e.currentTarget.naturalWidth;
    canvas.height = e.currentTarget.naturalHeight;
    context.drawImage(e.currentTarget, 0, 0);
    const newCoords: string[][] = []
    const hexToCharMap = new Map<string, string>()

    for (let y = 0; y < canvas.width; ++y) {
      const row: string[] = []
      for (let x = 0; x < canvas.height; ++x) {
        const [r, g, b, a] = context.getImageData(x, y, 1, 1).data;
        const hex = rgbaToHex(r, g, b, a);
        row.push(hex)
        if (!hexToCharMap.has(hex)) {
          hexToCharMap.set(hex, String.fromCharCode(65 + hexToCharMap.size))
        }
      }
      newCoords.push(row)
    }
    setCoordinates(newCoords)
    setHexToCharMap(hexToCharMap)
    console.timeEnd("Conversion time");
  }

  return <img class="max-w-max mx-auto" src={src()} onLoad={onLoad} />
}