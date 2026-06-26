import Image from "next/image";

export default function SolarisWindow({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) {
    const logHello = () => {
        console.log("hello");
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative">
                <Image
                    src="/top-left.png"
                    alt="hello"
                    width={20}
                    height={20}
                    className="absolute -top-[6px] -left-[6px]"
                ></Image>
                <Image
                    src="/top-right.png"
                    alt="hello"
                    width={20}
                    height={20}
                    className="absolute -top-[6px] -right-[6px]"
                ></Image>
                <Image
                    src="/bottom-left.png"
                    alt="hello"
                    width={20}
                    height={20}
                    className="absolute -bottom-[6px] -left-[6px]"
                ></Image>
                <Image
                    src="/bottom-right.png"
                    alt="hello"
                    width={20}
                    height={20}
                    className="absolute -right-[6px] -bottom-[6px]"
                ></Image>

                <div className="flex flex-col items-center p-1 border-black border-3 h-[700px] w-5xl bg-[#d2d2d4] font-Gallant">
                    <div className="flex justify-center items-center w-full text-2xl mb-[9px] p1 bg-[#c5c5c5] border-[#7f7f7d] border-1 h-[30px]">
                        {children}
                    </div>
                    <div className="flex justify-center items-center w-full text-2xl border-black p1 bg-[#c5c5c5] border-1 h-[650px]">
                        Da placeholder
                        <a href="https://www.w3schools.com">this the link</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
