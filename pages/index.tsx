// pages/index.tsx
import { GetServerSideProps } from "next";
import ItineraryList from "../components/ItineraryColumn";
import { Activity } from "@/types/type";

interface HomeProps {
  items: Activity[];
}

export default function Home({ items }: HomeProps) {
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <ItineraryList initialData={items} />
      <div className="flex-1">
        <iframe
          src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          aria-label="Google Map of Delhi"
        ></iframe>
      </div>
    </main>
  );
}
export async function getServerSideProps(context: any) {
  try {
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const host = process.env.VERCEL_URL || context.req.headers.host;
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/api/places`);

    if (!res.ok) {
      throw new Error(`Failed to fetch, status: ${res.status}`);
    }

    const data: Activity[] = await res.json();

    return {
      props: {
        items: data,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);

    return {
      props: {
        items: [],
      },
    };
  }
}

