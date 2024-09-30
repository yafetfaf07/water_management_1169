const Login = () => {
    return (
        <>
        <section className="flex flex-col">
            <div className="flex flex-col">
                <span>Username</span>
                <input type="text" placeholder="Enter username" />
            </div>
            <div className="flex flex-col">
                <span>Password</span>
                <input type="password" placeholder="Enter password" />
            </div>
            <div>
                <button className="bg-black font-semibold">Sign in</button>
                <span className="text-gray-400">Don't have an account? <span className="text-black">Sign up!</span></span>
            </div>
        </section>
        
        </>
    )
}
export default Login