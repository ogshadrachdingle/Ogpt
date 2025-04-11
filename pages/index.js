import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ShadGPT – OGSD Hub</title>
        <meta name="description" content="The home of OGShadrachDingle, Epic Partner and Spotify Artist" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ShadGPT – The Home of OGShadrachDingle</h1>
        <p className={styles.subtitle}>Epic Partner & Spotify Artist</p>

        <section className={styles.spotify}>
          <h2>Listen on Spotify</h2>
          <iframe src="https://open.spotify.com/embed/track/6HPWvfPx0jhPMqynIblIrY?utm_source=generator"
            width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
          <iframe src="https://open.spotify.com/embed/track/5NKQdRnJ2NbwNV09SyXwb2?utm_source=generator"
            width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
        </section>

        <section className={styles.maps}>
          <h2>Featured Fortnite Maps</h2>
          <div className={styles.mapGrid}>
            
    <div className="mapCard">
      <img src="/images/maps/map1.jpg" alt="Map 1" />
      <p><strong>Map 1 Title</strong><br />Code: XXXX-XXXX-XXXX</p>
    </div>

    <div className="mapCard">
      <img src="/images/maps/map2.jpg" alt="Map 2" />
      <p><strong>Map 2 Title</strong><br />Code: XXXX-XXXX-XXXX</p>
    </div>

    <div className="mapCard">
      <img src="/images/maps/map3.jpg" alt="Map 3" />
      <p><strong>Map 3 Title</strong><br />Code: XXXX-XXXX-XXXX</p>
    </div>

    <div className="mapCard">
      <img src="/images/maps/map4.jpg" alt="Map 4" />
      <p><strong>Map 4 Title</strong><br />Code: XXXX-XXXX-XXXX</p>
    </div>

    <div className="mapCard">
      <img src="/images/maps/map5.jpg" alt="Map 5" />
      <p><strong>Map 5 Title</strong><br />Code: XXXX-XXXX-XXXX</p>
    </div>

    <div className="mapCard">
      <img src="/images/maps/map6.jpg" alt="Map 6" />
      <p><strong>Map 6 Title</strong><br />Code: XXXX-XXXX-XXXX</p>
    </div>

    <div className="mapCard">
      <img src="/images/maps/map7.jpg" alt="Map 7" />
      <p><strong>Map 7 Title</strong><br />Code: XXXX-XXXX-XXXX</p>
    </div>

    <div className="mapCard">
      <img src="/images/maps/map8.jpg" alt="Map 8" />
      <p><strong>Map 8 Title</strong><br />Code: XXXX-XXXX-XXXX</p>
    </div>

    <div className="mapCard">
      <img src="/images/maps/map9.jpg" alt="Map 9" />
      <p><strong>Map 9 Title</strong><br />Code: XXXX-XXXX-XXXX</p>
    </div>

    <div className="mapCard">
      <img src="/images/maps/map10.jpg" alt="Map 10" />
      <p><strong>Map 10 Title</strong><br />Code: XXXX-XXXX-XXXX</p>
    </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© OGSD – All Rights Reserved</p>
      </footer>
    </div>
  )
}