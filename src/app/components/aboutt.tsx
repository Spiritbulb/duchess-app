import { ServiceButton } from "./aboutbutton";

export default function About() {
    return (
        <div className="grid grid-cols-2 gap-10 relative">
            <ServiceButton label="Who we are" sectionId="about" />
            <ServiceButton label="What we do" sectionId="work" />
            <ServiceButton label="Our Mission" sectionId="mission" />
            <ServiceButton label="Team" sectionId="team" />
        </div>
    );
}