import { AchievementComponent } from "../components/achievementComponent";
import { achievements } from "../data";

export const Achievements = () => {
  return (
    <section id="achievements" className="container">
      <h3>جزء من إنجازاتنا</h3>
      <div className="accordion p-3" id="accordionExample">
        {achievements.map((achievement, index) => (
          <AchievementComponent
            title={achievement.title}
            desc={achievement.desc}
            id={index + 1}
          />
        ))}
      </div>
    </section>
  );
};
