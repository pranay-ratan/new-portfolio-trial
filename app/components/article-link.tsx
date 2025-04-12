import { Title } from '@/app/components/title';
import Link from 'next/link';
import { FC, useState } from 'react';

interface Props {
  title: string;
  date: string;
  summary: string;
  href: string;
}

export const ArticleLink: FC<Props> = ({ title, date, summary, href }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Link href={href} passHref>
      <a
        className={`flex flex-col gap-4 py-8 first:pt-0 transition-all duration-200 transform 
          hover:scale-105 hover:text-blue-600 
          active:scale-95 ${isClicked ? 'opacity-80' : ''}`}
        onClick={() => {
          setIsClicked(true);
          setTimeout(() => setIsClicked(false), 200);
        }}
      >
        <div className="flex flex-col">
          <Title as="h2" variant="secondary">
            {title}
          </Title>
          <span className="text-slate-500 text-sm tracking-tight font-mono block mt-2">
            Published on{' '}
            <time dateTime={date}>
              {new Intl.DateTimeFormat('en-GB', {
                dateStyle: 'medium',
              }).format(new Date(date))}
            </time>
          </span>

          <p className="mt-2 text-slate-700 text-base">{summary}</p>
        </div>
      </a>
    </Link>
  );
};
