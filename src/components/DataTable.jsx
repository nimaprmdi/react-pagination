import React, { useState, useEffect } from "react";
import _ from "lodash";
import ListCategory from "./ListCategory";
import TablePagination from "./TablePagination";
import { Table } from "react-bootstrap";
import { projects, genres } from "../data/data";
import { paginate } from "../utils/paginate";

const DataTable = () => {
    const [allProjects, setAllProjects] = useState(projects);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [allGenres, setAllGenres] = useState([{ id: null, name: "all" }, ...genres]);
    const [selectedItem, setSelectedItem] = useState({ id: null, name: "all" });

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleGenreSelect = (genre) => {
        setSelectedItem(genre);
        setCurrentPage(1);
    };

    const filtered =
        selectedItem.id && selectedItem
            ? allProjects.filter((project) => project.genre.id === selectedItem.id)
            : allProjects;

    const paginatedProjects = paginate(filtered, currentPage, pageSize);

    return (
        <div className="row mt-5">
            <div className="col-3">
                <ListCategory
                    allGenres={allGenres}
                    selectedItem={selectedItem}
                    onHandleGenreSelect={(e) => handleGenreSelect(e)}
                />
            </div>
            <div className="col">
                <Table className="table table-success" striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Genre</th>
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
                                    <td>{project.genre.name}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                <TablePagination
                    allProjects={filtered}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={(e) => handlePageChange(e)}
                />
            </div>
        </div>
    );
};

export default DataTable;
