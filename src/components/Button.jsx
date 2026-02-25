

export const Button = ({className="", children, size = "md"}) =>{
    
    const baseClasse = "relative overflow-hidden rounded-full font-medium";
    
    const sizeClasse = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    }

    const classe = `${baseClasse} ${sizeClasse[size]} ${className}`;
    return (
        <button className={classe}>
            <span className="flex relative items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
} 