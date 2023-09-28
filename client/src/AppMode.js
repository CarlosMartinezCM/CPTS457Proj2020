/* AppMode: The enumerated type for AppMode. */

const AppMode = {
    LOGIN: "LoginMode",
    HOMEPAGE: "HomePageMode",
    TWOFACTOR: "SMSMode",
};

Object.freeze(AppMode); //This ensures that the object is immutable.

export default AppMode;