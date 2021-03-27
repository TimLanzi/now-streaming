import { Grid } from "@chakra-ui/layout";
import ResultCard from "./ResultCard";

interface Props {
  results?: any[];
}

const ResultGrid: React.FC<Props> = ({ results }) => {
  return (
    <Grid templateColumns={{ lg: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }} w="100%" gap={4}>
      { results?.map(item => (
          <ResultCard
            key={item.id}
            id={item.id}
            title={item.title}
            img={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
            watchOn={item.watchOptions?.ads
              ? (item.watchOptions?.flatrate || []).concat(item.watchOptions?.ads)
              : item.watchOptions?.flatrate
            }
            // img="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg"
          />
        ))}
    </Grid>
  )
}

export default ResultGrid;