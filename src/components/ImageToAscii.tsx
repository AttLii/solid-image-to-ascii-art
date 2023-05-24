import { Show } from "solid-js";
import { useImageContext } from "../contexts/image";
import Uploader from "./Uploader";
import Preview from "./Preview";
import Ascii from "./Ascii";
import Settings from "./Settings";

export default function ImageToAscii() {
  const { file } = useImageContext()
  return (
    <Show when={file()} fallback={<Uploader />}>
      <div class="flex flex-col gap-4 justify-center">
        <Preview />
        <div class="flex flex-nowrap gap-2">
          <Settings />
          <Ascii />
        </div>
      </div>
    </Show>
  )
}