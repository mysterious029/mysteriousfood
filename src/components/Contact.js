import { Link } from "react-router-dom";

const Contact = () =>{
    return(
        <div className="contact">
        <h1 style={{color:'red'}}>Contact Information :</h1>
        <div className="mb-3">
                    <label for="clientName" className="form-label">Name</label>
                    <input type="Name" className="form-control" id="clientemail" aria-describedby="emailHelp" />
                  </div>
                <div className="mb-3">
                  <label for="clientemail" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="clientemail" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email & phone with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="clientphone" className="form-label">Phone</label>
                    <input type="phone" class="form-control" id="clientphone"/>
                    <div id="emailHelp" class="form-text">We'll never share your email & phone with anyone else.</div>
                  </div>
                <div className="mb-3">
                    <label for="clientEnquiry" className="form-label">Enquiry</label>
                    <input type="Enquiry" className="form-control" id="clientEnqiry"/>
                  </div>
                  <h4>IF YOU WANT TO SUBMIT ANY FILE :</h4>
                  
                    <label for="myfile">SELECT A FILE</label>
                    <input type="file" id="myfile" name="myfile" />
                <div className="mb-3" id="form-check">
                  <input type="checkbox" className="form-check-input" id="isclient"/>
                  <label className="form-check-label" for="isclient">I want you to work on a project with me</label>
                </div>
                <div className="info">
                <p style={{color:'black'}}><Link to="https://goo.gl/maps/Mm3jK1YyfNcQQBjv8" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/en/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg" style={{width:'25px'}}/></Link>IIIT NAGPUR CAMPUS ,MAHARASTRA</p>
                <p style={{color:'black'}}><Link to="" target="_blank"></Link> Phone: 9783938144,9122029304</p>
                <p style={{color:'black'}}><a href="mailto: mukeshmandal9783@gmail.com" target="_blank"></a>Email: mukeshmandal9783mail.com</p>
                <button type="submit" className="btn btn-sm" onClick={() => window.location = 'mailto:mukeshmandal9783@gmail.com'}>Send Me</button>
                </div>
        </div>
    );
};

export default Contact;
   