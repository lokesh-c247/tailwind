const Header = () => (
    <>
        <nav className="bg-purple-800 text-white flex justify-between sm:bg-black ">
            <img className="w-10 mx-5 rounded" src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="" srcset="" />
            <ul className="flex px-20 py-4 space-x-3 justify-end ">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Catolougue </li>
                <li className="cursor-pointer">Contact us </li>
            </ul>
        </nav>
        <main className="flex items-center rounded bg-fuchsia-100 justify-around">
            <div className="bg-fuchsia-100 h-30 py-40">
                <div className="text-3xl pl-9">
                    The best phone
                </div>
                <div className="pl-9">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur esse, deserunt doloribus quaerat in maxime? Corrupti, eaque? Consequatur saepe, aliquid impedit voluptate nostrum illo harum, minima, ullam esse quam numquam.</p>
                </div>
                <div className="buttons pl-9 text-cyan-100 flex space-x-3 ">
                    <button className="bg-red-500  hover:text-slate-900 rounded py-2 px-2">buy now</button>
                    <button className="bg-cyan-500  hover:text-slate-900 py-2 px-2">Contact us</button>
                    <button className = "btn">TEST</button>
                </div>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1474031317822-f51f48735ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" srcset="" />
            </div>
        </main>
    </>
);

export default Header;