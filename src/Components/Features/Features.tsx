import "./Features.css";
import FeatureCard from "./FeatureCard.tsx";
import feature_first from "../../assets/feature_first.png";
import feature_second from "../../assets/feature_second.png";
import feature_third from "../../assets/feature_third.png";

export default function Features() {
  return (
  <section className="features mt-20 py-10 px-10">
      <div className="features-cards flex justify-between">
        <FeatureCard
          title="Task Management"
          description="Create, assign, and track tasks with ease. Set deadlines, priorities, and reminders to ensure nothing falls through the cracks."
          icon={feature_first}
        />
        <FeatureCard
          title="Collaboration Tools"
          description="Communicate with your team in real-time. Share files, leave comments, and get notifications to stay updated on project progress."
          icon={feature_second}
        />
        <FeatureCard
          title="Progress Tracking"
          description="Visualize your project's progress with intuitive dashboards and reports. Monitor task completion rates and identify bottlenecks quickly."
          icon={feature_third}
        />
      </div>
    </section>
  );
}
