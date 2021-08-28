import React from "react";
import "../styles/Loader.css";
import { HeartBoomLoading } from "react-loadingg";

export function Loader() {
  return (
    <div className="loading-container">
      <HeartBoomLoading color="red" size="large" />
      <p>do you love anime as I do?</p>
    </div>
  );
}
export function Loader1() {
  return (
    <div className="loading-container">
      <HeartBoomLoading color="red" size="large" />
      <p>anime is life</p>
    </div>
  );
}
