import './filter.css'
function Filter({ filters }) {
    return (
        <div className="maxWidth filterContainer">
            {filters &&
                filters.map((filter) =>
                    // TODO: designing the filter box and designing the border.
                    // Highlights: header and tab options completed and working on filters. 
                    <div className='filterItem flexCenter userSelect cursorPointer'>
                        {filter.icon}
                        {filter.name}
                    </div>
                )
            }
        </div>
    )
}

export default Filter