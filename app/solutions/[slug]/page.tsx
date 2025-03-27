import { Navbar } from "@/components/navbar"
import { ThreeBackground } from "@/components/three-background"
import { Footer } from "@/components/footer"
import { SolutionDetail } from "@/components/solutions/solution-detail"
import { SolutionsContact } from "@/components/solutions/solutions-contact"

// Import the images for the solution details
const solutionImages = {
  "data-query": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-67PXjDtY5MvZphKhlvnOvfTVX66b7d.png",
  reconciliation: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-86SvcbJyze4w9KBqb9eBzOQ4GRM9Au.png",
  flux: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LmrQwrtMEtEUINa0KcbEgdaU5DeUNR.png",
  analytics: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l2g5ekWgOK4w1eUMEcUzWJJqNoSZCt.png",
  "predictive-analytics":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MKvzUgnO1X0GIyviU5A7Dm3UvFIMbA.png",
}

// Update the solution detail page to use the sixth image for all solution detail pages
// Add this after the solutionImages object:
const detailImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EvfhuXh8jbynn82WCOP3rVTAd30OaY.png"

// Solution data
const solutions = {
  "data-query": {
    title: "AI Data Query",
    description:
      "Streamline workflows, reduce manual tasks, and increase productivity with AI-driven process automation.",
    color: "green-500",
    imageSrc: "/solutions/data-query.png",
    bgColor: "from-green-600 to-green-700",
    fullDescription:
      "Our AI Data Query solution enables finance teams to extract insights from financial data using natural language queries. No more complex SQL or waiting for IT support - simply ask questions in plain English and get immediate answers.",
    benefits: [
      "Reduce time spent on data extraction by 85%",
      "Enable self-service analytics for finance teams",
      "Improve decision-making with faster access to insights",
      "Eliminate dependency on technical teams for data queries",
    ],
    features: [
      "Natural language processing for financial queries",
      "Integration with all major financial systems",
      "Automated data validation and quality checks",
      "Custom visualization of query results",
    ],
  },
  reconciliation: {
    title: "AI Reconciliation",
    description:
      "Streamline workflows, reduce manual tasks, and increase productivity with AI-driven process automation.",
    color: "blue-500",
    imageSrc: "/solutions/reconciliation.png",
    bgColor: "from-blue-600 to-blue-700",
    fullDescription:
      "Our AI Reconciliation solution automates the matching and reconciliation of financial transactions across multiple systems, dramatically reducing manual effort and errors in the reconciliation process.",
    benefits: [
      "Reduce reconciliation time by up to 90%",
      "Minimize human error in matching transactions",
      "Free up finance team time for higher-value activities",
      "Improve accuracy of financial reporting",
    ],
    features: [
      "Intelligent transaction matching algorithms",
      "Automated exception handling and resolution suggestions",
      "Real-time reconciliation status dashboards",
      "Audit trail and compliance documentation",
    ],
  },
  flux: {
    title: "AI Flux",
    description:
      "Streamline workflows, reduce manual tasks, and increase productivity with AI-driven process automation.",
    color: "purple-500",
    imageSrc: "/solutions/flux.png",
    bgColor: "from-purple-600 to-purple-700",
    fullDescription:
      "Our AI Flux Variance Analysis solution automatically identifies and explains significant changes in financial data, helping finance teams quickly understand the drivers behind variances and anomalies.",
    benefits: [
      "Reduce variance analysis time by 75%",
      "Identify root causes of financial variances automatically",
      "Improve forecast accuracy with better understanding of drivers",
      "Enable proactive financial management",
    ],
    features: [
      "Automated detection of significant variances",
      "AI-generated narrative explanations of changes",
      "Drill-down capabilities for detailed analysis",
      "Trend visualization and pattern recognition",
    ],
  },
  analytics: {
    title: "AI Analytics",
    description:
      "Streamline workflows, reduce manual tasks, and increase productivity with AI-driven process automation.",
    color: "amber-500",
    imageSrc: "/solutions/analytics.png",
    bgColor: "from-amber-600 to-amber-700",
    fullDescription:
      "Our AI Finance Analytics solution provides comprehensive financial analysis with minimal manual effort, delivering actionable insights that drive better business decisions and financial performance.",
    benefits: [
      "Gain deeper insights from financial data",
      "Identify cost-saving opportunities automatically",
      "Improve financial planning with data-driven insights",
      "Democratize financial analysis across the organization",
    ],
    features: [
      "Automated financial ratio analysis",
      "Trend identification and visualization",
      "Competitive benchmarking capabilities",
      "Customizable financial dashboards",
    ],
  },
  "predictive-analytics": {
    title: "AI Predictive Analytics",
    description:
      "Streamline workflows, reduce manual tasks, and increase productivity with AI-driven process automation.",
    color: "green-500",
    imageSrc: "/solutions/predictive-analytics.png",
    bgColor: "from-green-600 to-green-700",
    fullDescription:
      "Our AI Predictive Analytics for Finance solution leverages machine learning to forecast financial metrics with unprecedented accuracy, helping finance teams plan more effectively and anticipate future challenges.",
    benefits: [
      "Improve forecast accuracy by up to 40%",
      "Reduce financial planning cycle time",
      "Identify potential risks before they materialize",
      "Enable scenario planning with multiple forecast models",
    ],
    features: [
      "Machine learning-based financial forecasting",
      "Automated driver-based planning models",
      "What-if scenario analysis capabilities",
      "Continuous forecast updates as new data becomes available",
    ],
  },
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = solutions[params.slug as keyof typeof solutions]

  if (!solution) {
    return (
      <>
        <ThreeBackground />
        <Navbar />
        <main className="pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
            <p className="text-gray-400">The solution you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <ThreeBackground />
      <Navbar />
      <main className="pt-24">
        <SolutionDetail solution={{ ...solution, imageSrc: detailImage }} />
        <SolutionsContact />
      </main>
      <Footer />
    </>
  )
}

