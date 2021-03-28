import { Box, Divider, Heading, Link, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";

const PrivacyPage = () => {
  return (
    <Layout>
      <Box py="12" px={{ base: "16", lg: "48", xl: "80"}}>
        <Heading as="h2" size="lg" color="purple.500" mb="5">
          Your Privacy
        </Heading>
        <Text as="p">
          We respect your personal privacy and do not collect personally identifiable information.
        </Text><br/>
        <Text as="p">
          To make an optimal user experience we may collect the non-personally identifiable information your web browser shares while visiting Now Streaming. The information we may leverage includes the Internet domain, Internet Protocol address, browser software, operating system, and date/time of your visit.
        </Text><br/>
        <Text as="p">
          Any information we collect will be kept private.
        </Text>
        <Divider mt="3" mb='5' />

        <Heading as="h2" size="lg" color="purple.500" mb="5">
          Cookie Policy
        </Heading>
        <Text as="p">
          Cookies are small files stored on the user’s device and/or web browser when visiting a web application.  These files contain preferences, and collectively, document the site’s navigation and enrich the user experience.
          <br/>
          Now Streaming may choose to use an performance cookies to identify popular resources.
        </Text><br/>
        <Text as="p">
          Cookies are not required to use Now Streaming and they may be disabled using your web browser settings.
        </Text>
        <Divider mt="1em" mb='5' />

        
        <Heading as="h2" size="lg" color="purple.500" mb="5">
          Google Analytics
        </Heading>
        <Text as="p">
        We use Google Analytics to monitor usage for the sole purpose of improving site functionality.
        &nbsp;
        <Link href='https://google.com/policies/privacy' target="_blank" rel="noopener noreferrer" color="blue.500" _hover={{ cursor: "pointer", textDecoration: "underline" }}>
          Google Analytics
        </Link>
        &nbsp;places cookies on the user’s end to monitor the experience.  User information is collected at the IP Address level and these data are aggregated up.  We make no attempt to connect collected information with personally identifiable information.
        </Text><br/>
        <Text as="p">
          You may prevent Google Analytics from tracking your visits overtime by disabling cookies on your browser or installing the&nbsp; 
          <Link href='https://tools.google.com/dlpage/gaoptout' target="_blank" rel="noopener noreferrer" color="blue.500" _hover={{ cursor: "pointer", textDecoration: "underline" }}>
            Google Analytics Opt-out Browser Add-on
          </Link>.
        </Text>
        <Divider mt="3" mb='5' />
      </Box>
    </Layout>
  )
}

export default PrivacyPage;