import { useState, useEffect } from "react";
import { randomVenueUrl } from "@/lib/helpers";
import { StaticImageData } from "next/image";

const imageBlur = "/images/image-blur.jpg";

export default function useCheckImage(url: string | undefined) {
  const [newUrl, setNewUrl] = useState<string | undefined | StaticImageData>(
    url
  );

  useEffect(() => {
    const defaultVenueUrl = randomVenueUrl();

    if (url) {
      const img = new Image();
      img.src = url as string;
      img.onblur = () => setNewUrl(imageBlur);
      img.onerror = () => setNewUrl(defaultVenueUrl);
      img.onload = () => setNewUrl(url);
    } else {
      setNewUrl(defaultVenueUrl);
    }
  }, [url]);

  return newUrl;
}
