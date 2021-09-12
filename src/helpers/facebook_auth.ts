export const FACEBOOK_SCRIPT_ID = 'facebook-jssdk'
export const INIT_TIMEOUT = 3000
const windowApp = window as any
// https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
export const LOGIN_STATUSES = {
    UNKNOWN: 'unknown',
    CONNECTED: 'connected',
    NOT_AUTHORIZED: 'not_authorized',
}

function handleLoadError(error: { target: { src: string } }) {
    // eslint-disable-next-line no-console
    console.error(
        new URIError(`The script ${error.target.src} didn't load correctly.`)
    )
}

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement
export function initSdk(options: any, locale = 'en_US') {
    return new Promise((resolve, reject) => {
        // prettier-ignore
        // https://developers.facebook.com/docs/javascript/advanced-setup
        windowApp.fbAsyncInit = function () {
            windowApp.FB.init(options)
            resolve(windowApp.FB)
        };
        /* eslint-disable */
        // prettier-ignore
        ; (function (d, s, id) {
            const fjs = d.getElementsByTagName(s)[0] as any
            if (d.getElementById(id)) { return; }
            const js = d.createElement(s) as any; js.id = id
            js.src = `//connect.facebook.net/${locale}/sdk.js`
            js.onerror = (error: { target: { src: string } }) => { handleLoadError(error); reject(error) } // non-facebook line
            fjs.parentNode.insertBefore(js, fjs)
        }(document, 'script', FACEBOOK_SCRIPT_ID))
        /* eslint-enable */
        windowApp.setTimeout(() => reject('window.fbAsyncInit timed out, see: https://developers.facebook.com/support/bugs/'), INIT_TIMEOUT)
    })
}

export function removeScript() {
    return new Promise(resolve => {
        const script = document.getElementById(FACEBOOK_SCRIPT_ID)
        if (script) script.remove()
        window.setTimeout(resolve)
    })
}

export class Sdk {
    static state = Object.seal({ isExternal: false, pending: null, consumers: 0 })

    static async _init(options: any, locale?: string | undefined) {
        if (Sdk.state.isExternal) return windowApp.FB
        if (windowApp.FB) {
            Sdk.state.isExternal = true
            return windowApp.FB
        }
        if (Sdk.state.pending) return Sdk.state.pending
        Sdk.state.pending = initSdk(options, locale) as any
        return Sdk.state.pending
    }

    static reset() {
        Sdk.state.consumers = 0
        Sdk.state.pending = null
        Sdk.state.isExternal = false
    }

    static subscribe(...args: any) {
        Sdk.state.consumers++
        return Sdk._init(args)
    }

    static async unsubscribe() {
        Sdk.state.consumers--
        if (Sdk.state.isExternal || Sdk.state.consumers) return
        Sdk.reset()
        return removeScript()
    }

    static isConnected(status: string) {
        return status === LOGIN_STATUSES.CONNECTED
    }

    static isDisconnected(status: string) {
        return !Sdk.isConnected(status)
    }

    static getLoginStatus() {
        return new Promise(resolve => windowApp.FB.getLoginStatus(resolve))
    }

    static login(options: any) {
        return new Promise(resolve => windowApp.FB.login(resolve, options))
    }

    static logout() {
        return new Promise(resolve => windowApp.FB.logout(resolve))
    }
}