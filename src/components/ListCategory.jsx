import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const ListCategory = ({ allGenres, selectedItem, onHandleGenreSelect }) => {
    console.log("listCategory ", selectedItem);
    return (
        <ListGroup as="ul">
            {allGenres.map((genre) => {
                return (
                    <ListGroup.Item
                        className="text-capitalize"
                        key={genre.id}
                        as="li"
                        active={genre.id === selectedItem.id ? true : false}
                        onClick={() => onHandleGenreSelect(genre)}
                    >
                        {genre.name}
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
    );
};

export default ListCategory;
