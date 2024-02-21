import styled from '@emotion/styled'

const VisibilityFiltersContainer = styled.div`
    margin: 10px 0;
`

export default function VisibilityFilterButtons() {
    return (
        <VisibilityFiltersContainer>
            <button disabled>Show all</button>
            <button>Show completed</button>
            <button>Show active</button>
        </VisibilityFiltersContainer>
    )
}
