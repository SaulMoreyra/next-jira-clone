import mongoose from "mongoose";

// 0 = disconnected
// 1 = connected
// 2 = connecting
// 3 = disconnecting

const connection = {
  isConnected: 0,
};

const MONGO_URL = process.env.MONGO_URL || "";

export const connect = async () => {
  if (connection.isConnected) {
    console.log("Ya estamos conectados");
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Usar conexion anterior");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(MONGO_URL);
  connection.isConnected = 0;

  console.log("Conectando", MONGO_URL);
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === "development") return;
  if (connection.isConnected === 0) return;
  await mongoose.disconnect();
};
