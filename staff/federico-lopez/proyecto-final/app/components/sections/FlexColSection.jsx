export const FlexColSection = ({ className, children, ...props }) => {
    return (
        <section {...props}
            className={`w-full h-full overflow-scroll flex flex-col ${className}`}>
            {children}
        </section>
    )
}