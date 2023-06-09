import React, { useEffect, useState } from "react";
import { CgEditBlackPoint } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Publish = () => {
  const [text, setText] = useState(
    "https://initant.notion.site/initant-Home-14783h8ufn487f78bbbn4738"
  );
  const [copyState, setCopyState] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex flex-col transition-all">
      <div className="flex relative items-center text-sm font-medium mx-2 pt-1 text-[#2383e2]">
        <span>
          <CgEditBlackPoint className="text-lg mr-1" />
        </span>
        This page is live on the web
      </div>
      <div
        className={`${
          copied ? "flex" : "hidden"
        } h-10 w-32 px-2 py-1 bg-slate-200 text-gray-800 absolute flex flex-row items-center justify-center text-sm rounded-md font-medium right-5 top-11 transition-transform`}
      >
        Link copied
      </div>
      <div className="flex items-center w-full h-auto py-4 px-3">
        <div className="flex-1">
          <div className="flex px-px">
            <div className="flex items-center w-full text-sm py-1 bg-gray-200 cursor-text flex-1 border-y-[1px] border-gray-300 border-l-[1px] rounded-tl-md rounded-bl-md">
              <input
                type="text"
                className=" text-inherit border-none bg-transparent w-full block resize-none px-2 focus:outline-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <CopyToClipboard text={text} onCopy={() => setCopyState(true)}>
              {/* single child to which event is applied*/}

              <div className="copy-area items-center">
                {/*button to copy text */}
                <div
                  className="transition-transform inline-flex items-center justify-center whitespace-nowrap h-8 px-3 border-[1px] border-gray-300 rounded-tr-md rounded-br-md"
                  onClick={() => setCopied(true)}
                >
                  Copy web link
                </div>
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-[10px] mx-[2px]">
        <div className="transition-all mx-1 rounded-sm">
          <div className="flex flex-row items-center w-full min-h-[28px] text-sm mt-2">
            <div className="flex flex-row ml-3 mr-2 min-w-0 flex-1 items-center">
              <div className="flex whitespace-nowrap overflow-hidden text-sm text-gray-800 items-center mr-1">
                Link expires
              </div>
              <div className="flex bg-gray-200 items-center rounded-sm">
                <div className="flex px-1 h-4 items-center text-[9px] text-gray-400 py-0 font-medium">
                  PLUS PLAN
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center text-sm">
              Never
              <span>
                <BsChevronDown className="ml-1 text-gray-400" />
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center w-full min-h-[28px] text-sm">
            <div className="flex flex-row ml-3 mr-2 min-w-0 flex-1 items-center">
              <div className="flex whitespace-nowrap overflow-hidden text-sm text-gray-800 items-center mr-1">
                Allow editing
              </div>
            </div>
            <div className="flex flex-row items-center text-sm">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          <div className="flex flex-row items-center w-full min-h-[28px] text-sm">
            <div className="flex flex-row ml-3 mr-2 min-w-0 flex-1 items-center">
              <div className="flex whitespace-nowrap overflow-hidden text-sm text-gray-800 items-center mr-1">
                Allow comments
              </div>
            </div>
            <div className="flex flex-row items-center text-sm">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          <div className="flex flex-row items-center w-full min-h-[28px] text-sm">
            <div className="flex flex-row ml-3 mr-2 min-w-0 flex-1 items-center">
              <div className="flex whitespace-nowrap overflow-hidden text-sm text-gray-800 items-center mr-1">
                Allow duplicate as template
              </div>
            </div>
            <div className="flex flex-row items-center text-sm">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          <div className="flex flex-row items-center w-full min-h-[28px] text-sm">
            <div className="flex flex-row ml-3 mr-2 min-w-0 flex-1 items-center">
              <div className="flex whitespace-nowrap overflow-hidden text-sm text-gray-800 items-center mr-1">
                Allow engine indexing
              </div>
              <div className="flex bg-gray-200 items-center rounded-sm">
                <div className="flex px-1 h-4 items-center text-[9px] text-gray-400 py-0 font-medium">
                  PLUS PLAN
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center text-sm">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-2 mb-4 mx-3 space-x-2">
        <div className="transition-all inline-flex items-center justify-center whitespace-nowrap rounded h-[34px] px-3 text-sm border-[1px] border-gray-300 flex-grow">
          Unpublish
        </div>
        <div className="transition-all inline-flex items-center justify-center whitespace-nowrap rounded h-[34px] px-3 font-medium text-white text-sm border-[1px] border-gray-300 flex-grow bg-[#2383e2]">
          View site
        </div>
      </div>
    </div>
  );
};

export default Publish;
