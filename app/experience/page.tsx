import { Title } from '@/app/components/title';

const experience: {
  company: string;
  role: string;
  date: string;
  description: string;
}[] = [
  {
    company: 'Simon Fraser University, Beedie School of Business',
    role: 'Research Assistant',
    date: 'May 2024 – Aug 2024',
    description: 'Conducted thorough literature reviews, implemented data collection and analysis methods, and utilized web scraping tools with Python and BeautifulSoup for data extraction.',
  },
  {
    company: 'FUTRAINC, Mumbai',
    role: 'Web Developer / Content Writing / Marketing',
    date: 'Jan 2022 – Sep 2022',
    description: 'Proficient in creating engaging content, developed content strategies, and managed meta business accounts of clients.',
  },
  {
    company: 'SFU Data Science Student Society (DSSS), Burnaby, BC',
    role: 'SFSS Council Representative',
    date: 'April 2023 – April 2024',
    description: 'Elected as the voice for data science students, championed student interests, and facilitated dialogue between SFSS and the student body.',
  },
  {
    company: 'TESTIFY Foundation, Mumbai',
    role: 'Volunteer/Teacher',
    date: 'May 2022 – Aug 2023',
    description: 'Led community initiatives, vaccinated and cared for stray dogs, and established a free slum school for pre-primary kids.',
  },
];

export default function ExperiencePage() {
  return (
    <main className="px-4 md:px-0">
      <section className="pb-14 border-b border-slate-300 mb-14">
        <Title as="h1" variant="primary" className="mb-8">
          Experience
        </Title>
        <div className="divide-y">
          {experience.map((exp) => (
            <div key={exp.company} className="py-4">
              <h2 className="text-slate-700 font-semibold tracking-tight text-xl">
                {exp.company}
              </h2>
              <p className="text-slate-500 text-base">{exp.role}</p>
              <p className="text-slate-500 text-base">{exp.date}</p>
              <p className="text-slate-700 text-base">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
