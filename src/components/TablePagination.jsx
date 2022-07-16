import React from "react";
import { Pagination } from "react-bootstrap";
import _ from "lodash";

const TablePagination = (props) => {
    const { allProjects, pageSize, currentPage, onPageChange } = props;

    const pagesCount = Math.ceil(allProjects.length / pageSize);
    if (pagesCount === 1) return;
    const pages = _.range(1, pagesCount + 1);

    return (
        <Pagination>
            {pages.map((page, index) => {
                return (
                    <Pagination.Item onClick={() => onPageChange(page)} key={index} active={page === currentPage}>
                        {page}
                    </Pagination.Item>
                );
            })}
        </Pagination>
    );
};

export default TablePagination;
