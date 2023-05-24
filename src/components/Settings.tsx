import { For } from "solid-js"
import { useImageContext } from "../contexts/image"
import ColorSetting from "./ColorSetting";

export default function Settings() {
  const { hexToCharMap, setHexToChar, hexToAmountMap } = useImageContext()

  const sortByAmount = (a: string, b: string) => {
    const aAmount = hexToAmountMap().get(a) || 0
    const bAmount = hexToAmountMap().get(b) || 0
    if (aAmount > bAmount) return -1
    if (aAmount < bAmount) return 1
    return 0
  }

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
    <div class="p-4 bg-slate-600 rounded-md">
      <h2 class="mb-4 whitespace-nowrap">Change character for a color</h2>
      <ul class="flex flex-col gap-2">
        <For each={Array.from(hexToCharMap().keys()).sort(sortByAmount)}>
          {hex => (
            <li>
              <ColorSetting hex={hex} />
            </li>
          )}
        </For>
      </ul>
    </div>
  )
} 