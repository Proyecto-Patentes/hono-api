import { Hono } from "hono";
import plateRoutes from "./routes/plate";
import reportRoutes from "./routes/report";

const app = new Hono();

app.get("/", (c) => c.text("API running"));

app.route("/plate", plateRoutes);
app.route("/report", reportRoutes);

// Forzamos runtime Node.js (no Edge) para mysql2
export const config = { runtime: "nodejs" };

export default app;
