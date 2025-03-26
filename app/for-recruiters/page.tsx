import type { Metadata } from "next"
import ForRecruitersClientPage from "./ForRecruitersClientPage"

export const metadata: Metadata = {
  title: "For Recruiters | Jacob Engel - Full Stack Developer",
  description:
    "Information for recruiters about Jacob Engel, a Full Stack Developer specializing in business automation with Next.js, Node.js, and MongoDB.",
}

export default function ForRecruitersPage() {
  return <ForRecruitersClientPage />
}

