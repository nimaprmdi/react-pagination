# Simple React Pagination using Lodash

First of all Install Lodash

`npm i lodash`

Also Create This files

```shell
Table.jsx
TablePagination.jsx
paginate.js
data.js
Setup our Table.jsx
```

In our Table.jsx we will render our data from data.js and display it to client

```shell
const [allProjects, setAllProjects] = useState(projects);// Projects is a array that includes all projects from data.js
const [currentPage, setCurrentPage] = useState(1); // current page that we are viewing
const [pageSize, setPageSize] = useState(3); // Items in our to render
```

And also include:

```shell
const handlePageChange = (page) => {
    setCurrentPage(page); // Will set current viewing page based on pagination click
};
```

Ok here we render FILTERED Projects from paginate.js function (Don’t worry will explain it)

```shell
const paginatedProjects = paginate(allProjects, currentPage, pageSize);
```

Finally mapping our data
Here you can map the filtered data in your table or any other situation that you want:

```shell
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
```

After your table please call TablePagination.jsx like:

```shell
<TablePagination
allProjects={allProjects}
pageSize={pageSize}
currentPage={currentPage}
onPageChange={(e) => handlePageChange(e)}
/>
```

Setup our TablePagination.jsx
Here we will render our page numbers and get passed props that we send via Table.jsx

```shell
const { allProjects, pageSize, currentPage, onPageChange } = props; // Get props from table.jsx
const pagesCount = Math.ceil(allProjects.length / pageSize); // calculate pages count All Projects Length / pageSize
const pages = _.range(1, pagesCount + 1); // create an array of numbers progressing from the given start value
```

Also we will render our pagination items like:

```shell
{pages.map((page, index) => {
    return <li onClick={() => onPageChange(page)} key={index} active={page === currentPage}>{page}</li>
)}
```

And we are done here! You can use this diagram to understand concept of the pagination and this GitHub repo to use it in your projects
