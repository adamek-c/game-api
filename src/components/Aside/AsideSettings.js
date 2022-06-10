import Box from "@mui/material/Box";
import { settingsLinks } from "../../dataLinks";
import AsideSheredComponent from "./AsideSheredComponent";

const AsideSettings = ({ selectedIndex, handleListItemClick }) => {
	return (
		<Box sx={{ pt: "2rem" }}>
			{settingsLinks.map((link) => {
				return (
					<AsideSheredComponent
						key={link.id}
						selectedIndex={selectedIndex}
						handleListItemClick={handleListItemClick}
						{...link}
					/>
				);
			})}
		</Box>
	);
};

export default AsideSettings;
