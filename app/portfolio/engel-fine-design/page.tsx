import { ProjectDetail } from "@/components/project-detail"

export default function EngelFineDesignProject() {
  return (
    <ProjectDetail
      title="Engel Fine Design"
      description="E-commerce website for my personal jewelry business, featuring product catalog, custom order requests, and repair services information."
      longDescription={`
        <p>Engel Fine Design is my personal jewelry business specializing in Art Deco and Traditional Jewelry Designs. I developed a Shopify e-commerce website to showcase my jewelry creations and offer my custom design and repair services to clients.</p>
        
        <p>The website features a sophisticated, elegant design that reflects the timeless nature of my jewelry pieces. The product catalog is organized by collection and jewelry type, making it easy for customers to browse and find pieces that match their style.</p>
        
        <p>Beyond standard e-commerce functionality, the site includes custom features such as a design consultation request form, repair services information, and a portfolio of custom pieces I've created. This allows potential clients to understand the full range of services I offer beyond ready-made jewelry.</p>
      `}
      image="/imgs/projects/engel-fine-design.png"
      category="E-commerce"
      technologies={["Shopify", "Liquid", "JavaScript", "HTML/CSS"]}
      features={[
        "Product catalog organized by collection and jewelry type",
        "Custom design consultation request system",
        "Jewelry repair services information",
        "Portfolio of custom jewelry pieces",
        "Secure checkout with multiple payment options",
        "Mobile-responsive design",
        "Integration with social media platforms",
      ]}
      challenges={[
        "Creating a design that reflects the elegance of fine jewelry",
        "Balancing e-commerce functionality with custom service offerings",
        "Effectively showcasing both products and craftsmanship",
      ]}
      solutions={[
        "Implemented a minimalist design with focus on product photography",
        "Created dedicated sections for both ready-made products and custom services",
        "Used detailed process descriptions and craftsmanship photos to highlight quality",
      ]}
      githubUrl=""
      liveUrl="https://shop.engelfinedesign.com"
    />
  )
}

