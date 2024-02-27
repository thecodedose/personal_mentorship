const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ihsavru",
    icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      class="w-10 lg:w-5"
    >
      <path
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
      />
    </svg>`,
  },
  {
    name: "GitHub",
    url: "https://github.com/ihsavru",
    icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      class="w-10 lg:w-5"
    >
      <path
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      />
    </svg>`,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ihsavruu",
    icon: `<svg
      class="w-10 lg:w-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
      />
    </svg>`,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/urvashiv2",
    icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      class="w-10 lg:w-5"
    >
      <path
        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
      />
    </svg>`,
  },
]

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Git",
  "TypeScript",
  "Gatsby",
  "Ruby on Rails",
  "Go",
  "Python",
]

const FEATURES = [
  "I can help you with interview preparation.",
  "I can help you with mock interviews.",
  "I can help you create study plans to achieve your goals.",
  "I can help you with your web development doubts.",
  "I can help you with remote job search.",
]

const TESTIMONIALS = [
  {
    name: "Amlan Bora",
    info: `Software Developer`,
    feedback: `Had a great session, gave me a clear direction & approach to how to prepare for remote developer opportunities! Also, gave me great recommendations for tools I could use while doing so & things I should do to make myself a better developer & candidate for aspired roles.`,
  },
  {
    name: "Anjali Mahanty",
    info: `UI/UX Designer`,
    feedback: `Hi Urvashi, Thank you for your help. I have joined the Neo group as a UI/UX designer. With feedback and suggestions that you gave me, I will try to improve my profile again.

    Thanks again 🙏`,
  },
  {
    name: "Vinathi",
    info: "Software Engineer @ Accenture",
    avatar: "./images/testimonials/vinathi.png",
    feedback: `
    This course has been the journey I've always longed for.
    I've been gaining valuable knowledge from Urvashi's well-crafted materials and interactive sessions where I could ask any question without hesitation.
    What I appreciate the most is learning by building projects, which I love, and the specific exercises that provide exactly what I need to learn.
    From improving my basics to stepping into the world of open source with Urvashi's patient support, and I can't wait to dive into the exciting journey ahead, exploring, creating and learning along the way.`,
  },
  {
    name: "Shubhra Agarwal",
    info: `Frontend Engineer @ BlueLearn`,
    feedback: `Urvashi's guidance and pointers about my resume, projects and portfolio helped me in landing a great job as a Frontend developer.`,
  },
  {
    name: "Shivani Mishra",
    info: `Upcoming Data Analyst @TheMathCompany`,
    feedback: `
    It was one of the best learning experiences I had, at React Developer Program, right from start to end.
    At start: Urvashi provided us with some great resources for basic of web dev before the program started.
    During the program : Urvashi has divided the section into smaller subsections and layed out the program for each week and month beforehand, giving ample amount of time to each topic. The program is based on application based learning with less theory followed by good amount of practice projects and practical way of finding solutions.
    Environment: Over all environment  is very friendly with Daily check-ins,motivational messages and project review. The best thing about the program is that the batches are very small which leads to Urvashi giving attention to each and every student. You can contact her anytime and clear your doubts through weekly calls or direct messages.
    Outcome:I was able to make websites on my own and did gave me confidence on my skills,
    "Overall I am very happy and recommend others to join the React developer program"`,
  },
  {
    name: "Rohit Deshpande",
    info: `4th year student @ PCCOE, Pune`,
    avatar: "./images/testimonials/rohit.png",
    feedback: `
    The major reason I took this program was not just learning React but the experience that Urvashi has and that has helped me a lot.
    The content is crisp and the exercises and projects make you think, but the code reviews you get after is the real deal.
    I personally feel quite confident in my abilities, have greater understanding of how things work, also learned a lot about open source, found new interests in technical writing after having completed 2 months of the program.
    So you can apply for this program if you're interested in React but also want some guidance, doubt-solving and reviews.
    Quite honestly the money is for the experience ,reviews, and doubt-solving because you can learn React freely too.
    Also if you're experienced I reckon this might not be for you but for a beginner it definitely is worth it.`,
  },
  {
    name: "Vishesh Vijayvargiya",
    info: `Student`,
    feedback: `
    I took Urvashi's course to learn web development since I had interest in it and I do not regret a single bit. I personally am a slow learner, it takes time for me to master the basics but I believe in mastering the basics first. While some students were a little more experienced than me and I went a bit slow, Urvashi was always fair to everyone and supported me throughout my learning journey no matter how much I knew about web dev. I can say this with 100% confidence that everyone should have a mentor like Urvashi in their life.
    About the course and it's content, I love how her content is high quality yet not long comprehensive tutorials. It is broken down into bits and every concept is explained in such a simple manner that even a 13 year old can learn how to code with her videos. And it does not end with just videos, she always shares us very informative and important videos/articles to keep us knowledgeable and up-to-date about our field/industry.
    She truly fulfilled everything she promised to do in the course description.  Whenever I have doubts or I'm stuck, she is just one discord message away and that is honestly the best part about this course. I truly am grateful to have enrolled in this course, but specially to have Urvashi as a mentor. Thanks Urvashi!`,
  },
  {
    name: "Souvik Mitra",
    info: `Self-taught Web Developer`,
    feedback: `Urvashi has genuinely done a great job with the RDP, explained the concepts thoroughly and supplemented them with proper documentation, challenging exercises and projects. The course really helped me clear React fundamentals, which made it easy for me to build projects.`,
  },
  {
    name: "Charan Kamal Singh",
    info: `3rd year student @ Panjab University`,
    avatar: "./images/testimonials/charan.png",
    feedback: `Enrolling in this course has been very valuable. The personalized attention, her industry expertise, and very insightful exercise design makes the course structure just outstanding. From learning React Development to understanding best practices and receiving code reviews, this course has helped me improve as a developer. I am grateful to have such Urvashi as a mentor in my learning process.`,
  },
  {
    name: "Devanshu Verma",
    info: `Software Developer @ Parangat Technologies`,
    avatar: "./images/testimonials/devanshu.png",
    feedback: `I really liked the way Urvashi arranged the content of the course. It really helped me to improve my coding skills gradually. She is a good mentor. 1:1 sessions were good and group discussions as well. She only says one thing : “Keep practising daily, get your hands dirty in coding.”`,
  },
  {
    name: "Prateek Gaur",
    info: "Software Engineer @ Accenture",
    feedback: `Hi TheCodeDose,

    Thank you so much for the Git and GitHub workshop you conducted previously.
    I also shared this valuable knowledge with a senior developer in my company, and she also found it to be a great way to save time and increase efficiency during code merging. I truly appreciate all the help and guidance you provided during the workshop. Thank you once again!`,
  },
]

module.exports = {
  socialLinks: SOCIAL_LINKS,
  skills: SKILLS,
  features: FEATURES,
  testimonials: TESTIMONIALS,
}
