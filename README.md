[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fiterico%2Ffemesh-web)


# FEmesh – Web-based CAD to Mesh Tool for CFD/FEA

**FEmesh** is a modern, lightweight desktop and web-ready app for converting CAD files into clean, simulation-ready meshes. Built with **Next.js** and **Tailwind CSS**, it enables engineers and researchers to quickly prepare geometry for **CFD** and **FEA** using a clean, performant UI.

Try out the live demo here: [https://www.femesh.com](https://www.femesh.com)

---

## Features

- Built with **Next.js** App Router and **TypeScript**
- **Tailwind CSS** v3 for quick styling and theme changes
- **Framer Motion** animations for seamless UI transitions
- Drag-and-drop **STEP file** import
- Automatic geometry cleanup (coming soon)
- Interactive part selection and visualization
- Mesh generation via **Netgen** backend
- Download clean mesh files for use in solvers
- Modular components for easy customization
- Designed to run offline (Tauri Desktop App)
- Built-in support for future SaaS deployment

---

## Sections

- Hero
- Supported CAD Formats
- Features
- Mesh Examples
- Use Cases (CFD & FEA)
- Testimonials
- FAQ
- CTA
- Footer

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js**: Version 18 or newer
- **npm**: Version 8 or newer (comes with Node)
- **VS Code** or any modern code editor

### Steps

1. Clone the repository: `git clone https://github.com/your-org/femesh`
2. Navigate to the project: `cd femesh`
3. Install dependencies: `npm install`
4. (Optional) Set API keys: `RESEND_API_KEY=your_resend_api_key_here`
5. Run the dev server: `npm run dev`
6. Visit the app: [http://localhost:3000](http://localhost:3000)

---

## Customization

- **Colors**: Edit `globals.css` to update theme colors.
- **Site Info**: Update `siteDetails.ts` in `/src/data` to match your brand.
- **Content**: Modify `/src/data` files to change nav items, features, etc.
- **Favicon**: Replace `/src/app/favicon.ico` with your own icon.
- **Images**: Customize Open Graph images in `/public/images`.

---

## Deploying on Vercel

You can deploy FEmesh to [Vercel](https://vercel.com) instantly using the button at the top. Or follow the [Next.js deployment docs](https://vercel.com/docs/deployments) for advanced options.

---

## Contributing

FEmesh is open-source and welcomes contributions from the CAE community. Help us build better tools for simulation engineers!

### How to Contribute

1. Fork the repo and clone it.
2. Create a feature branch: `git checkout -b feature/add-meshing-option`
3. Make your changes and test locally.
4. Commit and push your branch.
5. Open a pull request with a description of your changes.

### Ideas for Contributions

- Geometry repair tools
- Tet or hex mesh options
- Better visualization tools
- CLI or REST API interface
- More file format support (e.g. IGES, STL)

---

## Community and Support

Have ideas or feedback? Open an issue or start a discussion on GitHub. Follow [@ITERICO](https://www.linkedin.com/company/iterico/) on LinkedIn for updates.

---

## License

FEmesh is released under the MIT License. Feel free to use, modify, and share it for personal or commercial use.
