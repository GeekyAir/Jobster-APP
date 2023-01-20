import { Landing, Error, Register, ProtectedRoute } from './pages';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Profile, AddJobs, AllJobs, SharedLayout } from './pages/dashboard'

function App() {
  return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<ProtectedRoute>
								<SharedLayout />
							</ProtectedRoute>
						}>
						
						<Route path='all-jobs' element={<AllJobs />} />
						<Route path='add-jobs' element={<AddJobs />} />
						<Route path='profile' element={<Profile />} />
						<Route index path='/' element={<AllJobs />} />
					</Route>
					<Route path='landing' element={<Landing />} />
					<Route path='register' element={<Register />} />
					<Route path='*' element={<Error />} />
				</Routes>
				<ToastContainer />
			</BrowserRouter>
		</>
	);
}

export default App;

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { Landing, Error, Register, ProtectedRoute } from './pages';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {
// 	Profile,
// 	AddJob,
// 	AllJobs,
// 	Stats,
// 	SharedLayout,
// } from './pages/dashboard';
// function App() {
// 	return (
// 		<BrowserRouter>
// 			<Routes>
// 				<Route
// 					path='/'
// 					element={
// 						<ProtectedRoute>
// 							<SharedLayout />
// 						</ProtectedRoute>
// 					}>
// 					<Route index element={<Stats />} />
// 					<Route path='all-jobs' element={<AllJobs />} />
// 					<Route path='add-job' element={<AddJob />} />
// 					<Route path='profile' element={<Profile />} />
// 				</Route>
// 				<Route path='landing' element={<Landing />} />
// 				<Route path='register' element={<Register />} />
// 				<Route path='*' element={<Error />} />
// 			</Routes>
// 			<ToastContainer position='top-center' />
// 		</BrowserRouter>
// 	);
// }

// export default App;