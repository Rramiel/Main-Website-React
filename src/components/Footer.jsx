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
                <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#ff6a8a"/>
                        <stop offset="100%" stop-color="#ffffff"/>
                    </linearGradient>
                    </defs>

                    <rect width="100%" height="100%" fill="var(--glowny)" />

                    <g class="wave wave1">
                    <g class="wave-inner">
                        <path d="M0 120 Q360 60 720 120 T1440 120 V200 H0 Z"/>
                        <path d="M1440 120 Q1800 60 2160 120 T2880 120 V200 H1440 Z"/>
                    </g>
                    </g>

                    <g class="wave wave2">
                    <g class="wave-inner">
                        <path d="M0 130 Q360 80 720 130 T1440 130 V200 H0 Z"/>
                        <path d="M1440 130 Q1800 80 2160 130 T2880 130 V200 H1440 Z"/>
                    </g>
                    </g>

                    <g class="wave wave3">
                    <g class="wave-inner">
                        <path d="M0 140 Q360 100 720 140 T1440 140 V200 H0 Z"/>
                        <path d="M1440 140 Q1800 100 2160 140 T2880 140 V200 H1440 Z"/>
                    </g>
                    </g>
                </svg>
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