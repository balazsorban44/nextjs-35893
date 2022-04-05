import { useRouter } from "next/router"

export default function Page() {
  return useRouter().asPath
}
