import { Box } from "@chakra-ui/layout";

interface Props {
  active?: boolean;
  onClick: () => void;
}

const PageItem: React.FC<Props> = ({ children, active, onClick }) => (
  <Box py="3" px="4" cursor="pointer" bgColor={!!active && "gray.200" } _hover={{ backgroundColor: "#eee" }} onClick={onClick}>
    { children }
  </Box>
)

export default PageItem;