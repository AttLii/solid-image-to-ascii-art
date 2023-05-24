import { useImageContext } from "../contexts/image";

export default function Uploader() {
  const { setFile } = useImageContext()

  let input: undefined | HTMLInputElement
  const onClick = () => {
    if (!input) return;
    input.dispatchEvent(new MouseEvent('click'))
  }
  const onChange = (e: Event & {
    currentTarget: HTMLInputElement;
    target: Element;
  }) => {
    if (!e.currentTarget.files) {
      setFile(undefined)
      return
    }

    setFile(e.currentTarget.files[0])
  }
  return (
    <>
      <button
        onClick={onClick}
        disabled={Boolean(input)}
        class="w-full p-5 bg-slate-700 enabled:cursor-pointer disabled:cursor-default"
      >
        Click to upload image
      </button>
      <input ref={input} type="file" hidden onChange={onChange} accept="image/png, image/jpeg" />
    </>
  )
}