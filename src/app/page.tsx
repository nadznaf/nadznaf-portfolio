import { ThemeButton } from "@/components/theme-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-8">
      <Button variant="outline">
        <Link href="/about">Go to About Page</Link>
      </Button>
      <ThemeButton />
      <Link href="/contact" className="text-blue-500 underline">
        Contact Us
      </Link>
    </div>
  );
}
