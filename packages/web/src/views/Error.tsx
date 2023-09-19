
function Error() {
    return <div className={"flex justify-center items-center flex-col h-screen -translate-y-24"}>
        <p className={"text-9xl font-bold"}>404</p>
        <div className={"text-2xl mt-10"}>Page not found - 404</div>
        <div className={"mt-16 py-2 px-6 rounded border text-base leading-8 cursor-pointer bg-[#474747] text-white shadow"}
             onClick={() => window.history.back()}>
            Back
        </div>
    </div>
}

export default Error;
