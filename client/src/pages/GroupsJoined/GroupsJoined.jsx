import {
  Table,
  Group,
  Text,
  ActionIcon,
  rem,
  Container,
  Title
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import classes from "./GroupsJoined.module.css"

const data = [
  {
    name: "Coding",
  },
  {
    name: "Communication",
  },
];

export function GroupsJoined() {
  const rows = data.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Text fz="sm" fw={500}>
            {item.name}
          </Text>
        </Group>
      </Table.Td>

      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="red">
            <IconTrash
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Groups Joined
      </Title>
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Group</Table.Th>
              <Table.Th>Action</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Container>
  );
}
