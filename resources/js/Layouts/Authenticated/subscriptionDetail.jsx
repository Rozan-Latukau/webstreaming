export default function SubscriptionDetail({
    isPremium,
    name,
    remainingActiveDays,
    activeDays,
}) {

    const remainingDay = activeDays - remainingActiveDays;
    const loadProgres = () => {
        const progres = remainingDay / activeDays;
        if (progres < 0.25) {
            return 'w-3/12'
        } else if (progres < 0.5) {
            return 'w-6/12'
        } else if (progres < 0.75) {
            return 'w-9/12'
        } else {
            return 'w-full'
        }
    }

    return (
        <>
            {/* Basic */}
            {!isPremium && (
                <div class="mt-auto pr-[30px]">
                    <div class="p-5 bg-white rounded-[25px] outline outline-1 outline-[#f1f1f1]">
                        <div class="text-black text-lg font-semibold mb-8">
                            {name}
                        </div>
                        <div class="text-black text-sm mb-2">
                            {remainingActiveDays} of {activeDays} hari
                        </div>
                        <div class="rounded-full w-full h-[6px] bg-[#f1f1f1]">
                            <div class="rounded-full h-full w-2/12 bg-alerange"></div>
                        </div>
                    </div>
                </div>
            )}
            {/* Premium */}
            {isPremium && (
                <div className="mt-auto pr-[30px]">
                    <div className="p-5 bg-black rounded-[25px]">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="40"
                                width="40"
                                viewBox="0 0 384 512"
                                fill="#FFD43B"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                                />
                            </svg>
                        </a>
                        <div className="text-white text-lg font-semibold mt-4 mb-4">
                            {name}
                        </div>
                        <div className="text-white text-sm mb-2">
                            {remainingActiveDays} of {activeDays} hari
                        </div>
                        <div className="rounded-full w-full h-[6px] bg-[#333333]">
                            <div className={`rounded-full h-full bg-alerange ${loadProgres()}`}></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
