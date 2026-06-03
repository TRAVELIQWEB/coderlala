export interface TeamMember {
    id: number;
    slug: string;
    name: string;
    role: string;
    image: string;
    description: string;
    skills: string[];
    experience: number;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    color: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        slug: "salman-nizam",
        name: "Salman Nizam",
        role: "Co-Founder & DevOps Engineer",
        image: "/images/team/salman-nizam-coderlala-tech.webp",
        description: "Expert in cloud architecture, containerization, and scalable infrastructure. Leads our DevOps practices and ensures 99.9% uptime for all client projects.",
        skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
        experience: 2019,
        location: "Gurugram, India",
        email: "info@coderlala.com",
        linkedin: "https://www.linkedin.com/in/salman-nizam-041537201",
        github: "https://github.com/salmannizam",
        color: "bg-blue-500"
    },
    {
        id: 2,
        slug: "achal-singh",
        name: "Achal Singh",
        role: "Co-Founder & Full-Stack Developer",
        image: "/images/team/Achal_Profile_Coderlala.webp",
        description: "Full-stack specialist with expertise in modern web technologies. Architect of scalable SaaS platforms and enterprise-grade applications.",
        skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
        experience: 2020,
        location: "Gurugram, India",
        email: "achal.singh@coderlala.com",
        linkedin: "https://www.linkedin.com/in/achal-singh-74a226268",
        github: "https://github.com/assisodiya",
        color: "bg-orange-500"
    },
    {
        id: 3,
        slug: "ravi-kaliya",
        name: "Ravi Kaliya",
        role: "Senior Frontend Developer",
        image: "/images/team/ravi.webp",
        description: "Frontend expert with a keen eye for design and user experience. Creates beautiful, responsive interfaces with modern CSS and JavaScript.",
        skills: ["HTML", "CSS", "Tailwind", "Bootstrap", "Javascript", "Typescript", "PHP", "MySQL", "WordPress", "Nodejs", "Reactjs", "Nextjs", "Git", "Github", "Redux"],
        experience: 2020,
        location: "Gurugram, India",
        email: "ravi.k@coderlala.com",
        linkedin: "https://www.linkedin.com/in/ravi-kaliya-b6657b3a9",
        github: "https://github.com/ravi-kaliya",
        color: "bg-green-500"
    },
    {
        id: 4,
        slug: "aman-singh",
        name: "Aman Singh",
        role: "Senior Full-Stack Developer",
        image: "/images/team/aman-singh-coderlala.webp",
        description: "Specializes in building performant web applications with modern frameworks. Passionate about clean code and user experience.",
        skills: ["JavaScript", "React", "TypeScript", "Nodejs", "Git", "Github", "Nextjs", "Python", "SQL", "MongoDB", "Redux"],
        experience: 2022,
        location: "Gurugram, India",
        email: "aman.singh@coderlala.com",
        linkedin: "https://www.linkedin.com/in/aman-singh-929006217",
        github: "https://github.com/aman708149",
        color: "bg-purple-500"
    },
    {
        id: 5,
        slug: "raghib",
        name: "Raghib",
        role: "Full-Stack Developer",
        image: "/images/team/raghib-coderlala-tech.webp",
        description: "Versatile developer with expertise across the stack. Focuses on creating efficient, maintainable code and seamless user experiences.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Express", "TypeScript", "MongoDB", "Git", "Github", "Redis", "Tailwind CSS", "Bootstrap", "WordPress"],
        experience: 2023,
        location: "Gurugram, India",
        email: "raghib.n@coderlala.com",
        linkedin: "https://www.linkedin.com/in/raghib-nizam-543a25271",
        github: '',
        color: "bg-red-500"
    },
    {
        id: 6,
        slug: "ansh-garg",
        name: "Ansh Garg",
        role: "Young Developer",
        image: "/images/team/ansh-garg-coderlala.webp",
        description: "Energetic young developer with a passion for learning new technologies. Contributes to frontend development and brings fresh perspectives to projects.",
        skills: ["HTML/CSS", "JavaScript", "React", "Python", "Git", "Github", "TypeScript", "Bootstrap", "Responsive Design"],
        experience: 2025,
        location: "Gurugram, India",
        email: "ansh.garg@coderlala.com",
        linkedin: '',
        github: '',
        color: "bg-teal-500"
    }
];

export function getExperience(experience: number): string {
    const currentYear = new Date().getFullYear();
    const years = currentYear - experience;
    return years <= 1 ? "1+ year" : `${years}+ years`;
}
