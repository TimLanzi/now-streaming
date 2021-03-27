import { Box, Image } from "@chakra-ui/react"

interface Props {
  img: string;
  // link: string;
  size: string;
}

const StreamingServiceLogo: React.FC<Props> = ({ img, size }) => (
  <Box mr="2" mb="2">
    {/* <a href={link} target="_blank" rel="noopener noreferrer"> */}
    <Image borderRadius="5px" w={size} h={size} src={img} alt="" />
    {/* </a> */}
  </Box>
)

export default StreamingServiceLogo;