export const FlexColSection = ({ className, children, ...props }) => {
    return (
        <section {...props}
            className={`w-full min-h-screen h-full overflow-scroll py-4 px-4 flex flex-col ${className}`}>
            {children}
        </section>
    )
}