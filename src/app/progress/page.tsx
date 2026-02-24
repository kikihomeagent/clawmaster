import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Progress</h1>
        <p className="text-muted-foreground mt-2">
          Track your learning achievements and statistics
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Learning Statistics</h2>
        <p className="text-muted-foreground">
          Sign in to view your personalized learning statistics and achievements.
        </p>
        <Button className="mt-4">Sign In to View Progress</Button>
      </Card>
    </div>
  );
}