import { useState, useEffect } from "react";
import { randomVenueUrl } from "@/lib/helpers";
import { StaticImageData } from "next/image";

export default function useCheckImage(url: string | undefined) {
  const [newUrl, setNewUrl] = useState<string | undefined | StaticImageData>(
    url
  );

  useEffect(() => {
    const defaultVenueUrl = randomVenueUrl();

    if (url) {
      const img = new Image();
      img.src = url;

      img.onerror = () => setNewUrl(defaultVenueUrl);
      img.onload = () => setNewUrl(url);

      setNewUrl(url);
    } else {
      setNewUrl(defaultVenueUrl);
    }
  }, [url]);

  return newUrl;
}
