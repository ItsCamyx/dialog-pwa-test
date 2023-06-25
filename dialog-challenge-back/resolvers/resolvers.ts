import db from "../db.json";

export const resolvers = {
  Query: {
    list: (_: any, args: { name?: string }) => {
      const { name } = args;
      if (name) {
        const regex = new RegExp(name, "i");
        return db.filter((user) => regex.test(user.name));
      }
      return db;
    },
  },
};
