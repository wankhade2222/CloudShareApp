

export const features = [
  {
    icon: "ArrowUpCircle",
    color: "#2563eb", // blue
    title: "Fast Uploads",
    description: "Upload your files in seconds with our optimized cloud servers."
  },
  {
    icon: "Shield",
    color: "#16a34a", // green
    title: "Secure Sharing",
    description: "Your data is encrypted end-to-end for maximum security."
  },
  {
    icon: "Share2",
    color: "#9333ea", // purple
    title: "Easy Collaboration",
    description: "Share files and collaborate with your team in real time."
  },
  {
    icon: "CreditCard",
    color: "#f97316", // orange
    title: "Flexible Plans",
    description: "Choose from a variety of plans to suit your needs."
  },
  {
    icon: "FileText",
    color: "#dc2626", // red
    title: "Document Management",
    description: "Store, view, and organize all your documents in one place."
  },
  {
    icon: "Clock",
    color: "#0891b2", // teal
    title: "24/7 Access",
    description: "Access your files anytime, anywhere, from any device."
  }
];

// data.js

export const pricingPlans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: "₹0",
    highlighted: false,
    features: [
      "5 file uploads",
      "Basic file sharing",
      "7-day file retention",
      "Email support"
    ]
  },
  {
    name: "Premium",
    description: "For individuals with larger needs",
    price: "₹500",
    highlighted: true,
    features: [
      "500 file uploads",
      "Advanced file sharing",
      "30-day file retention",
      "Priority email support",
      "File analytics"
    ]
  },
  {
    name: "Ultimate",
    description: "For teams and businesses",
    price: "₹2500",
    highlighted: false,
    features: [
      "5000 file uploads",
      "Team sharing capabilities",
      "Unlimited file retention",
      "24/7 priority support",
      "Advanced analytics",
      "API access"
    ]
  }
];
