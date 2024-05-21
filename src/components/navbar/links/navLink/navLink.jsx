import React from 'react';
import Link from 'next/link'; // Assuming you're using Next.js's Link component
import styles from './navLink.module.css'; // Adjust the import path according to your project structure

const NavLink = ({ item, onClick }) => {
  // Determine if this is a special link (Login or Logout)
  const isSpecialLink = ['Login', 'Logout'].includes(item.title);

  // Extract pathname from the current route
  const pathName = window.location.pathname; // Note: This is a simple way to get the current path. Consider using useRouter() from Next.js for a more robust solution

  return (
    <Link href={item.path} onClick={isSpecialLink? onClick : undefined} >
      
        {item.title}
      
    </Link>
  );
};

export default NavLink;
