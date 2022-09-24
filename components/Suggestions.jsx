import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

export const USERS = [];

export function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
  };
}

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    Array.from({ length: 5 }).forEach((_, i) => {
      USERS.push({ ...createRandomUser(), id: i });
    });

    setSuggestions(USERS);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={profile.avatar}
            className="rounded-full w-10 h-10 border p-[2px]"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">{profile.userId}</h3>
          </div>

          <button className="text-blue-400 text-xs ml-4">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
