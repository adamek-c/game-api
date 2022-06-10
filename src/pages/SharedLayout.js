import { Outlet } from "react-router-dom";

import { Aside } from "../components";

const SharedLayout = () => {
	return (
		<>
			<Aside />
			<Outlet />
		</>
	);
};

export default SharedLayout;
