import '../CSS/Footer.css'
export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
  });
};
    return (
        <>
            <div className="footer">
                <div></div>
                <div className='backToUp'>
                    <i onClick={scrollToTop} className="fa-solid fa-angle-up" style={{animation: "arow 3s ease-in-out infinite"}}></i>
                    <p onClick={scrollToTop}>Powrót do góry</p>
                </div>
                <div className='copyright'>
                    <p>©2026 Mikołaj</p>
                    <p>Z pasji do kodu</p>
                    <p>Strona stworzona za pomocą react</p>
                </div>
            </div>
        </>
    )
}