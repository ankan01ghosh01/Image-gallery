

export const Navbar = () => {
    return (
        <>
            <nav className="navbar flex justify-between items-center px-6 md:px-10 py-4 mb-10 shadow-sm">

                {/* Logo */}
                <div className="logo">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
                        BL
                        <b className="text-amber-600 text-2xl align-baseline">
                            DooE
                        </b>
                        D
                    </h2>
                </div>

                {/* Profile Image */}
                <div className="img-div h-12 w-12 rounded-full overflow-hidden border-2 border-amber-500 shadow-md">
                    <img
                        src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NTQzNzJ8MHwxfHNlYXJjaHw1MXx8dGVjaG5vbG9neXxlbnwwfHx8fDE3NzkxMTAxMDN8MA&ixlib"
                        alt="profile"
                        className="h-full w-full object-cover"
                    />
                </div>

            </nav>
        </>
    )
};



export const Footer = () => {
    return (

        <footer className="
            mt-20
            border-t
            border-zinc-800
            bg-black
            text-white
            px-10
            py-14
        ">

            <div className="
                max-w-7xl
                mx-auto
                grid
                grid-cols-1
                md:grid-cols-4
                gap-10
            ">

                {/* Logo Section */}
                <div>

                    <h2 className="text-3xl font-bold tracking-wide">
                        BL<sub className="text-amber-500">DoooE</sub>D
                    </h2>

                    <p className="mt-4 text-zinc-400 leading-relaxed">
                        Discover stunning wallpapers, photography,
                        creativity and aesthetic inspiration from
                        around the world.
                    </p>

                </div>

                {/* Explore */}
                <div>

                    <h3 className="text-xl font-semibold mb-4">
                        Explore
                    </h3>

                    <ul className="space-y-3 text-zinc-400">

                        <li className="hover:text-amber-500 transition-all cursor-pointer">
                            Trending
                        </li>

                        <li className="hover:text-amber-500 transition-all cursor-pointer">
                            Nature
                        </li>

                        <li className="hover:text-amber-500 transition-all cursor-pointer">
                            Technology
                        </li>

                        <li className="hover:text-amber-500 transition-all cursor-pointer">
                            Architecture
                        </li>

                    </ul>

                </div>

                {/* Community */}
                <div>

                    <h3 className="text-xl font-semibold mb-4">
                        Community
                    </h3>

                    <ul className="space-y-3 text-zinc-400">

                        <li className="hover:text-amber-500 transition-all cursor-pointer">
                            Creators
                        </li>

                        <li className="hover:text-amber-500 transition-all cursor-pointer">
                            Discussions
                        </li>

                        <li className="hover:text-amber-500 transition-all cursor-pointer">
                            Collections
                        </li>

                        <li className="hover:text-amber-500 transition-all cursor-pointer">
                            Support
                        </li>

                    </ul>

                </div>

                {/* Newsletter */}
                <div>

                    <h3 className="text-xl font-semibold mb-4">
                        Stay Updated
                    </h3>

                    <p className="text-zinc-400 mb-4">
                        Get fresh wallpapers and inspiration weekly.
                    </p>

                    <div className="flex flex-col gap-3">

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="
                                px-4
                                py-3
                                rounded-xl
                                bg-zinc-900
                                border
                                border-zinc-700
                                outline-none
                                focus:border-amber-500
                                transition-all
                            "
                        />

                        <button className="
                            py-3
                            rounded-xl
                            bg-amber-500
                            text-black
                            font-semibold

                            transition-all
                            duration-300

                            hover:scale-105
                            hover:shadow-2xl
                            hover:shadow-amber-500/30

                            active:scale-95
                        ">
                            Subscribe
                        </button>

                    </div>

                </div>

            </div>

            {/* Bottom */}
            <div className="
                border-t
                border-zinc-800
                mt-12
                pt-6
                flex
                flex-col
                md:flex-row
                justify-between
                items-center
                gap-4
                text-zinc-500
                text-sm
            ">

                <p>
                    © 2026 BLDoooED. All rights reserved.
                </p>

                <div className="flex gap-6">

                    <span className="hover:text-amber-500 cursor-pointer transition-all">
                        Privacy
                    </span>

                    <span className="hover:text-amber-500 cursor-pointer transition-all">
                        Terms
                    </span>

                    <span className="hover:text-amber-500 cursor-pointer transition-all">
                        Contact
                    </span>

                </div>

            </div>

        </footer>
    )
}

