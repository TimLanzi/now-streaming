import { CircularProgress, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ResultGrid from "../../components/ResultGrid";
import SearchFrame from "../../components/SearchFrame";
import { useTvSearch } from "../../graphql/search";

export default function MovieSearchPage() {
  const router = useRouter();

  const { loading, error, data } = useTvSearch(router.query.query as string, router.query.page as string);
  
  return (
    <Layout>
      <SearchFrame movieResults={data?.movieSearch.total_results} tvResults={data?.tvShowSearch.total_results}>
        { loading
          ? <Box justifyContent="center">
              <CircularProgress isIndeterminate color="purple.500" />
            </Box>
            
          : <ResultGrid type="tv" data={data?.tvShowSearch} />
        }
      </SearchFrame>
    </Layout>
  )
}