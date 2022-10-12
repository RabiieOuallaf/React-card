
import Footer from './Footer'

const Main = () => {
    return(
        <div className="container">
            <img src="https://cdn.discordapp.com/attachments/1016737697848635614/1024250317111570432/212_771-349156_20220926_203326.jpg" alt="Rabie picture"></img>
            <main>

                <h3>Rabie Ouallaf</h3>
                <h4>Full stack developer</h4>
                <a href="https://github.com/RabiieOuallaf" target="_blank">github.com</a>
                
                <section className="Btn">
                    <button className="Btn__Email">Email</button>
                    <button className="Btn__Linkedln">Linkedln</button>
                </section>
            
                <section className="About__me">
                    <h4>About Me</h4>
                    <p>Hello world! My name is rabie ouallaf , a 18years old university student <bold>(Computer enginnering)</bold> And a self taught full stack developer , loking forward to be a blockchain developer , so watch me out !</p>
                </section>

                <section className="Intrests">
                    <h4>Intrests</h4>
                    <p>I'm intrested in blockchain development and in general at the IT topics , i love gym , cats , food , read .</p>
                </section>
            </main>

            <Footer />
        </div>
    )
};


export default Main