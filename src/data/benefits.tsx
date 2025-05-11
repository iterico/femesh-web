import { FiBarChart2, FiBriefcase, FiLock, FiShield, FiTarget, FiTrendingUp } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    
    {
        title: "All-in-One Platform",
        description: "Handle every step of your meshing workflow—from loading complex STEP files to exporting meshes for FEA or CFD—within a single, efficient desktop app. FEMesh brings everything together in a clean, intuitive interface designed for speed, precision, and offline use.",
        bullets: [
            {
                title: "Multi-Format Support",
                description: "Work with popular formats like STEP, STL, and native mesh exports.",
                icon: <FiLock size={26} />
            },
            {
                title: "Project-Based Workflow",
                description: "Organize and revisit your simulation files with structured project views.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Desktop and Offline Ready",
                description: "FEMesh runs locally, so your data stays secure and accessible—anytime, anywhere.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/feat1.png"
    },
    {
        title: "Effortless CAD-to-Mesh Workflow",
        description: "Eliminate hours of manual cleanup and repetitive tasks—FEMesh streamlines the entire CAD-to-mesh process so you can focus on analysis, not file prep. With powerful tools for repairing geometry and generating high-quality meshes, you’ll get simulation-ready results faster than ever.",
        bullets: [
            {
                title: "Smart Geometry Handling",
                description: "Automatically detects and repairs CAD issues for clean, meshable models.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Configurable Meshing",
                description: "Easily adjust mesh settings to match your analysis needs—no scripting required.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Instant Mesh Feedback",
                description: "Preview mesh quality and make changes before exporting to FEA or CFD tools.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/feat2.png"
    },
]