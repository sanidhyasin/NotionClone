import React, { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { LuChevronsUpDown } from "react-icons/lu";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import Access from "./Access";
import Publish from "./Publish";
import house from "../assets/house.svg";

const NavbarNew = () => {
  const [toggle, setToggle] = useState(false);
  //   const [active, setActive] = useState(true);
  const [share, setShare] = useState(true);
  const [publish, setPublish] = useState(false);
  const [dropdownGeneral, setDropdownGeneral] = useState(false);
  const [accessIntiant, setAccessIntiant] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [owner, setOwner] = useState(false);
  const [members, setMembers] = useState(false);

  return (
    <nav className="w-full flex flex-col items-center top-0 px-6">
      <div className="flex w-full justify-between items-center max-w-full mx-auto flex-row">
        <div className="flex flex-row items-center space-x-2 font-medium">
          <span>
            <div className="flex items-center justify-center mr-1 h-5 bg-[#fadec9] rounded-sm px-1">
              <div className="">
                <IoHomeSharp className="text-[#fa720c]" />
              </div>
            </div>
          </span>
          General /
          <span className="w-[18px] h-[18px] items-center">
            <img src={house} alt="house" />
          </span>
          <span className=" font-medium">Initant Home</span>
        </div>
        <ul className="list-none flex gap-4 flex-row items-center text-gray-500">
          <li className="flex text-base text-gray-500">Edited just now</li>
          <li className="flex -space-x-2">
            <div className="z-40">
              <img
                src="https://cloudflare-ipfs.com/ipfs/QmY1TbBRNinZFtvXBjRrWH9jfsKQEbadgH7ESEv8LNeWVz"
                alt="profile"
                className="w-8 h-8 rounded-full border-2 border-gray-400"
              />
            </div>
            <div className="z-30">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3vRFfWCC3LBgVZRwAbqOHwx3b8f8RIFKMQ&usqp=CAU"
                alt="profile"
                className="w-8 h-8 rounded-full border-2 border-gray-400"
              />
            </div>
            <div className="z-20">
              <img
                src="https://news.artnet.com/app/news-upload/2022/01/lzKKY06D_400x400.jpg"
                alt="profile"
                className="w-8 h-8 rounded-full border-2 border-gray-400"
              />
            </div>
            <div className="z-10">
              <img
                src="https://news.artnet.com/app/news-upload/2022/01/CdiX0sc_400x400-1.jpg"
                alt="profile"
                className="w-8 h-8 rounded-full border-2 border-gray-400"
              />
            </div>
          </li>
          <li
            className="flex transition-all"
            onClick={() => setToggle(!toggle)}
          >
            Share
          </li>
          <li className="flex items-center">
            <BiMessageDetail className="text-lg mt-[2px]" />
          </li>
          <li className="flex">
            <FiClock className="text-lg" />
          </li>
          <li className="flex">
            <BiStar className="text-lg" />
          </li>
          <li className="flex">
            <BsThreeDots className="text-lg" />
          </li>
        </ul>
      </div>
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } transition-all absolute top-12 p-2 flex-col right-0 mx-1 min-w-[520px] max-h-[540px] z-10 rounded-md bg-slate-50 shadow-lg`}
      >
        <div className="flex px-2 flex-row border-b-2 border-gray-200 space-x-4 text-sm mb-2">
          <div
            className={`${
              share ? "border-b-2 border-black font-medium" : "opacity-20"
            } py-1  text-gray-700`}
            onClick={() => {
              setShare(!share);
              setPublish(!publish);
            }}
          >
            Share
          </div>
          <div
            className={`${
              publish ? "border-b-2 border-black font-medium" : "opacity-20"
            } py-1 text-gray-700`}
            onClick={() => {
              setShare(!share);
              setPublish(!publish);
            }}
          >
            Publish
          </div>
        </div>
        <div
          className={`${
            share ? "flex" : "hidden"
          } flex-col max-h-[540px] transition-all`}
        >
          <div className="pb-2 px-2 flex flex-row space-x-1">
            <div className="flex w-full flex-start border-2 rounded-md bg-[#F2F1EE] cursor-text">
              <div className="flex items-center border-none bg-transparent text-inherit w-full border-t-2 border-l-2 leading-5">
                <input
                  type="email"
                  placeholder="Add people, groups, or emails..."
                  size={1}
                  autoComplete="off"
                  className=" focus:outline-[#2383e2] text-inherit border-none bg-none w-full block resize-none p-1"
                  onClick={() => {
                    setDropdownGeneral(false);
                    setAccessIntiant(false);
                    setFirst(false);
                    setMembers(false);
                    setOwner(false);
                    setPublish(false);
                    setSecond(false);
                  }}
                />
              </div>
            </div>
            <div className="transition-all cursor-pointer inline-flex justify-center items-center h-8 rounded-md shadow bg-[#2383e2] text-white px-3 text-sm font-medium">
              Invite
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center shadow-sm flex-row rounded-md px-3 bg-[#f1f1ef] mx-1 my-3 h-9">
              <div className="ml-3 mr-2">
                <div className="bg-white rounded-full w-6 h-6">
                  <img
                    src="https://cloudflare-ipfs.com/ipfs/QmY1TbBRNinZFtvXBjRrWH9jfsKQEbadgH7ESEv8LNeWVz"
                    alt=""
                    className="block object-cover h-full w-full rounded-full"
                  />
                </div>
              </div>
              <div className="mx-2 text-sm inline-flex">
                You have full access to this page via{" "}
                <span className="inline-flex items-center ml-2">
                  <div className="flex items-center justify-center mr-1 h-5 bg-[#fadec9] rounded-sm px-1">
                    <div className="">
                      <IoHomeSharp className="text-[#fa720c]" />
                    </div>
                  </div>
                  <div className="transition-all cursor-pointer text-gray-500 underline">
                    <span>General</span>
                  </div>
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-400 font-medium px-3 pt-2">
              From General
            </div>
            <div
              className="transition-all cursor-pointer"
              onClick={() => {
                setDropdownGeneral(!dropdownGeneral);
                setAccessIntiant(false);
                setFirst(false);
                setMembers(false);
                setOwner(false);
                setPublish(false);
                setSecond(false);
              }}
            >
              <div className="flex items-center min-h-[52px] py-2 px-3 flex-row">
                <div className="flex items-center justify-center w-[34px] h-[34px] bg-[#fadec9] rounded-md mr-[10px]">
                  <div className="">
                    <IoHomeSharp className="text-[#fa720c] text-[22px]" />
                  </div>
                </div>
                <div className="mr-auto min-w-0">
                  <div className="flex flex-row">
                    <div className="text-sm whitespace-nowrap font-normal text-gray-800">
                      Everyone at General
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs whitespace-nowrap overflow-hidden">
                    10 people
                  </div>
                </div>
                <div className="flex items-center ml-2">
                  <div className="transition-all cursor-default inline-flex items-center whitespace-nowrap h-7 rounded-md text-xs min-w-0 px-2 -mr-1 text-gray-400">
                    <span>Full access</span>
                    <LuChevronsUpDown className="text-[16px]" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                dropdownGeneral ? "block" : "hidden"
              } pl-[16px] block transition-all`}
            >
              <div
                className="w-full flex flex-col relative"
                onClick={() => {
                  setOwner(!owner);
                  setAccessIntiant(false);
                  setFirst(false);
                  setMembers(false);
                  setPublish(false);
                  setSecond(false);
                }}
              >
                <div className="transition-all cursor-pointer">
                  <div className="flex items-center min-h-[52px] py-2 px-3 flex-row">
                    <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full mr-[10px]">
                      <div className="">
                        <img
                          src="https://cloudflare-ipfs.com/ipfs/QmY1TbBRNinZFtvXBjRrWH9jfsKQEbadgH7ESEv8LNeWVz"
                          alt="teamspace owner"
                          className="h-full w-full rounded-full"
                        />
                      </div>
                    </div>
                    <div className="mr-auto min-w-0">
                      <div className="flex flex-row">
                        <div className="text-sm whitespace-nowrap font-normal text-gray-800">
                          Teamspace Owners's
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center ml-2">
                      <div className="transition-all cursor-default inline-flex items-center whitespace-nowrap h-7 rounded-md text-xs min-w-0 px-2 -mr-1 text-gray-400 space-x-1">
                        <span>Full access</span>
                        <BsChevronDown className="text-[12px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    owner ? "block" : "hidden"
                  } absolute top-[6vh] right-0 transition-all z-10`}
                >
                  <Access />
                </div>
              </div>
              <div
                className="w-full flex flex-col relative"
                onClick={() => {
                  setMembers(!members);
                  setAccessIntiant(false);
                  setFirst(false);
                  setOwner(false);
                  setPublish(false);
                  setSecond(false);
                }}
              >
                <div className="transition-all cursor-pointer">
                  <div className="flex items-center min-h-[52px] py-2 px-3 flex-row">
                    <div className="flex items-center justify-center w-[34px] h-[34px] bg-[#fadec9] rounded-md mr-[10px]">
                      <div className="">
                        <IoHomeSharp className="text-[#fa720c] text-[22px]" />
                      </div>
                    </div>
                    <div className="mr-auto min-w-0">
                      <div className="flex flex-row">
                        <div className="text-sm whitespace-nowrap font-normal text-gray-800">
                          Teamspace members
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center ml-2">
                      <div className="transition-all cursor-default inline-flex items-center whitespace-nowrap h-7 rounded-md text-xs min-w-0 px-2 -mr-1 text-gray-400 space-x-1">
                        <span>Full access</span>
                        <BsChevronDown className="text-[12px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    members ? "block" : "hidden"
                  } absolute top-[6vh] right-0 transition-all z-10`}
                >
                  <Access />
                </div>
              </div>
            </div>
            <div
              className="flex flex-col transition-all cursor-pointer relative"
              onClick={() => {
                setAccessIntiant(!accessIntiant);
                setDropdownGeneral(false);
                setFirst(false);
                setMembers(false);
                setOwner(false);
                setPublish(false);
                setSecond(false);
              }}
            >
              <div className="flex items-center min-h-[52px] py-2 px-3 flex-row">
                <div className="flex items-center justify-center w-[34px] h-[34px] bg-[#fadec9] rounded-md mr-[10px]">
                  <div className="">
                    <IoHomeSharp className="text-[#fa720c] text-[22px]" />
                  </div>
                </div>
                <div className="mr-auto min-w-0">
                  <div className="flex flex-row">
                    <div className="text-sm whitespace-nowrap font-normal text-gray-800">
                      Everyone at Intiant
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs whitespace-nowrap overflow-hidden">
                    10 people
                  </div>
                </div>
                <div className="flex items-center ml-2">
                  <div className="transition-all cursor-default inline-flex items-center whitespace-nowrap h-7 rounded-md text-xs min-w-0 px-2 -mr-1 text-gray-400 space-x-1">
                    <span>Full access</span>
                    <BsChevronDown className="text-[12px]" />
                  </div>
                </div>
              </div>

              <div
                className={`${
                  accessIntiant ? "block" : "hidden"
                } absolute top-[6vh] right-0 transition-all z-10`}
              >
                <Access />
              </div>
            </div>
            <div className="text-xs text-gray-400 font-medium px-3 pt-2">
              More people with access
            </div>
            <div
              className="flex flex-col transition-all cursor-pointer relative"
              onClick={() => {
                setFirst(!first);
                setDropdownGeneral(false);
                setAccessIntiant(false);
                setMembers(false);
                setOwner(false);
                setPublish(false);
                setSecond(false);
              }}
            >
              <div className="flex items-center min-h-[52px] py-2 px-3 flex-row">
                <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full mr-[10px]">
                  <div className="">
                    <img
                      src="https://news.artnet.com/app/news-upload/2022/01/lzKKY06D_400x400.jpg"
                      alt="teamspace owner"
                      className="h-full w-full rounded-full"
                    />
                  </div>
                </div>
                <div className="mr-auto min-w-0">
                  <div className="flex flex-row">
                    <div className="text-sm whitespace-nowrap font-normal text-gray-800">
                      Chinmay
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs whitespace-nowrap overflow-hidden">
                    chinmay@gmail.com
                  </div>
                </div>
                <div className="flex items-center ml-2">
                  <div className="transition-all cursor-default inline-flex items-center whitespace-nowrap h-7 rounded-md text-xs min-w-0 px-2 -mr-1 text-gray-400 space-x-1">
                    <span>Full access</span>
                    <BsChevronDown className="text-[12px]" />
                  </div>
                </div>
              </div>
              <div
                className={`${
                  first ? "block" : "hidden"
                } absolute top-[5vh] right-0 transition-all z-10`}
              >
                <Access />
              </div>
            </div>
            <div
              className="flex flex-col transition-all cursor-pointer relative"
              onClick={() => {
                setSecond(!second);
                setDropdownGeneral(false);
                setAccessIntiant(false);
                setFirst(false);
                setMembers(false);
                setOwner(false);
                setPublish(false);
              }}
            >
              <div className="flex items-center min-h-[52px] py-2 px-3 flex-row">
                <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full mr-[10px]">
                  <div className="">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3vRFfWCC3LBgVZRwAbqOHwx3b8f8RIFKMQ&usqp=CAU"
                      alt="teamspace owner"
                      className="h-full w-full rounded-full"
                    />
                  </div>
                </div>
                <div className="mr-auto min-w-0">
                  <div className="flex flex-row">
                    <div className="text-sm whitespace-nowrap font-normal text-gray-800">
                      Aryan
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs whitespace-nowrap overflow-hidden">
                    aryan@gmail.com
                  </div>
                </div>
                <div className="flex items-center ml-2">
                  <div className="transition-all cursor-default inline-flex items-center whitespace-nowrap h-7 rounded-md text-xs min-w-0 px-2 -mr-1 text-gray-400 space-x-1">
                    <span>Full access</span>
                    <BsChevronDown className="text-[12px]" />
                  </div>
                </div>
              </div>
              <div
                className={`${
                  second ? "block" : "hidden"
                } absolute top-[5vh] right-0 transition-all`}
              >
                <Access />
              </div>
            </div>
            <div className="flex flex-row items-center border-t-2 border-gray-200 justify-between p-1">
              <div className=" flex flex-row items-center text-gray-400 space-x-1 justify-center">
                <span>
                  <AiOutlineQuestionCircle />
                </span>
                <span className="text-[13px]">Learn more</span>
              </div>
              <div className="flex flex-row items-center justify-center space-x-1 text-gray-700">
                <BsLink45Deg className="text-[20px]" />
                <span className="text-[13px]">Copy link</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            publish ? "flex" : "hidden"
          } flex-col max-h-[540px] transition-all`}
        >
          <Publish />
        </div>
      </div>
    </nav>
  );
};

export default NavbarNew;
