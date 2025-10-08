import app from "./app";

const PORT = process.env.PORT || 3000;

// Levanta el servidor
const server = app.listen(PORT, () => {
  console.log(`✅ Server corriendo en http://localhost:${PORT}`);
});

// Manejo elegante de cierre
process.on("SIGINT", () => {
  console.log("\n🛑 Server apagado por el usuario (Ctrl+C)");
  server.close(() => process.exit(0));
});

process.on("SIGTERM", () => {
  console.log("\n🛑 Server terminado por el sistema");
  server.close(() => process.exit(0));
});

export default server;