import React from 'react';
import { Input } from 'antd';
const { Search } = Input;
//import { fetchPosts } from '../service/weather'


function HomePage() {
  return (
    <section class="flex justify-center items-center h-screen">
      <div class="w-full max-w-[800px] min-w-[350px] px-6 md:px-20 mx-auto">
        <h1 class="pb-4 text-center">Let's get started</h1>
        <div class="flex justify-center">
        <Search placeholder="Search Country" enterButton="Search" size="large" />
        </div>
      </div>
    </section>
  );
}

export default HomePage;



