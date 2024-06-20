import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';

import clsx from 'clsx';
import { Title } from '@/app/components/title';

const projects: {
  href?: string;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    title: 'Vancouver Demographic and Disaster Risk Analysis',
    description:
      'An interactive Tableau dashboard visualizing Vancouver\'s demographics and disaster risks.',
    image: '/path/to/vancouver-image.png',
  },
  {
    title: 'CS50 PROJECT – Minesweeper Game',
    description:
      'A Minesweeper game developed in C for CS50, featuring a 10x10 grid, score tracking, and game state management.',
    image: '/path/to/minesweeper-image.png',
  },
  {
    href: 'https://github.com/pranay-ratan/awesome-design-systems',
    title: 'Awesome Design Systems',
    description: 'A curated list of design systems.',
    image: '/path/to/design-systems-image.png',
  },
  {
    title: 'CMPT 120 Project – Python Turtle Graphics: Flag on the Moon',
    description:
      'A Python Turtle script to depict the Indian flag on the lunar surface, enhancing understanding of graphical programming.',
    image: '/path/to/flag-image.png',
  },
  {
    title: 'PROJECT BI PROJECT – SFU Admission Dashboard',
    description:
      'An interactive Power BI dashboard visualizing SFU\'s admissions data, including student demographics and admission trends.',
    image: '/path/to/bi-dashboard-image.png',
  },
];

export default async function Home() {
  return (
    <main className="px-4 md:px-0">
      <section className="pb-14 border-b border-slate-300 mb-14">
        <h1 className="font-semibold text-4xl mb-4 text-slate-950">
          Hello, I’m Pranay.
          <span className="block text-slate-500 font-normal text-2xl">
            A Data Science Student at Simon Fraser University.
          </span>
        </h1>
        <p className="text-slate-700 text-lg md:text-xl leading-normal">
          I’m currently working as a Research Assistant at Simon Fraser University, Beedie School of Business, and as the SFSS Council Representative. I previously developed content strategies and web development projects at FUTRAINC in Mumbai.
        </p>
        <Link
          href="/info"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
        >
          More Information{' '}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>

      <section className="pb-16">
        <Title as="h2" variant="secondary" className="mb-4">
          Personal Projects
        </Title>

        <p className="text-slate-700 text-lg">
          Below is a selection of recent projects that I&apos;ve worked on.
        </p>
        <div className="lg:w-[170%] lg:-ml-[35%] grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-16">
          {projects.map((project) => {
            const isLink = !!project.href;
            const WrappingComponent = isLink ? Link : 'div';

            return (
              <WrappingComponent
                href={project.href ?? '/'}
                key={project.title}
                className={clsx(
                  'flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8'
                )}
              >
                <div className="relative rounded-xl mb-4 shadow-project">
                  <Image
                    width={450}
                    height={240}
                    quality={90}
                    src={project.image}
                    alt=""
                    className="rounded-xl bg-cover"
                  />
                </div>
                <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
                  {project.title}
                </h3>
                <h3 className="text-slate-500 text-base">
                  {project.description}
                </h3>
              </WrappingComponent>
            );
          })}
        </div>
      </section>
    </main>
  );
}
