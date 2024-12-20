import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginatedGridProps = {
  items: React.ReactNode[];
  itemsPerPage: number;
  renderItems: (items: React.ReactNode[]) => React.ReactNode;
};

/**
 * A paginated grid component that handles pagination of items (displays a set number of items per page and allows navigation between pages)
 * @param {Object} props - The component props
 * @param {React.ReactNode[]} props.items - Array of items to paginate
 * @param {number} props.itemsPerPage - Number of items to display per page
 * @param {function} props.renderItems - Function to render the current page items
 * @returns {JSX.Element} A paginated grid with navigation controls
 */
export default function PaginatedGrid({
  items,
  itemsPerPage,
  renderItems,
}: PaginatedGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      {renderItems(currentItems)}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => paginate(Math.max(currentPage - 1, 1))}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={currentPage === index + 1}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => paginate(Math.min(currentPage + 1, totalPages))}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
