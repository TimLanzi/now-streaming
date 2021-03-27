import { Grid } from "@chakra-ui/layout";
import Pagination from "./Pagination";
import ResultCard from "./ResultCard";

interface Props {
  type: string;
  data?: any;
}

const ResultGrid: React.FC<Props> = ({ type, data }) => {
  return (
    <>
    <Grid templateColumns={{ lg: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }} w="100%" gap={4}>
      { data?.results.map((item: any) => (
          <ResultCard
            key={item.id}
            type={type}
            id={item.id}
            title={type === "movie" ? item.title : item.name}
            date={type === "movie" ? item.release_date : item.first_air_date}
            img={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
            watchOn={item.watchOptions?.ads
              ? (item.watchOptions?.flatrate || []).concat(item.watchOptions?.ads)
              : item.watchOptions?.flatrate
            }
            // img="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg"
          />
        ))}
    </Grid>
    
    { data?.total_pages > 1 &&
      <Pagination activePage={data.page} totalPages={data.total_pages} />
    }
    </>
  )
}

export default ResultGrid;