import {Card, Center, Checkbox, Text} from "@mantine/core";

function Answer({text}: {text: string}) {
  return (
    <Card withBorder style={{
      width: "max-content",
      padding: 20,
    }}>
      <Center style={{
        justifyItems: "space-between",
      }}>
        <Checkbox/>
        <Text style={{
          fontWeight: 600,
          fontSize: 20,
          marginLeft: 20,
          fontFamily: "Blender Pro Bold",
        }}>
          {text}
        </Text>
      </Center>
    </Card>
  );
}

export default Answer;
