import { Card, Image, Text, Group, Badge, Center, Button } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import classes from './FeaturesCard.module.css';

const mockdata = [
  { label: '2 Pasajeros', icon: IconUsers },
  { label: '100 km/h en 4 segundos', icon: IconGauge },
  { label: 'Caja Manual', icon: IconManualGearbox },
  { label: 'Gasolina', icon: IconGasStation },
];

export function FeaturesCard() {
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius={0} className={classes.card} style={{
      maxWidth: "30%",
    }}>
      <Card.Section className={classes.imageSection}>
        <Image src="https://official-image.supre.com.co//images/images/source/descarga%20(1).png" alt="Tesla Model S" />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>KTM DUKE 200</Text>
          <Text fz="xs" c="dimmed">
            Esta luchadora es la única motocicleta naked de 200 cc dotada de un ADN de competición pura. Todo está perfectamente integrado para garantizar la máxima diversión de manejo y el dinamismo en curvas.
          </Text>
        </div>
        <Badge variant="outline" radius={0}>25% de Descuento</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label} mx={"3%"}>
         Características
        </Text>

        <Group gap={8} mb={-8} mx={"3%"}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={30} mx={"3%"}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              $16.000.800
            </Text>
            <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
            </Text>
          </div>

          <Button radius={0} style={{ flex: 1 }}>
            Comprar Ahora
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}