import Question from "../components/Question.tsx";
import {Button, Center, Text} from "@mantine/core";
import {useNavigate} from "react-router-dom";

function Questions() {
  const navigate = useNavigate();
  return (
    <div>
      <Center>
        <Text style={{
          fontWeight: 600,
          fontSize: 40,
          fontFamily: "Blender Pro Bold",
          marginTop: 50,
        }}>
          Responde las siguientes preguntas
        </Text>
      </Center>

      <div style={{
        paddingLeft: "15%",
        paddingRight: "15%",
      }}>
        <Question text={"1. Que tipo de moto prefieres"} answers={[
          "Deportiva",
          "Naked",
          "Touring",
          "Custom",
          "Scooter",
          "Cross",
        ]}/>


        <Center style={{
          marginTop: 50,

        }}>
          <Button size={"lg"} color={"#db0d15"} onClick={() => navigate("/recomendations")}>
            Continuar
          </Button>
        </Center>
      </div>
    </div>
  );
}

export default Questions;