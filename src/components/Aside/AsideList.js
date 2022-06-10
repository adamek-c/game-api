import React from "react";
import { releasesLinks, topLinks } from "../../dataLinks";
import { Typography } from "@mui/material";
import AsideSheredComponent from "./AsideSheredComponent";
import AsideSettings from "./AsideSettings";
import { Divider } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

const AsideList = () => {
	const [selectedIndex, setSelectedIndex] = React.useState();

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index.id);
	};

	return (
		<>
			<Typography variant="h5" sx={{ color: "text.secondary", mx: 2, mb: 2 }}>
				New Releases
			</Typography>

			{releasesLinks.map((link) => {
				return (
					<AsideSheredComponent
						key={link.id}
						selectedIndex={selectedIndex}
						handleListItemClick={handleListItemClick}
						{...link}
					/>
				);
			})}

			<Typography variant="h5" sx={{ color: "text.secondary", mx: 2, m: 2 }}>
				Top
			</Typography>
			{topLinks.map((link) => {
				return (
					<AsideSheredComponent
						key={link.id}
						selectedIndex={selectedIndex}
						handleListItemClick={handleListItemClick}
						{...link}
					/>
				);
			})}
			<Toolbar />
			<Divider />
			<AsideSettings
				selectedIndex={selectedIndex}
				handleListItemClick={handleListItemClick}
			/>
		</>
	);
};

export default AsideList;
