// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from "../Redux/authSlice";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(registerUser({ name, email, password })).then((result) => {
//       if (result.meta.requestStatus === "fulfilled") navigate("/");
//     });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
//           Create an Account 🚀
//         </h2>
//         <p className="text-gray-500 text-center mb-6">
//           Join us and start your journey today!
//         </p>

//         {error && (
//           <p className="text-red-500 text-center text-sm bg-red-100 p-2 rounded-md mb-4">
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-semibold">Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Create a password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center"
//             disabled={loading}
//           >
//             {loading ? (
//               <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//             ) : (
//               "Register"
//             )}
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-4">
//           Already have an account?{" "}
//           <span
//             onClick={() => navigate("/login")}
//             className="text-blue-600 font-semibold cursor-pointer hover:underline"
//           >
//             Login here
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
