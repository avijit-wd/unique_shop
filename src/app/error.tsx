"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-2/5 mx-auto">
        <CardHeader className="flex flex-col items-center justify-center">
          <div className="flex flex-row gap-2 items-center">
            <ShieldAlert size={30} />
            <h1 className="text-3xl font-semibold">Error</h1>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center text-danger">{error.message}</div>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button onClick={() => reset()} className="text-secondary">
            Try again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
