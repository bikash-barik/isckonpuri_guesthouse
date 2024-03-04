import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingActionButtons() {
  const jumpVariants = {
    initial: { y: 0 },
    jump: {
      y: [0, -10, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
      },
    },
  };
  return (
    <Box className="contributeButton"
      sx={{ "& > :not(style)": { m: 1 } }}
      style={{
        position: "fixed",
        bottom: "152px",
        right: "5px",
        display:'flex',
        zIndex: "999",
      }}
    >
      <motion.div
        initial="initial"
        animate="jump"
        variants={jumpVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Fab style={{ backgroundColor: "green" }} aria-label="add">
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/8114735348"
          >
            <FaWhatsapp style={{ fontSize: " 30px", color: "white" }} />
          </motion.a>
        </Fab>
      </motion.div>
      <Fab
        style={{ backgroundColor: "orange", fontSize: "15px", color: "white" }}
        variant="extended" href="/contribute"
      >
        Become a Dham Sevak
      </Fab>
    </Box>
  );
}
