import React, { useEffect, useState } from "react";
import axios from "axios";

import { log, success, error } from "../utils/logs";

export default () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    log("secret attempt...");
    axios
      .get("/api/secret")
      .then((res) => res.data)
      .then((img) => {
        setImage(img);
        setLoading(false);
        success(
          `Hello and, again, welcome to the Aperture Science computer-aided enrichment center.`
        );
      })
      .catch(({ response }) => {
        setLoading(false);
        error(response.status, response.statusText);
      });
  }, []);

  if (loading) return null;

  if (image) {
    return (
      <div>
        <img src={`/${image}`} alt="the cake is a lie" width="400" />
      </div>
    );
  }

  return (
    <>
      <p className="text-red-600 text-6xl">404 Not Found</p>
    </>
  );
};
