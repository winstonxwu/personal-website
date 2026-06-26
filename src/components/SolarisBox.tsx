export default function SolarisBox(type: { type: string }) {
    const render = () => {
        switch (type as string) {
            case "button":
                return <div className="bg-[#2596be]"></div>;
                break;
            case ""
        }
    };
    return { render };
}
