import React from 'react'

export const Pagination = (postPerPage, totalPosts, currentPage) => {
    const pageNumbers = []
    const paginate = number => {
        const page = {
            currentPage: number
        }
        return page
        console.log("I'm clicked", page)
    }

    var results = postPerPage.totalPosts / postPerPage.postsPerPage
    for (let i = 1; i <= Math.ceil(results); i++) {
        pageNumbers.push(i)
        console.log("pageNo.", pageNumbers)
    }
    // const hello = () => {
    //     console.log(paginate)
    // }

    return (
        <nav className="paginatin-nav">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate()} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination

