"use client";
import React, { useContext } from "react";
import UserContext from "@/hooks/UserContext";

const SelectUser = () => {
  const { userRole, setUserRole } = useContext(UserContext);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedRole = event.target.value as "admin" | "user" | "supervisor";
    setUserRole(selectedRole);
    console.log(selectedRole);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-4">
      <div className="flex justify-between gap-2 text-sm">
        <label className="flex gap-1 cursor-pointer">
          Admin
          <input
            type="radio"
            name="admin"
            value="admin"
            checked={userRole === "admin"}
            onChange={handleClick}
          />
        </label>
        <label className="flex gap-1 cursor-pointer">
          Supervisor
          <input
            type="radio"
            name="supervisor"
            value="supervisor"
            checked={userRole === "supervisor"}
            onChange={handleClick}
          />
        </label>
        <label className="flex gap-1 cursor-pointer">
          User
          <input
            type="radio"
            name="user"
            value="user"
            checked={userRole === "user"}
            onChange={handleClick}
          />
        </label>
      </div>
      <p className="text-center mt-4">
        Selected rol:{" "}
        <span className="text-center font-semibold">{userRole}</span>
      </p>
    </div>
  );
};

export default SelectUser;
