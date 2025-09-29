import { useState } from "react";
import type { FC } from "react";

import { blogPosts } from "./blogPosts.tsx";
import { staffPicks } from "./blogPosts.tsx";

const BlogPost: FC = () => {
  const [activeTab, setActiveTab] = useState<"forYou" | "feature">("forYou");

  const DateIcon = () => (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        aria-labelledby="clap-filled-static-desc"
        viewBox="0 0 16 16"
      >
        <desc id="clap-filled-static-desc">A clap icon</desc>
        <path
          fill="#6B6B6B"
          fillRule="evenodd"
          d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895"
          clipRule="evenodd"
        ></path>
      </svg>
    </span>
  );

  const LikesIcon = () => (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#6B6B6B"
        aria-labelledby="response-filled-16px-desc"
        viewBox="0 0 16 16"
      >
        <desc id="response-filled-16px-desc">A response icon</desc>
        <path
          fill="#6B6B6B"
          d="M12.344 11.458A5.28 5.28 0 0 0 14 7.526C14 4.483 11.391 2 8.051 2S2 4.483 2 7.527c0 3.051 2.712 5.526 6.059 5.526a6.6 6.6 0 0 0 1.758-.236q.255.223.554.414c.784.51 1.626.768 2.512.768a.37.37 0 0 0 .355-.214.37.37 0 0 0-.03-.384 4.7 4.7 0 0 1-.857-1.958v.014z"
        ></path>
      </svg>
    </span>
  );

  const Comment = () => (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="nf ng"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.25 12h7.5"
        ></path>
      </svg>
    </span>
  );

  const SaveIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="cc"
    >
      <path
        fill="#000"
        d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4z"
      ></path>
    </svg>
  );

  const More = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.385 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41m5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59s-.58.86-.58 1.41m5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59s1.03-.2 1.42-.59.58-.86.58-1.41-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59s-.58.86-.58 1.41"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[70%_30%] h-screen overflow-y-scroll mt-14">
        {/* Left side */}
        <div className="flex flex-col  m-5 md:ml-20 md:mr-20 md:mt-20 gap-9">
          {/* Tab navigation */}
          <nav className="flex gap-6 border-b w-full">
            <button
              onClick={() => setActiveTab("forYou")}
              className={`pb-2 text-sm font-medium ${
                activeTab === "forYou"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              For you
            </button>
            <button
              onClick={() => setActiveTab("feature")}
              className={`pb-2 text-sm font-medium ${
                activeTab === "feature"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Featured
            </button>
          </nav>

          {/* Blog posts when "For you" is active */}
          {activeTab === "forYou" &&
            blogPosts.map((post) => (
              <div
                className="flex flex-col border-b gap-5 w-full items-center justify-between"
                key={post.id}
              >
                <div className="flex flex-row-2 w-full items-center justify-between gap-2">
                  <div className="flex-end w-full">
                    <div className="flex items-center justfiy-between gap-2 cursor-pointer">
                      <img
                        className="w-6 md:w-10 rounded-full"
                        src={post.userIcon}
                        alt={post.user}
                      />
                      <p className="text-xs font-thin">{post.user}</p>
                    </div>
                    <div>
                      <h1 className="font-sans font-bold sm:text-sm md:text-2xl leading-snug w-full md:w-70">
                        {post.post}
                      </h1>
                    </div>
                    <div className="flex my-2">
                      <p className="font-thin font-noto text-xs md:text-base sm:truncate">
                        {post.summary}
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex cursor-pointer items-center justify-center w-20 lg:w-40"
                    title="Post Icon"
                  >
                    <img src={post.userIcon} alt="user post Icon" className="w-full h-auto" />
                  </div>
                </div>

                <div className="flex-2 w-full">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-3">
                      <div className="date cursor-pointer flex flex-row items-center gap-1 text-xs font-thin">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 64 64"
                          >
                            <path
                              fill="#FFC017"
                              d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                            ></path>
                          </svg>
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <div className="date cursor-pointer flex flex-row items-center gap-1 text-xs font-thin">
                        <DateIcon />
                        <span>{post.commentCount}</span>
                      </div>
                      <div className="date cursor-pointer flex flex-row items-center gap-1 text-xs font-thin">
                        <LikesIcon />
                        <span>{post.commentCount}</span>
                      </div>
                    </div>
                    <div className="flex flex-row gap-7 my-2">
                      <div className="show_less cursor-pointer">
                        <Comment />
                      </div>
                      <div className="cursor-pointer">
                        <SaveIcon />
                      </div>
                      <div className="more_icon cursor-pointer">
                        <More />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Staff Picks when "Featured" is active */}
          {activeTab === "feature" && 
          (


          	<div className="animate-pulse flex items-center justify-center m-auto">
          	<div className="gap-6 items-center text-center flex flex-col ">
          		<h1>No Featured stories</h1>
          		<p>Featured stories from the publications you follow will appear here.</p>

          		<a href="" className="underline"> View Recommended publications</a>
          	</div>
          </div>

          	)
      }
        </div>

        {/* Right sidebar always visible */}
        <div className="border-l">
          {staffPicks.map((post, index) => (
            <div className="flex flex-col justify-center m-9" key={index}>
              <div className="flex items-center gap-4">
                <img className="w-4 md:w-10 rounded-full" src={post.userIcons} alt={post.author} />
                <p className="text-xs font-thin">{post.author}</p>
                <img src={post.logo} className="w-6" />
              </div>
              <div className="title_div gap-4">
                <p className="font-sans font-bold leading-snug">{post.description}</p>
              </div>
              <div className="flex flex-row items-center gap-3">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 64 64">
                    <path
                      fill="#FFC017"
                      d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                    ></path>
                  </svg>
                </span>
                <p className=" text-sm font-thin">{post.date}</p>
              </div>
            </div>
          ))}
          <div className="m-9 hover:underline">
            <a href="">See the full list</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
