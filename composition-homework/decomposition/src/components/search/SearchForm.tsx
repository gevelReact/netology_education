/** Отвечает за строку поиска: поле ввода и кнопка «Найти». */

type SearchFormProps = {
  placeholder: string
  buttonLabel: string
}

export default function SearchForm({ placeholder, buttonLabel }: SearchFormProps) {
  return (
    <form className="search-form" onSubmit={(event) => event.preventDefault()}>
      <input className="search-form__input" type="search" placeholder={placeholder} />
      <span className="search-form__kbd" aria-hidden="true">
        ⌨
      </span>
      <button className="search-form__button" type="submit">
        {buttonLabel}
      </button>
    </form>
  )
}
