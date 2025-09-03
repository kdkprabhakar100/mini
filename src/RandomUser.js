import { useEffect, useState } from "react";

function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch user when component first mounts
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]); // take the first user
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setLoading(false);
      });
  }, []); // empty array = run once

  if (loading) return <p>Loading user...</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem" }}>
      <h2>Random User</h2>
      <img src={user.picture.medium} alt="user" />
      <p>
        {user.name.first} {user.name.last}
      </p>
      <p>Email: {user.email}</p>
      <button onClick={() => window.location.reload()}>Get New User</button>
    </div>
  );
}

export default RandomUser;
