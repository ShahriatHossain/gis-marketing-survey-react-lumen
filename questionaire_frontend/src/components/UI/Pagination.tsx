import { DOTS, usePagination } from "../../hooks/use-pagination";

interface PageInfo {
    onPageChange: any,
    totalCount: number,
    siblingCount?: number,
    currentPage: number,
    pageSize: number
}

const Pagination: React.FC<PageInfo> = (props) => {

    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination(
        totalCount,
        pageSize,
        siblingCount,
        currentPage,
    );

    if (currentPage === 0 || paginationRange!.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange![paginationRange!.length - 1];

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
                    <a className="page-link" href="#" aria-label="Previous" onClick={onPrevious}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>

                {paginationRange!.map((pageNumber, idx) => {

                    if (pageNumber === DOTS) {
                        return <li key={idx} className="page-item dots">&#8230;</li>;
                    }

                    return (
                        <li key={idx} className={pageNumber === currentPage ? 'page-item active' : 'page-item'}>
                            <a className="page-link" href="#" onClick={() =>
                                onPageChange(pageNumber)}>{pageNumber}
                            </a>
                        </li>
                    );
                })}
                
                <li className={currentPage === lastPage ? 'page-item disabled' : 'page-item'}>
                    <a className="page-link" href="#" aria-label="Next" onClick={onNext}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;