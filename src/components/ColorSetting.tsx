import { useImageContext } from "../contexts/image"

type Props = {
  hex: string
}
export default function ColorSetting({ hex }: Props) {
  const { hexToCharMap, setHexToChar, hexToAmountMap } = useImageContext()

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
    <div>
      <p class="pl-10 mb-1">
        <span hidden>color {hex} amount</span>
        ({hexToAmountMap().get(hex)})
      </p>
      <div class="flex align-middle justify-between gap-2">
        <div class="w-8 aspect-square rounded-sm border-black border-2" style={{
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
      </div>
    </div >
  )
}