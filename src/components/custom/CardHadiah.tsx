import { CardHadiahProps } from "@/utils/types";
import Trophy from "/assets/trophy.svg";

const podiumStyles = {
    1: {
        container: "bg-gradient-to-b from-invofest_secondary to-invofest w-[34%] max-w-[130px] sm:max-w-none sm:w-[250px] h-[270px] sm:h-[370px] shadow-2xl z-20",
        cutoutHeight: "h-[65px] sm:h-[100px]",
        titleColor: "text-yellow-300 text-sm sm:text-2xl",
        divider: "w-8 sm:w-16 h-0.5 sm:h-1 bg-yellow-300",
        benefitText: "text-[11px] sm:text-base text-white font-medium",
        defaultDelay: 200,
    },
    2: {
        container: "bg-gradient-to-b from-invofest_secondary to-invofest w-[29%] max-w-[110px] sm:max-w-none sm:w-[230px] h-[220px] sm:h-[290px] shadow-xl",
        cutoutHeight: "h-[55px] sm:h-[100px]",
        titleColor: "text-white text-xs sm:text-xl",
        divider: "w-6 sm:w-12 h-0.5 sm:h-1 bg-gray-400",
        benefitText: "text-[10px] sm:text-sm text-[#e2e8f0]",
        defaultDelay: 100,
    },
    3: {
        container: "bg-gradient-to-b from-invofest_secondary to-invofest w-[29%] max-w-[110px] sm:max-w-none sm:w-[230px] h-[200px] sm:h-[270px] shadow-xl",
        cutoutHeight: "h-[55px] sm:h-[100px]",
        titleColor: "text-white text-xs sm:text-xl",
        divider: "w-6 sm:w-12 h-0.5 sm:h-1 bg-amber-600",
        benefitText: "text-[10px] sm:text-sm text-[#e2e8f0]",
        defaultDelay: 300,
    },
};

export default function CardHadiah({
    rank,
    title,
    benefits,
    delay,
}: CardHadiahProps) {
    const style = podiumStyles[rank];

    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay ?? style.defaultDelay}
            className={`relative flex flex-col items-center rounded-3xl overflow-hidden transition-transform hover:-translate-y-2 ${style.container}`}
        >
            {/* area putih */}
            <div
                className={`w-full ${style.cutoutHeight} bg-white rounded-b-[60%] flex justify-center items-center shadow-md z-10`}
            >
                <span><img src={Trophy} alt="Trophy" className="w-7 h-7 sm:w-12 sm:h-12" /></span>
            </div>

            {/* Konten Hadiah */}
            <div className="px-1.5 py-2 sm:px-6 sm:py-4 flex flex-col items-center text-center h-full">
                <h3 className={`font-bold mb-2 ${style.titleColor}`}>{title}</h3>
                <div className={`${style.divider} rounded-full mb-4`}></div>
                <ul className={`space-y-2 ${style.benefitText}`}>
                    {benefits.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
