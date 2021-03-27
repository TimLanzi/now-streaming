import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "node:querystring";
import { BsChevronCompactLeft, BsChevronCompactRight, BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import PaginationItem from "./PaginationItem";

interface Props {
  activePage: number;
  totalPages: number;
}

const PAGE_NEIGHBORS = 2;
const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';


const Pagination: React.FC<Props> = ({ activePage, totalPages }) => {
  const router = useRouter();


  const onPageChange = (pageNumber: number) => {
    const queryNoPage = (query: ParsedUrlQuery) => {
      return Object.keys(query)
        .filter(item => item !== "page")
        .map(item => `${item}=${query[item]}`)
        .join("&");
    }

    router.push(`${router.pathname}?${queryNoPage(router.query)}&page=${pageNumber}`);
  }


  const range = (from: number, to: number, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  }

  const fetchPageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = (PAGE_NEIGHBORS * 2) + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, activePage - PAGE_NEIGHBORS);
      const endPage = Math.min(totalPages - 1, activePage + PAGE_NEIGHBORS);
      let pages = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  }

  return (
    <HStack border="1px" borderColor="gray.300" borderRadius="5px">
      { fetchPageNumbers().map((page, i) => {
        if (page === LEFT_PAGE) {
          return (
            <PaginationItem key={i} onClick={() => onPageChange(activePage - 1)}>
              <Icon as={BsChevronCompactLeft} />
            </PaginationItem>
          );
        }

        if (page === RIGHT_PAGE) {
          return (
            <PaginationItem key={i} onClick={() => onPageChange(activePage + 1)}>
              <Icon as={BsChevronCompactRight} />
            </PaginationItem>
          );
        }

        return (
          <PaginationItem key={i} active={activePage === page} onClick={() => onPageChange(page)}>
            {page}
          </PaginationItem>
        )
      })}
    </HStack>
  )
}

export default Pagination;