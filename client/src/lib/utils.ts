import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const sanitizeObject = <T>(obj: T): Partial<T> => {
  const newObj = { ...obj };
  let key: keyof typeof newObj;
  for (key in newObj) {
    if (newObj[key] === "" || newObj[key] === null) delete newObj[key];
  }

  return newObj;
};

const decodeHtmlString = (str: string) =>
  str.replaceAll("%5B", "[").replaceAll("%5D", "]");

const debounce = (delay: number, fn: Function) => {
  let latestArgs: any = null;

  let timeout: NodeJS.Timeout | null = null;
  let didCallWhileTimeout = false;
  const callFn = () => {
    if (timeout) {
      didCallWhileTimeout = true;
      return;
    }

    didCallWhileTimeout = false;
    fn(...latestArgs);

    timeout = setTimeout(() => {
      timeout = null;
      if (didCallWhileTimeout) {
        callFn();
      }

      didCallWhileTimeout = false;
    }, delay);
  };

  return (...args: any) => {
    latestArgs = args;

    callFn();
  };
};

// const formValuesToQuery = (formData: SearchFormValues) => {
//   const sanitized = sanitizeObject(formData);

//   const params = new URLSearchParams();
//   let key: keyof typeof sanitized;
//   for (key in sanitized) {
//     const value = sanitized[key];

//     const paramName = FilterNameToQueryParam[key];
//     params.append(paramName, value.toString());
//   }

//   return params.toString();
// };

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { sanitizeObject, decodeHtmlString, cn, debounce };
