import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
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
	ratings_count,
}) => {
	return (
		<CssVarsProvider>
			<Card
				variant="outlined"
				sx={{
					minWidth: "320px",
					my: 3,
				}}
			>
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
				<Box>
					<CardOverflow
						variant="soft"
						sx={{
							display: "flex",
							gap: 1.5,
							py: 1.5,
							px: "var(--Card-padding)",
							borderTop: "1px solid",
							borderRadius: 0,
							borderColor: "neutral.outlinedBorder",
							bgcolor: "background.level1",
						}}
					>
						<Typography
							level="body3"
							sx={{ fontWeight: "md", color: "text.secondary" }}
						>
							{rating} Rating
						</Typography>
						<Box sx={{ width: 2, bgcolor: "divider" }} />
						<Typography
							level="body3"
							sx={{ fontWeight: "md", color: "text.secondary" }}
						>
							{ratings_count} Ratings Count
						</Typography>
					</CardOverflow>
				</Box>
			</Card>
		</CssVarsProvider>
	);
};

export default FilmSharedComponent;
