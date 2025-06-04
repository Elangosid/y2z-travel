// pages/index.tsx
import { GetServerSidePropsContext } from "next";
import ItineraryList from "../components/ItineraryColumn";
import { Activity } from "@/types/type";

interface HomeProps {
  items: Activity[];
  base: string;
}

export default function Home({ items, base }: HomeProps) {
  console.log("base", base)
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
export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const baseUrl = `https://y2z-travel.vercel.app`;
    const res = await fetch(`${baseUrl}/api/places`);

    if (!res.ok) {
      throw new Error(`Failed to fetch, status: ${res.status}`);
    }

    const data: Activity[] = await res.json();

    return {
      props: {
        items: data,
        base: `${baseUrl}/api/places`
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

