import { RefObject, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { BASE_PATH, Path } from "./utils"

export const useScroll = (ref: RefObject<HTMLDivElement>, path: Path) => {
    const navigate = useNavigate()
    const { pathname, state } = useLocation()
    const { scrollId } = state as { scrollId?: string } || ''

    useEffect(() => {
        console.log('hello out', pathname, state)
        if (pathname === BASE_PATH && scrollId === path) {
            console.log('hello in')
            ref.current?.scrollIntoView({ behavior: 'smooth' })
            navigate(pathname, { replace: true })
        }
    }, [state, pathname])
}