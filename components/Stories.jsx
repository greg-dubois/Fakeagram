import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

export const USERS = [];

export function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
  };
}

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    Array.from({ length: 20 }).forEach((_, i) => {
      USERS.push({ ...createRandomUser(), id: i });
    });

    setSuggestions(USERS);
  }, []);

  return (
    <div className="p-6 flex space-x-2 bg-white mt-8  border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black  ">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
