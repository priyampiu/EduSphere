import React, {useState} from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { MdOutlineCall, MdOutlineMailOutline, MdStarRate} from "react-icons/md";

function Footer() {
    
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`⭐ Rating: ${rating} stars\n📝 Feedback: "${review}"`);
      setRating(0);
      setReview("");
    };   

  return (
    
    <footer className="footer">
        
        {/* Container of 3 column */}
        <div class="grid-container">
            
            {/* Column1 */}
            <div>
                <h1>Edu<span className="italic">Sphere</span></h1>
                <p>Edusphere is a dynamic platform where students access course materials, teachers share knowledge, and both create blogs to foster collaborative learning and growth.</p>
                <p> Know more <Link to="/about" style={{color: "blue"}}>About Us</Link> </p>
            </div>

            {/* Column2 */}
            <div class="grid-container">
                
                {/* Column2.1 */}
                <div></div>

                {/* Column2.2 */}
                <div>
                    <h2>Reach Out to Us</h2>
                    <p style={{display:"flex"}}><MdOutlineCall className="icons"/>6291642893</p>
                    <p style={{display:"flex"}}><MdOutlineMailOutline className="icons"/>edusphere2025@gmail.com</p>
                </div>

                {/* Column2.3 */}
                <div></div>

            </div>

            {/* Column3 */}
            <div>
                <form className="review-form" onSubmit={handleSubmit}>
                    <div>
                        <h2>Rate & Review Us</h2>
                        <div className="star-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <MdStarRate
                                    key={star}
                                    size={22}
                                    className="star"
                                    onClick={() => setRating(rating === star ? 0 : star)}
                                    color={star <= rating ? "#FFD700" : "#9a9696"} // fill left to right
                                    style={{ cursor: "pointer", transition: "color 0.2s" }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Feedback */}
                    <div>
                        <textarea
                            placeholder="Write your feedback here..."
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit">Submit</button>

                </form>
            </div>
        </div>
        
        <div style={{textAlign:"center", height:"1px", width:"full", marginTop:"15px", backgroundColor: "#9c9c9c"}}>.</div>
        <div style={{textAlign:"center", paddingTop: "10px"}}>
            <p>© Supreme Students Pvt. Ltd. </p>
        </div>
    </footer>
  );
}

export default Footer;