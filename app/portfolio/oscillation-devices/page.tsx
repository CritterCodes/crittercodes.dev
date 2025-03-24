import { ProjectDetail } from "@/components/project-detail"

export default function OscillationDevicesProject() {
  return (
    <ProjectDetail
      title="Oscillation Devices"
      description="E-commerce website built on Shopify for a client selling jewelry and gemstones, featuring product catalog, checkout, and inventory management."
      longDescription={`
        <p>Oscillation Devices is a specialty retailer of fine jewelry, gemstones, knives, and leatherwork. I developed and currently manage their Shopify e-commerce website, creating a platform that effectively showcases their diverse product catalog.</p>
        
        <p>The website features a clean, elegant design that puts the focus on the products, with high-quality product photography and detailed descriptions. The navigation is organized by product category, making it easy for customers to find what they're looking for.</p>
        
        <p>The site includes a secure checkout process, inventory management, and integration with shipping providers. I've also implemented custom features to enhance the shopping experience, such as product filtering, related product recommendations, and a wishlist function.</p>
      `}
      image="/imgs/projects/oscillation.png"
      category="E-commerce"
      technologies={["Shopify", "Liquid", "JavaScript", "HTML/CSS"]}
      features={[
        "Comprehensive product catalog with detailed descriptions",
        "High-quality product photography display",
        "Secure checkout process with multiple payment options",
        "Inventory management system",
        "Product filtering and search functionality",
        "Related product recommendations",
        "Mobile-responsive design for shopping on any device",
      ]}
      challenges={[
        "Organizing a diverse product catalog in an intuitive way",
        "Optimizing product images for both quality and performance",
        "Creating a consistent shopping experience across product categories",
      ]}
      solutions={[
        "Implemented a hierarchical navigation structure with clear categories",
        "Used Shopify's image optimization tools with custom adjustments for quality",
        "Developed consistent product templates that adapt to different product types",
      ]}
      githubUrl=""
      liveUrl="https://oscillationdevices.com"
    />
  )
}

