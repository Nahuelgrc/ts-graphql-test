import { DataSource } from "typeorm";
import { Users } from "./Entities/Users";

const connectDB = async () => {
  const AppDataSource: DataSource = new DataSource({
    type: "mysql",
    username: "user",
    host: "localhost",
    port: 3336,
    password: "password",
    database: "demodb",
    entities: [Users],
    synchronize: true,
    ssl: false,
  });

  const db: DataSource = await AppDataSource.initialize();
};

export default connectDB;
