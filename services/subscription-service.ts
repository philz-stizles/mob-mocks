import clientPromise from '@/lib/mongodb';
import { Document, Filter } from 'mongodb';

export type SubscriptionCreateInput = {};

export const create = async (data: SubscriptionCreateInput) => {
  const client = await clientPromise;
  const db = client.db('mobMocksDB');

  return await db.collection('subscriptions').insertOne({
    ...data,
  });
};

export const findOne = async (filter: Filter<Document>) => {
  const client = await clientPromise;
  const db = client.db('mobMocksDB');
  return await db.collection('subscriptions').findOne(filter);
};

export const findById = async (id: string) => {
  const client = await clientPromise;
  const db = client.db('mobMocksDB');
  return await db.collection('subscriptions').findOne({
    id,
  });
};
