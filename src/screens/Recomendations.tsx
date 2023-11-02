import {FeaturesCard} from "../components/FeaturesCard.tsx";
import {Center, Stack, Text} from "@mantine/core";

function Recomendations() {
  return (
    <div style={{
      height: "100vh",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      marginLeft: "7%",
      marginRight: "7%"
    }}>
      <Stack>
        <Center>
          <Text style={{
            fontWeight: 600,
            fontSize: 40,
            fontFamily: "Blender Pro Bold",
            marginTop: 20,
            marginBottom: 30,
          }}>
            Nuestras recomendaciones son
          </Text>
        </Center>
        <Center style={{
          justifyContent: "space-around",
        }}>
          <FeaturesCard/>
          <FeaturesCard/>
          <FeaturesCard/>
        </Center>
      </Stack>
    </div>
  );
}

export default Recomendations;