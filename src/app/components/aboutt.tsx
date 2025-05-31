import { ServiceButton } from "./aboutbutton";

export default function About() {
    return (
        <div className="grid grid-cols-2 gap-10 relative">
            <ServiceButton label="Who we are" />
            <ServiceButton label="What we do" />
            <ServiceButton label="Our Mission" />
            <ServiceButton label="Team" />
        </div>
    );
}