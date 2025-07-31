import React from "react";
import "../App.css";
import leetcodeIcon from "../coding/leetcode_logo.png";
import codechefIcon from "../coding/codechef.png";
import codeforcesIcon from "../coding/codeforces_logo.png";
import gfgIcon from "../coding/gfg_logo.png";
import codolioIcon from "../coding/codolio.png";

const codingProfiles = [
  {
    name: "Codolio",
    url: "https://codolio.com/profile/Devang_10",
    icon: codolioIcon,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/code_d_33/",
    icon: leetcodeIcon,
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/code_d_101",
    icon: codechefIcon,
  },
  {
    name: "CodeForces",
    url: "https://codeforces.com/profile/devang_10",
    icon: codeforcesIcon,
  },
  {
    name: "GeeksForGeeks",
    url: "https://www.geeksforgeeks.org/user/devangjain0k",
    icon: gfgIcon,
  },
];

export const Coding = () => {
  return (
    <section className="coding-profiles-section" id="coding-profiles">
      <h2>Coding Profiles</h2>
      <div className="profiles-list">
        {codingProfiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-item"
            aria-label={`Visit ${profile.name} profile`}
          >
            {profile.icon && (
              <img
                src={profile.icon}
                alt={`${profile.name} icon`}
                className="profile-item-icon"
              />
            )}
            <span className="profile-item-name">{profile.name}</span>
            <i className="fas fa-external-link-alt profile-link-icon"></i>{" "}
          </a>
        ))}
      </div>
    </section>
  );
};
