import app from "./app";
import connectDB from "./db";

const main = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (ex) {
    console.log(`There was an error when trying to run: ${ex}`);
  }
};

main();
