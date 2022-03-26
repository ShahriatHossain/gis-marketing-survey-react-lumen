import { useMemo } from "react";
import { PageSize } from "../utils/constants/common";

export const usePaginatedData = (currentPage: number, surveys: any[]) => {
    const paginatedData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return surveys.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return paginatedData;
};