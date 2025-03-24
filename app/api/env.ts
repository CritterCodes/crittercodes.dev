// This file is used to define environment variables needed for the application
// You'll need to add these to your .env.local file or deployment environment

export const requiredEnvVars = {
  EMAIL_USER: process.env.EMAIL_USER || "jacob@crittercodes.dev",
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || "",
}

// Function to check if all required environment variables are set
export function checkEnvVars() {
  const missingVars = Object.entries(requiredEnvVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key)

  if (missingVars.length > 0) {
    console.warn(`Missing required environment variables: ${missingVars.join(", ")}`)
    return false
  }

  return true
}

