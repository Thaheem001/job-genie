import Cookie from "js-cookie";

export const validateAuthCookie = async () => {
  const cookieKey = process.env.REACT_APP_AUTH_COOKIE;
  const authTokken = Cookie.get(cookieKey || "nothing");
  const APIURL = process.env.REACT_APP_API_URL;

  // console.log(authTokken)

  if (!authTokken) {
    return false;
  }

  const res = await fetch(`${APIURL}/api/verifyAuth`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ authTokken }),
  });

  const resObj = await res.json();

  // console.log(resObj)

  if (res.status !== 200) {
    throw new Error(resObj.error);

  }

  return true;
};
