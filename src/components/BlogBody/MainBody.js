import "./MainBody.scss";


export default function MainBody() {
    const url = "https://preview.colorlib.com/theme/bueno/img/bg-img/x24.jpg.pagespeed.ic.cp3wq4bTXn.webp";
    return (
        <div className="Main-Body">
            <section>
                <img src={url} alt="burger" />
            </section>
            <section>
                <h6>HEALTHY FOOD</h6>
                <h3>Fried eggs with ham</h3>
                <h6>JULY 11, 2018 / BY JULIA STILES</h6>
            </section>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet saepe quae quod inventore incidunt! Facere labore porro deserunt fuga maxime obcaecati eum quis quisquam beatae? Commodi magni labore nobis sed amet, earum eaque. Recusandae minus asperiores obcaecati similique velit quasi dolorem repellendus, labore necessitatibus earum quibusdam dolores esse cum est excepturi aspernatur libero expedita, ullam officiis impedit atque tempora. Vitae dolorum laborum quos dolores amet quam nesciunt tempora impedit? A eum nemo rerum voluptatibus iste est optio neque accusamus beatae reprehenderit debitis, perferendis assumenda, pariatur eius suscipit repudiandae labore! Magni, molestiae nam dolore saepe mollitia vero? Deserunt odio ipsam blanditiis! <br /><br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nemo tempore vitae ex! A saepe libero officiis voluptatum, deserunt possimus! Vero cumque quo ut consectetur modi sapiente dolorum repudiandae? Quod reiciendis eveniet odio? Magni asperiores autem aliquid repudiandae. Aperiam molestiae nisi laboriosam nam sed ullam alias, iste nostrum. Quas, accusantium? <br /><br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae temporibus iure, reprehenderit magni omnis provident voluptatem consequuntur, dolor magnam dicta maiores optio labore voluptatibus? Et aspernatur magnam veniam optio non unde aut, id nihil facilis explicabo dolorum perferendis natus dignissimos!</p>
            </section>
        </div>
    );
}