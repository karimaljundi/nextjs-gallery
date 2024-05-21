"use client";

import { useState } from "react";
import { useEffect } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "All Art",
    path: "/artworks",
  },
  {
    title: "Search",
    path: "/search",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  const {data: session} = useSession();
  // console.log(authOptions);

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <NavLink item={{ title: "Logout", path: "/" }} className={styles.logout}
          onClick={() => {
            signOut();
          }}
        />
       
      )
    } else if (status === "loading") {
      return (
        <span className="text-[#888] text-sm mt-7">Loading...</span>
      )
    } else {
      return (
        <NavLink item={{ title: "Login", path: "/login" }}/>
      
      )
      
    };

  };

// console.log("user:",  getUserById(session?.user?._id));
  
  return (
    <div className={styles.container}>
      <div className={styles.links}>
      
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user.isArtist ? (
          <>
            <NavLink item={{ title: "Admin", path: "/admin" }} />
            
          </>
        ) : null}
        {showSession()}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;