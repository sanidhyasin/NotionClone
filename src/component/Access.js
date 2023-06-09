import React from "react";
import { MdDone } from "react-icons/md";

const Access = () => {
  return (
    <div className="flex flex-col w-[264px] min-w-[180px] h-full max-h-[70vh] shadow-lg">
      <div className="grow min-h-0 overflow-hidden mr-0 mb-0 bg-white">
        <div className="flex flex-col">
          <div className="py-2">
            <div className="flex flex-row items-center transition-all cursor-pointer w-full px-2 mx-1 rounded">
              <div className="flex flex-col items-start leading-tight w-full min-h-[45px] text-sm py-1">
                <div className="min-w-0 flex-1">
                  <div className="overflow-hidden whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="mr-0 text-gray-600">Full access</div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden whitespace-normal text-gray-400 mt-[2px] text-xs">
                  Can edit and share with others.
                </div>
              </div>
              <div className="ml-auto mr-3 min-w-0 flex-shrink-0">
                <div className="">
                  <MdDone />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center transition-all cursor-pointer w-full px-2 mx-1 rounded">
              <div className="flex flex-col items-start leading-tight w-full min-h-[45px] text-sm py-1">
                <div className="min-w-0 flex-1">
                  <div className="overflow-hidden whitespace-nowrap">
                    <div className="flex flex-row items-center">
                      <div className="text-gray-600 mr-1">Can edit</div>
                      <div className="bg-gray-200">
                        <div className="px-1 text-[9px] text-gray-400">PLUS PLAN</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden whitespace-normal text-gray-400 mt-[2px] text-xs">
                  Can edit, but not share with others.
                </div>
              </div>
              <div className="ml-auto mr-3 min-w-0 flex-shrink-0">
                <div className=" hidden">
                  <MdDone />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center transition-all cursor-pointer w-full px-2 mx-1 rounded">
              <div className="flex flex-col items-start leading-tight w-full min-h-[45px] text-sm py-1">
                <div className="min-w-0 flex-1">
                  <div className="overflow-hidden whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="mr-0 text-gray-600">Can comment</div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden whitespace-normal text-gray-400 mt-[2px] text-xs">
                  Can view and comment, but not edit.
                </div>
              </div>
              <div className="ml-auto mr-3 min-w-0 flex-shrink-0">
                <div className="hidden">
                  <MdDone />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center transition-all cursor-pointer w-full px-2 mx-1 rounded">
              <div className="flex flex-col items-start leading-tight w-full min-h-[45px] text-sm py-1">
                <div className="min-w-0 flex-1">
                  <div className="overflow-hidden whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="mr-0 text-gray-600">Can view</div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden whitespace-normal text-gray-400 mt-[2px] text-xs">
                  Cannot edit or share with others.
                </div>
              </div>
              <div className="ml-auto mr-3 min-w-0 flex-shrink-0">
                <div className="hidden">
                  <MdDone />
                </div>
              </div>
            </div>
            <div className="text text-red-500 px-2 mx-1">No access</div>
          </div>
          <div className="text-xs p-3 bg-gray-100 text-gray-400 mt-px">
            You'll override permissions from the parent page if you change this
            role.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
