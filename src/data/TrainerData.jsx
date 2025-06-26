import BodybuildingPro from "../assets/Trainer/BodybuildingPro.webp";
import BoxingTrainer from "../assets/Trainer/BoxingTrainer.webp";
import CardioExpert from "../assets/Trainer/CardioExpert.webp";
import CrossfitCoach from "../assets/Trainer/CrossfitCoach.webp";
import PilatesTrainer from "../assets/Trainer/PilatesTrainer.webp";
import StrengthCoach from "../assets/Trainer/StrengthCoach.webp";
import YogaInstructor from "../assets/Trainer/YogaInstructor.webp";
import ZumbaInstructor from "../assets/Trainer/ZumbaInstructor.webp";

const TrainersData = [
  {
    id: 1,
    name: "John Carter",
    specialty: "Strength Coach",
    experience: 5,
    des: "John is a certified strength coach with over 5 years of experience. He helps clients increase muscle mass, enhance physical performance, and build long-term strength habits. His training style blends functional strength and discipline to deliver exceptional body transformation results for all fitness levels.",
    rating: 4.8,
    reviews: 120,
    image: BoxingTrainer,
  },
  {
    id: 2,
    name: "Sarah Lee",
    specialty: "Yoga Instructor",
    experience: 6,
    des: "Sarah is a passionate yoga instructor with 6 years of experience guiding individuals through mindful movements, breathing, and flexibility practices. She creates a calm, healing environment that promotes wellness, reduces stress, and improves both physical and mental balance through tailored yoga sessions.",
    rating: 5,
    reviews: 95,
    image: YogaInstructor,
  },
  {
    id: 3,
    name: "Mike Tyson",
    specialty: "Boxing Trainer",
    experience: 10,
    des: "Mike has a decade of experience in competitive and fitness boxing. His high-energy sessions are focused on discipline, stamina, and real-world boxing techniques. Mike tailors his training to suit both beginners and athletes looking to boost endurance and power through boxing drills.",
    rating: 4.9,
    reviews: 180,
    image: StrengthCoach,
  },
  {
    id: 4,
    name: "Jessi Alba",
    specialty: "Cardio Expert",
    experience: 4,
    des: "Jessi specializes in dynamic cardio workouts that burn fat and improve cardiovascular health. With 4 years of training experience, she mixes HIIT, dance, and endurance routines to keep sessions fun and impactful. Her programs are designed to maximize energy, agility, and fat loss.",
    rating: 3,
    reviews: 85,
    image: CardioExpert,
  },
  {
    id: 5,
    name: "Daniel Craig",
    specialty: "Crossfit Coach",
    experience: 7,
    des: "Daniel is a certified CrossFit coach with 7 years of experience helping people reach peak fitness. He focuses on strength, conditioning, and functional movements to increase athletic performance. His challenging workouts push physical boundaries while emphasizing safe and sustainable progress.",
    rating: 4.7,
    reviews: 110,
    image: CrossfitCoach,
  },
  {
    id: 6,
    name: "Emily Clark",
    specialty: "Pilates Trainer",
    experience: 5,
    des: "Emily is a dedicated Pilates instructor with 5 years of expertise in core training, posture correction, and flexibility. Her sessions emphasize body alignment, breathing, and control to help clients build strength from within. Emily’s calm approach ensures a focused and effective workout.",
    rating: 4.6,
    reviews: 70,
    image: PilatesTrainer,
  },
  {
    id: 7,
    name: "Chris Evans",
    specialty: "Bodybuilding Pro",
    experience: 8,
    des: "Chris is an elite bodybuilding coach with 8 years of experience in strength training and physique development. His personalized training programs target muscle gain, fat loss, and competition prep. Chris motivates clients to push limits and achieve their best physical transformation.",
    rating: 5,
    reviews: 150,
    image: BodybuildingPro,
  },
  {
    id: 8,
    name: "Sophia King",
    specialty: "Zumba Instructor",
    experience: 3,
    des: "Sophia brings fun and energy to every Zumba class with her dance-inspired fitness routines. With 3 years of experience, she combines Latin beats with cardio to create an enjoyable, calorie-burning workout. Her sessions are welcoming for all levels and keep you moving.",
    rating: 4.4,
    reviews: 60,
    image: ZumbaInstructor,
  },
];
export default TrainersData;
