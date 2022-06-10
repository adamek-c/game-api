import {
	ListItemButton,
	ListItemIcon,
	ListItemText,
	List,
} from "@mui/material";

const AsideSheredComponent = ({
	handleListItemClick,
	selectedIndex,
	id,
	name,
	icon,
}) => {
	return (
		<>
			<List
				component="nav"
				aria-label="main mailbox folders"
				key={id}
				sx={{ py: 0 }}
			>
				<ListItemButton
					selected={selectedIndex === id}
					onClick={(event) => handleListItemClick(event, { id })}
				>
					<ListItemIcon>
						<span className="material-symbols-outlined">{icon}</span>
					</ListItemIcon>
					<ListItemText primary={name} sx={{ textTransform: "capitalize" }} />
				</ListItemButton>
			</List>
		</>
	);
};

export default AsideSheredComponent;
