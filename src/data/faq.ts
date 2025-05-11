import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Can I import STEP files directly into FEmesh?`,
        answer: 'Yes! FEmesh supports native STEP file import. Just drag and drop your CAD model into the app and start cleaning or meshing right away.',
    },
    {
        question: `Do I need internet access to use FEmesh?`,
        answer: 'Nope! FEmesh is a fully offline desktop app. All features—from CAD import to mesh export—work without an internet connection.',
    },
    {
        question: 'Can I export meshes for both FEA and CFD?',
        answer: `Absolutely. FEmesh lets you export in common mesh formats suitable for structural and fluid simulations, including STL and neutral mesh files.`
    },
    {
        question: 'Is FEmesh suitable for complex assemblies?',
        answer: 'Yes! FEmesh can handle multi-part assemblies. You can isolate, clean, and mesh individual components with full control over each one.',
    },
    {
        question: 'Do I need meshing experience to use FEmesh?',
        answer: 'Not at all. FEmesh is designed for engineers, not just meshing experts. The interface is clean, intuitive, and guides you through every step.'
    }
];