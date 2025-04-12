import PageHeader from "@/app/components/PageHeader"; // ✅ Correct Import
import { Title } from '@/app/components/title';
import Link from 'next/link';

const experience: {
  company: string;
  role: string;
  date: string;
  description: string;
}[] = [
  {
    company: 'Simon Fraser University, Beedie School of Business',
    role: 'Research Assistant',
    date: 'May 2024 → Aug 2024',
    description: `
      Conducted thorough literature reviews to support data analysis and reporting initiatives.
      Implemented data collection and analysis methods to derive meaningful insights.
      Utilized web scraping tools with Python and BeautifulSoup for data extraction.
      Collaborated with cross-functional teams to gather and validate data requirements.
      Ensured data integrity and adherence to privacy and confidentiality policies.
    `,
  },
  {
    company: 'FUTRAINC, Mumbai',
    role: 'Web Developer / Content Writing / Marketing',
    date: 'Jan 2022 → Sep 2022',
    description: `
      Proficient in creating engaging, error-free content.
      Strong skills in writing, editing, and proofreading to ensure content quality.
      Developed content strategies based on data analysis, geographical targeting, and keyword optimization.
      Produced original and creative content for promotional advertisements and marketing materials.
      Managed meta business accounts of clients.
    `,
  },
  {
    company: 'SFU Data Science Student Society (DSSS), Burnaby, BC',
    role: 'SFSS Council Representative',
    date: 'April 2023 → April 2024',
    description: `
      Elected as the voice for data science students, steering advocacy efforts within the SFSS council.
      Championing student interests, facilitating dialogue between SFSS and the student body for improved resources and policies.
      Responsible for the transparent relay of SFSS activities and initiatives that align with student academic and career progression.
      Member of the Surrey Campus Committee, focusing on engagement initiatives and community-building events at the Surrey campus.
      Member of the Oversight Committee on Executive Officers, overseeing the conduct of Executive Officers, investigating conduct when needed, and recommending disciplinary action to Council.
    `,
  },
  {
    company: 'SIMON FRASER UNIVERSITY, Burnaby, BC',
    role: 'Volunteer/Student Mentor',
    date: 'Nov 2023 → Dec 2023',
    description: `
      Facilitated career exploration sessions for high school students during SFU’s Data Discovery Day.
      Guided discussions on academic and career pathways in Statistics, Actuarial Science, and Data Science.
      Shared insights and personal experiences, emphasizing the impact of statistical skills in various sectors.
      Engaged with students to inspire and inform about opportunities in data science careers.
    `,
  },
  {
    company: 'TESTIFY Foundation, Mumbai',
    role: 'Volunteer/Teacher',
    date: 'May 2022 → Aug 2023',
    description: `
      Led diverse community initiatives, such as feeding programs and tree plantations.
      Actively involved in vaccinating and caring for stray dogs to contribute to a healthier and more compassionate community.
      Established and ran a free slum school for pre-primary kids, given dedicated tutoring.
    `,
  },
  {
    company: 'H&M, Mumbai',
    role: 'Sales Associate',
    date: 'Mar 2023 → Aug 2023',
    description: `
      Delivered exceptional customer service in a dynamic retail setting.
      Achieved sales targets through effective customer engagement and product knowledge.
      Contributed to team success by actively participating in sales-related meetings and collaborations.
      Assisted in merchandising and maintaining store’s cleanliness and appearance.
      Managed transactions and inventory to ensure accuracy and availability of products.
    `,
  },
];

export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Information" />
      <section className="pb-8 prose prose-lg">
        <p>
          I&apos;m currently working as a Research Assistant at Simon Fraser University, Beedie School of Business. Additionally, I serve as an SFSS Council Representative for the SFU Data Science Student Society (DSSS), advocating for student interests and facilitating dialogues between SFSS and the student body.
        </p>

        <p>
          Previously, I worked as a Web Developer, Content Writer, and Marketer at FUTRAINC in Mumbai, where I developed content strategies and managed client meta business accounts. I also have experience as a Volunteer/Student Mentor at Simon Fraser University, where I facilitated career exploration sessions for high school students.
        </p>

        <p>
          My volunteer work includes leading community initiatives with the TESTIFY Foundation in Mumbai, and I have also worked as a Sales Associate at H&M, achieving sales targets and delivering exceptional customer service.
        </p>

        <p>
          In addition to my professional and volunteer experience, I enjoy working on various projects. Notable projects include the Vancouver Demographic and Disaster Risk Analysis, CS50 Minesweeper Game, SFU Admission Dashboard, and a Python Turtle Graphics project depicting the Indian flag on the moon. These projects have helped me develop a range of technical skills and apply my knowledge in practical scenarios.
        </p>
      </section>

      <section>
        <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
          Experience
        </Title>

        <div className="divide-y divide-slate-200">
          {experience.map((exp) => {
            return (
              <div className="flex gap-4 py-6" key={exp.date}>
                <div className="flex flex-col col-span-9">
                  <span className="text-slate-800 text-xl font-semibold">
                    {exp.company}
                  </span>
                  <span className="text-slate-700 text-lg">{exp.role}</span>
                  <span className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {exp.date}
                  </span>
                  <p className="mt-2 text-slate-600">{exp.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
