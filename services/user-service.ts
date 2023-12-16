import clientPromise from '@/lib/mongodb';

export type UserCreateInput = {
  email: string;
  hashedPassword: string;
  name?: string;
};

export const create = async (data: UserCreateInput) => {
  const client = await clientPromise;
  const db = client.db('mobMocksDB');

  return await db.collection('users').insertOne({
    ...data,
  });
};

export const findByEmail = async (email: string) => {
  const client = await clientPromise;
  const db = client.db('mobMocksDB');
  const existingUser = await db.collection('users').findOne({
    email,
  });

  return existingUser;
};

export const findById = async (id: string) => {
  const client = await clientPromise;
  const db = client.db('mobMocksDB');
  const existingUser = await db.collection('users').findOne({
    id,
  });

  return existingUser;
};
