import { Card } from "@/components/ui/card";

export default function CoursesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Courses</h1>
        <p className="text-muted-foreground mt-2">
          Explore our comprehensive library of OpenClaw courses
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-6 space-y-4">
            <div className="aspect-video bg-muted rounded-lg" />
            <h3 className="text-lg font-semibold">Course {i}</h3>
            <p className="text-sm text-muted-foreground">
              Learn the fundamentals of OpenClaw development
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}