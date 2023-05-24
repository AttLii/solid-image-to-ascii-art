import { useImageContext } from "../contexts/image"

type Props = {
  hex: string
}
export default function ColorSetting({ hex }: Props) {
  const { hexToCharMap, setHexToChar } = useImageContext()

  const onInput = (e: InputEvent & {
    currentTarget: HTMLInputElement;
    target: Element;
  }) => {
    if (!e.data) return
    const hex = e.currentTarget.getAttribute("data-hex")
    if (!hex) return
    setHexToChar(hex, e.data)
  }

  return (
    <div class="flex align-middle justify-between gap-1">
      <div class="w-8 aspect-square rounded-sm" style={{
        background: hex
      }} />
      <input
        class="text-black rounded-sm p-1"
        type="text"
        maxlength="1"
        data-hex={hex}
        value={hexToCharMap().get(hex)}
        onInput={onInput}
      />
    </div >
  )
}