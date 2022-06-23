import Link from 'next/link'
import { CreateInterpretationImage } from "../../components"

export const CreateInterPretationLink = ({ className, children, pageOn, ...props }) => {
    return (
        <Link href="/create-interpretation" className={`${className}`} {...props}>
            <CreateInterpretationImage pageOn={pageOn} />
        </Link>
    )
}
