// Компонент шапки
import Link from 'next/link'
export const Header = () => {
    return (
        <>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link className='header__link' href={'/'}>
                            <p className="header__title">
                                SHARETRADE.<span className="title__span">COM</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}