import {Center, Divider, Stack, Text} from "@mantine/core";
import Answer from "./Answer.tsx";

function Question({ text, answers }: {text: string, answers: string[]}) {
  return (
    <div style={{
      width: "max-content",
      marginTop: 25,
    }}>
      <Stack>
        <div style={{
          justifyItems: "left"
        }}>
          <Text style={{
            width: "max-content",
            fontWeight: 600,
            fontSize: 24,
            fontFamily: "Blender Pro Bold",
          }}>
            {text}
          </Text>
        </div>
        <Center style={{
          justifyItems: "left",
          width: "max-content"
        }}>
          <Divider orientation={"vertical"} size={"md"} style={{
            marginRight: 20,
          }}/>
          <Stack style={{
            justifyItems: "left",
            width: "max-content"
          }}>
            {answers.map((answer) => (
              <Answer text={answer}/>
            ))}
          </Stack>
        </Center>
      </Stack>
    </div>
  );
}

export default Question;