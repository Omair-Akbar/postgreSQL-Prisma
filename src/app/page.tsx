"use client"
import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { addUser } from '@/serverAction';

interface User {
  id: number;
  name: string;
  age: string;
  gender: string;
}

const Home: NextPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = async () => {
  //   try {
  //     const res = await fetch('/api/users');
  //     if (res.ok) {
  //       const data: User[] = await res.json();
  //       setUsers(data);
  //     } else {
  //       console.error('Failed to fetch users');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name,age,gender)
    addUser(name,age,gender);
  };

  return (
    <div className="min-h-screen bg-darkPurple text-white flex flex-col items-center py-10">
      <Head>
        <title>Next.js 14 API Example</title>
      </Head>
      <form onSubmit={handleSubmit} className="bg-lightPurple p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl mb-4">Add a User</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="mb-2 p-2 w-full bg-darkPurple text-white rounded-md"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          required
          className="mb-2 p-2 w-full bg-darkPurple text-white rounded-md"
        />
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Gender"
          required
          className="mb-2 p-2 w-full bg-darkPurple text-white rounded-md"
        />
        <div className='flex items-center justify-center'>
        <button
          type="submit"
          className="bg-accentPurple p-2 w-[50%] rounded-md hover:bg-purple-500 transition-colors"
        >
          Add User
        </button>
        </div>
      </form>
      {/* <div className="mt-10 w-full max-w-sm">
        <h2 className="text-xl mb-4">Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-2 p-2 bg-darkPurple rounded-md">
              {user.name} - {user.age} - {user.gender}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Home;
