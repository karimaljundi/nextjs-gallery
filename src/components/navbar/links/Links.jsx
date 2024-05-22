"use client";

import { useState, useLayoutEffect } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const { status, data: session } = useSession();
  const router = useRouter();
  useLayoutEffect(() => {
    if (status === "unauthenticated" && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [status, router]);
  console.log(router.pathname);
  // useLayoutEffect(() => {
  //   if (status === "unauthenticated" && router.pathname !== "/login") {
  //     redirect("/login");
  //   }
  // }, [status]);

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <NavLink
          item={{ title: "Logout", path: "/" }}
          className={styles.logout}
          onClick={() => {
            signOut(
              {callbackUrl: "/"}
            );
          }}
        />
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7">Loading...</span>;
    } else {
      return <NavLink item={{ title: "Login", path: "/login" }} />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink
            item={{
              ...link,
              path: status === "authenticated" ? link.path : "/login",
            }}
            key={link.title}
          />
        ))}
        {session?.user?.isArtist && (
          <NavLink item={{ title: "Admin", path: "/admin" }} />
        )}
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
            <NavLink
              item={{
                ...link,
                path: status === "authenticated" ? link.path : "/login",
              }}
              key={link.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
