const SurfList = (surfList) => {
    return (
        <section className="surfers">
            <h3>{surfList.name}</h3>
            <h4>Hometown: {surfList.hometown}</h4>
            <h4>Surftype: {surfList.surftype}</h4>
            <p><img src={"https://projectbackend-qwro.onrender.com/images/"+surfList.image} alt={surfList.name} /></p>
            <p>{surfList.bio}</p>
        </section>
    );
};

export default SurfList;