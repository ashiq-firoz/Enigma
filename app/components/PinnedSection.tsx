

const PinnedSection = () => {
    return (
        <section className="grid grid-cols-2 px-3 container">
            <div className="col-1">
                <img
                    src="/events/session2.png"
                    alt="Your Image"
                    className="w-full lg:w-[30vh] h-[40vh] lg:h-[50vh] object-cover rounded-md"
                />
            </div>
            <div className="col-2">
                <img
                    src="/events/session2.png"
                    alt="Your Image"
                    className="w-full lg:w-[30vh] h-[40vh] lg:h-[50vh] object-cover rounded-md"
                />
            </div>
        </section>
    );
}

export default PinnedSection;