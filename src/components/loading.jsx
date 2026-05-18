const randomHeights = Array.from({ length: 12 }, () => {
    return Math.floor(Math.random() * 200) + 200
})

const Loading = () => {

    return (

        <div className="columns-4 gap-4">

            {
                randomHeights.map((height, index) => (

                    <div
                        key={index}
                        className="
                        mb-4
                        break-inside-avoid
                        animate-pulse
                        "
                    >

                        <div
                            className="bg-gray-300 rounded-2xl"
                            style={{
                                height: `${height}px`
                            }}
                        ></div>

                        <div className="mt-2 space-y-2">
                            <div className="bg-gray-300 h-4 rounded w-3/4"></div>
                            <div className="bg-gray-300 h-4 rounded w-1/2"></div>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default Loading;