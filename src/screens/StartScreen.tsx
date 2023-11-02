import {ActionIcon, Stack, Text} from "@mantine/core";
import {IconArrowBigRightFilled} from "@tabler/icons-react";
import {motion} from "framer-motion"
import {useNavigate} from "react-router-dom"; //varias vista//

function StartScreen() {
  const navigate = useNavigate() //hook de react router, cambio de ruta
  return (
    <Stack
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          fontWeight: 700,
          color: "#fff",
          textAlign: "center",
          margin: "0 auto",
          marginTop: 200,
          marginBottom: 200,
          fontFamily: "Blender Pro Bold",
        }}
      >
        Bienvenido a WheelWise
      </Text>
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}>

      <motion.div
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1  }}
        style={{
          width: "max-content"
        }}                                        //boton. evento onclick y llamo el hook navigate para cambiar de vista
      >                                                                                                 
        <ActionIcon radius={100} size={100} color="#db0d15" onClick={() => navigate("/questions")}> 
          <IconArrowBigRightFilled size={50}/>
        </ActionIcon>
      </motion.div>
      </div>
    </Stack>
  )
}

export default StartScreen