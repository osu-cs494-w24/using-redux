import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux'

import {
    filterValues,
    selectFilterValue,
    setVisibilityFilter
} from '../redux/visibilityFilterSlice'

const VisibilityFiltersContainer = styled.div`
    margin: 10px 0;
`

export default function VisibilityFilterButtons() {
    const dispatch = useDispatch()
    const filterValue = useSelector(selectFilterValue)
    return (
        <VisibilityFiltersContainer>
            <button
                disabled={filterValue === filterValues.showAll}
                onClick={() => dispatch(setVisibilityFilter(filterValues.showAll))}
            >
                Show all
            </button>
            <button
                disabled={filterValue === filterValues.showCompleted}
                onClick={() => dispatch(setVisibilityFilter(filterValues.showCompleted))}
            >
                Show completed
            </button>
            <button
                disabled={filterValue === filterValues.showActive}
                onClick={() => dispatch(setVisibilityFilter(filterValues.showActive))}
            >
                Show active
            </button>
        </VisibilityFiltersContainer>
    )
}
