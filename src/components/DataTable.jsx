import React, { useState } from "react";
import _ from "lodash";
import TablePagination from "./TablePagination";
import { Table } from "react-bootstrap";
import { projects } from "../data/data";
import { paginate } from "../utils/paginate";

const DataTable = () => {
    const [allProjects, setAllProjects] = useState(projects);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedProjects = paginate(allProjects, currentPage, pageSize);

    return (
        <>
            <Table className="table table-success" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedProjects.map((project, index) => {
                        return (
                            <tr key={index}>
                                <td>Projects Is {project.id}</td>
                                <td>{project.id}</td>
                                <td>{project.name}</td>
                                <td>{project.desc}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            <TablePagination
                allProjects={allProjects}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={(e) => handlePageChange(e)}
            />
        </>
    );
};

export default DataTable;
