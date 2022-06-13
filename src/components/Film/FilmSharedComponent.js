import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { CssVarsProvider } from "@mui/joy/styles";

const FilmSharedComponent = ({
	id,
	name,
	background_image: img,
	released,
	rating,
}) => {
	return (
		<CssVarsProvider>
			<Card variant="outlined" sx={{ minWidth: "320px", my: 3 }}>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
					<Typography level="h2" fontSize="md" sx={{ alignSelf: "flex-start" }}>
						{name}
					</Typography>
					<Typography level="body2">{released}</Typography>
				</Box>
				<IconButton
					aria-label="bookmark Bahamas Islands"
					variant="plain"
					color="neutral"
					size="sm"
					sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
				>
					<BookmarkAdd />
				</IconButton>

				<AspectRatio ratio="4/3" sx={{ my: 2 }}>
					<img src={img} alt={name} />
				</AspectRatio>
				<Box sx={{ display: "flex" }}>
					<div>
						<Typography level="body3">Total price:</Typography>
						<Typography fontSize="lg" fontWeight="lg">
							$2900
						</Typography>
					</div>
					<Button
						variant="solid"
						size="sm"
						color="primary"
						aria-label="Explore Bahamas Islands"
						sx={{ ml: "auto", fontWeight: 600 }}
					>
						Explore
					</Button>
				</Box>
			</Card>
		</CssVarsProvider>
	);
};

export default FilmSharedComponent;
