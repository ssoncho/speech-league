import s from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <section className={s.section}>
        <h2 className={s.title}>404</h2>
        <p className={s.description}>Данной страницы не существует</p>
    </section>
  )
}

export default NotFoundPage