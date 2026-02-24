import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LearnPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Start Learning</h1>
        <p className="text-muted-foreground mt-2">
          Pick up where you left off or start a new learning path
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
        <p className="text-muted-foreground">
          Sign in to track your progress and continue your learning journey.
        </p>
        <Button className="mt-4">Sign In to Continue</Button>
      </Card>
    </div>
  );
}