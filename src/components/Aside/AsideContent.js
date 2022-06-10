import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { Divider, Typography } from "@mui/material";
import Avatar from "@mui/joy/Avatar";
import Badge from "@mui/joy/Badge";
import { CssVarsProvider } from "@mui/joy/styles";
import Widgets from "../Widgets";
import AsideList from "./AsideList";

const AsideContent = () => {
	return (
		<>
			<Box sx={{ mt: 6 }}>
				<List>
					<Box>
						<Box sx={{ textAlign: "center" }}>
							<CssVarsProvider>
								<Badge
									badgeInset="14%"
									color="success"
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "right",
									}}
								>
									<Avatar
										alt="Roman Hoffman"
										size="lg"
										src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									></Avatar>
								</Badge>
							</CssVarsProvider>
							<Typography variant="h6" sx={{ mt: 2 }}>
								Roman Hoffman
							</Typography>
						</Box>
						<Toolbar />
						<Divider />
						<Toolbar />
						<Box>
							<AsideList />
						</Box>
					</Box>
					<Box
						sx={{
							display: { xs: "block", md: "none" },
							textAlign: "center",
							mt: "3rem",
						}}
					>
						<Widgets />
					</Box>
				</List>
			</Box>
		</>
	);
};

export default AsideContent;
