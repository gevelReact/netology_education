/** Отвечает за логотип поисковой системы слева от строки поиска. */

type LogoProps = {
  text: string
}

export default function Logo({ text }: LogoProps) {
  return <span className="logo">{text}</span>
}
