import clientPromise from '@/lib/mongodb';

export const getCategories = async () => {
  try {
    const client = await clientPromise;
    const db = client.db('mobMocksDB');
    return db.collection('categories').find({}).toArray();
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getCategory = async () => {
  try {
    const client = await clientPromise;
    const db = client.db('mobMocksDB');
    return db.collection('categories').find({}).toArray();
  } catch (e) {
    console.error(e);
    return [];
  }
};
