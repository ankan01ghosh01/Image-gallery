

const pages_count = (props) => {
    return (
        <div className="flex gap-10 items-center">

            <button
                type="button"
                className='
        px-8 py-2
        rounded-xl
        bg-amber-50
        text-black
        border-2

        transition-all duration-300 ease-in-out

        hover:scale-110
        hover:bg-amber-200
        hover:shadow-2xl

        active:scale-95
        '
                onClick={props.prev_page}
            >
                Prev
            </button>

            <h4 className="
        text-xl
        p-5
        rounded-full
        bg-amber-700
        text-white
        shadow-xl
    ">
                {props.page_no}
            </h4>

            <button
                type="button"
                className='
        px-8 py-2
        rounded-xl
        bg-amber-50
        text-black
        border-2

        transition-all duration-300 ease-in-out

        hover:scale-110
        hover:bg-amber-200
        hover:shadow-2xl

        active:scale-95
        '
                onClick={props.next_page}
            >
                Next
            </button>

        </div>
    )
}

export default pages_count;
