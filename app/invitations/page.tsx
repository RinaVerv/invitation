import {  getRSVPs } from "@/actions/rsvp-actions";
import { Suspense } from "react";
import { Header } from "../../components/header";
import { LoadingGrid } from "./components/loading-grid";
import { RSVPGrid } from "./components/invitations-grid";

export const dynamic = "force-dynamic";

export default async function RSVPsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-cormorant-sc">Ответы на приглашение</h1>
          <Suspense fallback={<LoadingGrid />}>
            <RSVPsContent />
          </Suspense>
        </div>
      </div>
    </>
  );
}

// Separate async component to handle data fetching
async function RSVPsContent() {
  const rsvps = await getRSVPs();
  return <RSVPGrid initialPrompts={rsvps} />;
}
