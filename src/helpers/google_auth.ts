let auth2: any;
let loadingPromise: Promise<unknown>;

const createScript = () => {
  return new Promise<void>((resolve, reject) => {
    const el = document.getElementById('auth2_script_id');
    if (!el) {
      const gplatformScript = document.createElement('script');
      gplatformScript.setAttribute('src', 'https://apis.google.com/js/platform.js?onload=onGapiLoad');
      gplatformScript.setAttribute('async', 'true');
      gplatformScript.setAttribute('defer', 'defer');
      gplatformScript.setAttribute('id', 'auth2_script_id');
      document.head.appendChild(gplatformScript);
    }
    resolve();
  });
};

const onGapiLoadPromise = (params: any) => {
  return new Promise((resolve, reject) => {
    (window as any).onGapiLoad = () => {
      (window as any).gapi.load('auth2', () => {
        try {
          auth2 = (window as any).gapi.auth2.init(Object.assign({}, params));
        } catch (err) {
          reject({
            err: 'client_id missing or is incorrect, or if you added extra params maybe they are written incorrectly, did you add it to the component or plugin?',
          });
        }
        resolve(auth2);
      });
    };
  });
};

const loadingAuth2 = (params: any) => {
  if (auth2) {
    return Promise.resolve(auth2);
  } else {
    if (!loadingPromise) loadingPromise = onGapiLoadPromise(params);
    return loadingPromise;
  }
};

const load = (params: any) => {
  return Promise.all([loadingAuth2(params), createScript()]).then((results) => {
    return results[0];
  });
};

const wrapper = (f: { [x: string]: () => any }, method: string) => {
  if (f) return f[method]();
  else {
    const err = { err: 'Script not loaded correctly, did you added the plugin or the client_id to the component?' };
    return Promise.reject(err);
  }
};

const signIn = () => wrapper(auth2, 'signIn');

const signOut = () => wrapper(auth2, 'signOut');

const isSignedIn = () => wrapper(auth2.isSignedIn, 'get');

const currentUser = () => wrapper(auth2.currentUser, 'get');

const grantOfflineAccess = () => wrapper(auth2, 'grantOfflineAccess');

export const googleAuthService = {
  load,
  signIn,
  signOut,
  isSignedIn,
  currentUser,
  grantOfflineAccess,
};
