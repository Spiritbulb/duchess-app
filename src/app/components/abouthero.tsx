import Image from 'next/image';

export default function ImageBanner({ children }: { children?: React.ReactNode }) {
    return (
        <div className="relative h-[400px] w-full">
            <Image
                src="/about1.jpg"
                alt="Money background"
                fill
                className="object-cover"
                priority
            />
            <div className="relative z-10 p-4">
                {children}
            </div>
        </div>
    );
}