import { MagnifyingGlass } from "phosphor-react"
import { SearchFormContainer } from "./styles"

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transações"/>
            <button type="submit">
                Buscar
                <MagnifyingGlass />
            </button>
        </SearchFormContainer>
    )
}