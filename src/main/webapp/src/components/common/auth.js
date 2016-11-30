// import axios from 'axios';
//
// const auth = () => {
//
//     login(username, password, clientType, cb)
//     {
//         cb = arguments[arguments.length - 1];
//         if (localStorage.token) {
//             if (cb) cb(true);
//             this.onChange(true);
//             return;
//         }
//         pretendRequest(username, password, clientType) => (res)
//         {
//             if (res.authenticated) {
//                 localStorage.token = res.token;
//                 if (cb) cb(true);
//                 this.onChange(true);
//             } else {
//                 if (cb) cb(false);
//                 this.onChange(false);
//             }
//         });
//     }
//
//     getToken()
//     {
//         return localStorage.token;
//     }
//
//     logout(cb)
//     {
//         delete localStorage.token;
//         if (cb) cb();
//         this.onChange(false);
//     }
//
//     loggedIn()
//     {
//         return !!localStorage.token;
//     }
//
//     onChange()
//     {
//
//     }
//     pretendRequest(username, password, clientType, cb)
//     {
//         setTimeout(() => {
//             axios.post('/login', {
//                 username: username,
//                 password: password,
//                 clientType: clientType
//             })
//                 .then(function (response) {
//                     cb({
//                         authenticated: true,
//                         token: Math.random().toString(36).substring(7)
//                     });
//                 })
//                 .catch(function (error) {
//                     cb({ authenticated: false });
//                     console.write("user login failed : "+error.toString());
//                 });
//         }, 0);
//     }
// };
//
//
// export default auth;
