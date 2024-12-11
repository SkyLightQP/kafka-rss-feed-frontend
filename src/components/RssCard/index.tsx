import type { Component } from 'solid-js';

interface RssCardProps {
  readonly title: string;
  readonly description: string;
  readonly link: string;
}

const RssCard: Component<RssCardProps> = (props) => {
  return (
    <div class="w-full space-y-2 rounded-md border border-gray-200 p-3">
      <h1 class="text-xl font-bold">{props.title}</h1>
      <p>{props.description}</p>
      <p>
        자세히보기:{' '}
        <a href={props.link} target="_blank" rel="noreferrer" class="text-blue-800 underline">
          {props.link}
        </a>
      </p>
    </div>
  );
};

export default RssCard;
