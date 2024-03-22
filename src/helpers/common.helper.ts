export const getImage = (src?: string) => {
  if (!src) return ""; // default image

  const assetsImages = ["/assets/images"];
  const publicImages = ["https://", "http://"];
  if ([...assetsImages, ...publicImages].includes(src)) return src;

  // BASE_URL + src
  return src;
};

export const getDomainFromURL = (url?: string) => {
  if (!url) return "";

  url = url.replace(/(^\w+:|^)\/\/|^www\./, "");

  var domain = url.split("/")[0];

  if (domain.startsWith("www.")) {
    domain = domain.substring(4);
  }

  return domain;
};

export const fake_call_api = <T>(
  cb: any,
  options?: {
    delay: number;
    error?: Error | null;
  }
) => {
  return new Promise<T>((resolve, reject) => {
    return setTimeout(() => {
      if (options?.error) reject(options.error);

      resolve(cb());
    }, options?.delay || 300);
  });
};
