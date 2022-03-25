import {
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/solid";
import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <Image
        onClick={() => router.push(`/?genre=fetchTrending`)}
        className="object-contain cursor-pointer"
        src="/bunflixlogosmall.png"
        alt="bunflixlogo.png"
        width={200}
        height={100}
      />
      <div className="flex flex-grow justify-evenly max-w-2xl mt-3">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="MY LIST" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
    </header>
  );
}

export default Header;
