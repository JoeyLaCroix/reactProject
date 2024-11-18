const SurfList = (surfList) => {
    return (
        <section className="surfers">
            <h3>Name:{surfList.name}</h3>
            <h4>Hometown:{surfList.hometown}</h4>
            <h4>SurfType:{surfList.surftype}</h4>
            <p><img src={"https://projectbackend-qwro.onrender.com/images/"+surfList.image} alt={surfList.name} /></p>
            <p>Bio:{surfList.bio}</p>
        </section>
    );
};

export default SurfList;