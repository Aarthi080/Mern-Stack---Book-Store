import React from 'react';
import './home.css'; // Ensure you have your CSS file in the same directory
import { Link } from 'react-router-dom';

const BookStoreHome = () => {
    return (
        <div>
            <header className="header">
                <nav>
                    <h1>Book Store</h1>
                    <ul>
                        <li>Home |</li>
                        <li>Products |</li>
                        <li>Order</li>
                    </ul>
                </nav>
            </header>
            <div className="searchbar">
                <input placeholder="search" />
            </div>
            <div className="products" >
            <div className="box">
    <Link to='/order' style={{ textDecoration: 'none' }}>
        <ProductBox 
            imgSrc="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1545494980i/40916679.jpg" 
            description={<span className="description-text">Pip investigates a closed murder case, doubting Sal Singh killed Andie Bell. As she uncovers secrets proving his innocence, her search puts her life in danger.</span>}
        />
    </Link>
</div>

                <div className="box">
    <Link to='/order' style={{ textDecoration: 'none' }}>
        <ProductBox 
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuH2tp2ZnnzrKFkvcgrAEV2LCanBP2c5CDsuJkOVtASkWpVXxO" 
            description={<span className="description-text">Explore over 1,200 DC characters in The DC Comics Encyclopedia New Edition, featuring the latest updates from the DC Multiverse and stunning artwork. A must-have for every comic book fan!</span>}
        />
    </Link>
</div>

                <div className="box">
    <Link to='/order' style={{ textDecoration: 'none' }}>
        <ProductBox 
            imgSrc="https://books.google.co.in/books/publisher/content?id=NgXeDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3YaVanUptb19_WUzPhMXIk3NtgAg&w=1280" 
            description={<span className="description-text">Delve into the Marvel Universe with the Marvel Encyclopedia, featuring detailed profiles of iconic heroes, villains, and storylines. A definitive guide for every Marvel fan!</span>}
        />
    </Link>
</div>

                <div className="box">
    <Link to='/order' style={{ textDecoration: 'none' }}>
        <ProductBox 
            imgSrc="https://books.google.co.in/books/content?id=O6gZJa9kdlYC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U076LrQ0eRrpOu3Fo240wN-FotZvw&w=1280" 
            description={<span className="description-text">Susan Cain's *Quiet* reveals the hidden power of introverts, challenging cultural biases toward extroversion. Through research and real stories, it celebrates introverts' profound contributions to society.</span>}
        />
    </Link>
</div>

                <div className="box">
    <Link to='/order' style={{ textDecoration: 'none' }}>
        <ProductBox 
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaaIJz0qhLHruxakN7Fjtadkh8CrfC-x1Xc692Pkp7ZRgclFhOUqpjglAP&s" 
            description={<span className="description-text">Rich Dad Poor Dad by Robert Kiyosaki contrasts lessons from two father figures, revealing key principles about money, investing, and achieving financial independence.</span>}
        />
    </Link>
</div>

                <div className="box">
    <Link to='/order' style={{ textDecoration: 'none' }}>
        <ProductBox 
            imgSrc="https://books.google.co.in/books/content?id=19forYX7NLQC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2tSLRMY_UIIcdx8YBezIlpoYgFBw&w=1280" 
            description={<span className="description-text">The Lean Startup by Eric Ries offers a scientific approach to building businesses, focusing on rapid experimentation and continuous adaptation to achieve sustainable success.</span>}
        />
    </Link>
</div>

                <div className="box">
    <Link to='/order' style={{ textDecoration: 'none' }}>
        <ProductBox 
            imgSrc="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1612001976i/40670312.jpg" 
            description={<span className="description-text">A simple DNA test is all it takes. Just a quick mouth swab and soon you’ll be matched with your perfect partner the one you are genetically made for.</span>}
        />
    </Link>
</div>

                <div className="box">
    <Link to='/order' style={{ textDecoration: 'none' }}>
        <ProductBox 
            imgSrc="https://books.google.co.in/books/publisher/content?id=TnrrDwAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&sig=ACfU3U2hGkeh28bJEM7dkh2ZagypPDBqIw&w=1280" 
            description={<span className="description-text">Success is shaped by many factors, not just hard work, and poverty isn't always due to laziness. Be mindful when judging others and yourself.</span>}
        />
    </Link>
</div>

                <div className="box">
    <Link to='/order' style={{ textDecoration: 'none' }}>
        <ProductBox 
            imgSrc="https://books.google.co.in/books/publisher/content?id=M22fAwAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3GXXrGg4dmuUG5F1rFRPINTkAexg&w=1280" 
            description={<span className="description-text">Zero to One by Peter Thiel emphasizes creating unique innovations rather than competing in existing markets, encouraging independent thinking to discover new opportunities for progress.</span>}
        />
    </Link>
</div>

                <div className="box">
    <Link to='/order' style={{ textDecoration: 'none' }}>
        <ProductBox 
            imgSrc="https://m.media-amazon.com/images/I/81R02NOQdWL.jpg" 
            description={<span className="description-text">The God of the Woods by Liz Moore is a psychological mystery centered around the disappearance of a young girl and a local man in the Adirondacks.</span>}
        />
    </Link>
</div>

               <div className="box">
    <Link to='/order' style={{ textDecoration: 'none' }}>
        <ProductBox 
            imgSrc="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1345666854i/12605157.jpg" 
            description={<span className="description-text">The $100 Startup by Chris Guillebeau provides practical guidance on starting a small business with minimal investment, showcasing 50 case studies of individuals earning $50,000+ from passion-driven ventures.</span>}
        />
    </Link>
</div>



            </div>
           
        </div>
    );
};

const ProductBox = ({ imgSrc, description }) => {
    return (
        <div className="box">
            <img src={imgSrc} alt={description} />
            <p>{description}</p>
        </div>
    );
};

export default BookStoreHome;