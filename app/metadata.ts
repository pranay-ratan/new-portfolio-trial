import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pranay Ratan - Data Science Student",
  description:
    "Pranay Ratan is a Data Science student at Simon Fraser University, currently working as a Research Assistant at the Beedie School of Business and as the SFSS Council Representative for the Data Science Student Society.",
  twitter: {
    card: "summary_large_image",
    creator: "@pranayratan",
    images: ["/og.png"],
    title: "Pranay Ratan - Data Science Student",
  },
  openGraph: {
    title: "Pranay Ratan - Data Science Student",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pranay Ratan - Data Science Student",
      },
    ],
    siteName: "Pranay Ratan - Data Science Student",
  },
  metadataBase: new URL("https://pranayratan.com"),
};
