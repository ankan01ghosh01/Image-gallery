

const image_holder = (props) => {
    return (
        <>
            <div className="image-card group relative break-inside-avoid mb-4">
                <img
                    src={props.img.urls.small}
                    alt={props.img.alt_description}
                    className="new-image w-full rounded-xl" />
                <div className="hidden group-hover:block w-full text-sm absolute bottom-0 bg-black/50 text-white p-2">
                    <h3 className="image-name">
                        {props.img.alt_description}
                    </h3>
                    <sub className="time">
                        {
                            props.img.created_at.split("T")[0]
                        }
                    </sub>
                </div>
            </div>
        </>
    )
}

export default image_holder;
