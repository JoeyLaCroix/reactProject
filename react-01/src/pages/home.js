import "../css/home.css";
    
function Home() {
  return (
    <div className="Home">
      <div id="middleimages">
        <section id="middlemain">
          <img id="locations" src="images/pipeline.jpg" alt="Pipeline" />
        </section>
        <section id="middlemain">
          <h3>Welcome!</h3>
          <p>
            Where the ocean inspires every wave of our clothing. Whether you're
            catching barrels or just chilling by the shore, our surf gear is
            designed for both adventure and comfort. Dive into our collection of
            eco-friendly, durable fabrics made for the beach life. We're all about
            celebrating the surf culture, so explore our styles and ride the wave
            in confidence. Thanks for stopping by, and we hope Southern Surf Co
            becomes your go-to for all things coastal! 🌊
          </p>
        </section>
        <section id="middlemain">
          <img id="locations" src="images/nazare.jpg" alt="Nazare" />
        </section>
      </div>

      <div id="main-bottom">
        <section id="shoplink">
          <a href="nci.html">
            <h3>Hats</h3>
            <img id="this" src="images/sschat.png" alt="Hats" />
          </a>
        </section>
        <section id="shoplink">
          <img src="images/logo2-removebg.png" alt="Logo" />
        </section>
        <section id="shoplink">
          <a href="nci.html">
            <h3>Shirts</h3>
            <img id="this" src="images/sscshirt.png" alt="Shirts" />
          </a>
        </section>
        <section id="shoplink">
          <img src="images/logo2-removebg.png" alt="Logo" />
        </section>
        <section id="shoplink">
          <a href="nci.html">
            <h3>Hoodies</h3>
            <img id="this" src="images/sschoodie.png" alt="Hoodies" />
          </a>
        </section>
      </div>

      <div id="spots">
        <h3>Famous Surfing locations we represent:</h3>
        <section id="spot">
          <h4>First Street Jetty</h4>
          <img src="images/first street jetty.jpg" alt="First Street Jetty" />
          <br />
          <a href="https://www.surfline.com/surf-report/1st-street-jetty/584204214e65fad6a7709ce7?camId=5df27801194164e61b2403c1">
            Tap to view Cam &copy;Surfline
          </a>
        </section>
        <section id="spot">
          <h4>Croatan Jetty</h4>
          <img src="images/croatanjetty.jpg" alt="Croatan Jetty" />
          <br />
          <a href="https://www.surfline.com/surf-report/croatan-jetty/584204214e65fad6a7709ce9">
            Tap to view Cam &copy;Surfline
          </a>
        </section>
        <section id="spot">
          <h4>42nd Street Pier</h4>
          <img src="images/42ndpier.jpg" alt="42nd Street Pier" />
          <br />
          <a href="https://www.surfline.com/surf-report/north-end/5842041f4e65fad6a7708a23?camId=5834995b3421b20545c4b53b">
            Tap to view Cam &copy;Surfline
          </a>
        </section>
      </div>

      <div id="aboutusimage">
        <img src="images/logo-removebg.png" alt="Southern Surf Co Logo" />
      </div>
    </div>
  );
}

export default Home;



