/**
* @name Spolity
* @version 0.0.1
* @description Spolitys custom client side profile changer
* @author spolity
*
*/

// me
const spol_display_name = "Spolity 🐈‍⬛";
const spol_username = "noirleeap";

// seo
const seos_username = "seo";

// my sister
const lunas_username = "luna";

module.exports = class spolity {
load() {
}
start() {
let _mods = webpackChunkdiscord_app.push([[Symbol()],{},({c})=>Object.values(c)]);
webpackChunkdiscord_app.pop();

const spolitysetprop = (...props) => {
    for (let m of _mods) {
        try {
            if (!m.exports || m.exports === window) continue;
            if (props.every((x) => m.exports?.[x])) return m.exports;

            for (let ex in m.exports) {
                if (props.every((x) => m.exports?.[ex]?.[x])) return m.exports[ex];
            }
        } catch {}
    }
}
setInterval(function () {
//-- SPOLITY 

// spol bot tag
// spolitysetprop("getUserStoreVersion").getUser("424759131036188672").bot = true;
// spolitysetprop("getUserStoreVersion").getUser("424759131036188672").flags = 65536;
// spol ai tag
// spolitysetprop("getUserStoreVersion").getUser("424759131036188672").isClyde = () => true;;

// spol display name
 spolitysetprop("getUserStoreVersion").getUser("424759131036188672").global_name = spol_display_name;
// spol username
 spolitysetprop("getUserStoreVersion").getUser("424759131036188672").username = spol_username;


//-- SEO
// seos username
 spolitysetprop("getUserStoreVersion").getUser("908160886886244412").username = seos_username;


//-- LUNA
// my sisters username
 spolitysetprop("getUserStoreVersion").getUser("424725601597915137").username = lunas_username;
}, 1000);
}
stop() {

}
}
/*@end@*/ 
