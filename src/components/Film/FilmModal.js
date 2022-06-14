import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { useGlobalFilm } from "../../context/FilmsContext";
import { Typography } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
	width: { xs: "400px", sm: "600px", md: "800px" },
};

const FilmModal = ({ setOpen, open }) => {
	const { trailer } = useGlobalFilm();

	const handleClose = () => setOpen(false);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Card>
						{trailer ? (
							<CardMedia
								component="iframe"
								src={trailer[0].data.max}
								sx={{ height: { xs: "300px", md: "500px" } }}
							></CardMedia>
						) : (
							<Typography
								sx={{
									height: { xs: "300px", md: "500px" },
									textTransform: "capitalize",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								the trailer is not available 🤔
							</Typography>
						)}
					</Card>
				</Box>
			</Modal>
		</div>
	);
};

export default FilmModal;
