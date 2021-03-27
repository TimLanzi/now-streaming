import { CircularProgress, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import ResultCard from "../../components/ResultCard";
import ResultGrid from "../../components/ResultGrid";
import SearchFrame from "../../components/SearchFrame";
import { useTvSearch } from "../../graphql/search";

export default function MovieSearchPage() {
  const router = useRouter();

  const { loading, error, data } = useTvSearch(router.query.query as string);
  
  return (
    <Layout>
      <SearchFrame movieResults={data?.movieSearch.total_results} tvResults={data?.tvShowSearch.total_results}>
        { loading
          ? <Box justifyContent="center">
              <CircularProgress isIndeterminate color="purple.500" />
            </Box>
        : <ResultGrid results={data?.tvShowSearch.results} />
        // data?.tvShowSearch.results.map(item => (
        //   <ResultCard
        //     key={item.id}
        //     id={item.id}
        //     title={item.name}
        //     img={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
        //     watchOn={item.watchOptions?.ads
        //       ? item.watchOptions?.flatrate.concat(item.watchOptions?.ads)
        //       : item.watchOptions?.flatrate
        //     }
        //   />
        // ))
        }
      </SearchFrame>
    </Layout>
  )
}