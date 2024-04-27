import { Suspense } from "react";
import { Spin } from "antd";
import { AppRouter } from "./providers";

export default function App() {
  return (
    <Suspense fallback={<Spin />}>
      <AppRouter />
    </Suspense>
  );
}
