import type { Component } from 'solid-js';
import RssCard from './components/RssCard';

const App: Component = () => {
  return (
    <div class="mx-auto mt-16 max-w-screen-sm px-4 md:max-w-screen-lg">
      <h1 class="font-GmarketSans text-4xl font-bold leading-tight">
        최신 <span class="text-rose-600">RSS</span> 소식을
        <br />
        만나보세요.
      </h1>

      <div class="mt-6 text-lg">
        <p class="text-xl font-bold">제공하는 RSS 소식은 다음과 같습니다:</p>
        <p>1. 대한민국 정책브리핑 — 정책뉴스</p>
      </div>

      <div class="my-4 h-0.5 w-full border-b border-gray-300"></div>

      <div class="space-y-4 p-2">
        <RssCard title="ACME" description="FOO.BAR" link="https://acme.com" />
      </div>
    </div>
  );
};

export default App;
