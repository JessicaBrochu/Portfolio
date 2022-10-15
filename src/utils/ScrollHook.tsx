import { RefObject, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { BASE_PATH, Path } from "./utils"

export const useScroll = (ref: RefObject<HTMLDivElement>, path: Path) => {
    const navigate = useNavigate()
    const { pathname, state } = useLocation()
    const { scrollId } = state as { scrollId?: string } || ''

    useEffect(() => {
        console.log(scrollId)
        if (pathname === BASE_PATH && scrollId === path) {
            ref.current?.scrollIntoView({ behavior: 'smooth' })
            navigate(pathname, { replace: true })
        }
    }, [state, pathname])
}