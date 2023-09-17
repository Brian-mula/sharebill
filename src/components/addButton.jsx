export default function Button({children,onClick}) {
return(
    <button onClick={onClick} className="bg-purple-500 px-4 py-3 hover:bg-purple-600 mt-4">
        {children}
    </button>
)
}