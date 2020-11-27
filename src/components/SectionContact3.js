const SectionContact = () => {
    return (  
        <section id="sectioncontact3">
            <div id="big-div">
                <h6>GET IN TOUCH</h6>
                <h1>132 9th Avenue <br /> New York , NY 10011 <br /> 646-559-1671 <br /> info@btgnyc.com</h1>

                <h6>HOURS OF OPERATION</h6>
                <div id="klein-flex">
                    <p>Monday</p>
                    <p>8am-4pm</p>

                </div>
                <div id="klein-flex">
                    <p>Tuesday-Friday</p>
                    <p>8am-10pm </p>

                </div>
                <div id="klein-flex">
                    <p>Saturday</p>
                    <p>9am-10pm</p>

                </div>
                <div id="klein-flex">
                    <p>Sunday</p>
                    <p>9am-4pm</p>

                </div>

            </div>
            <form>
            <div><input type="text" placeholder="Name" /></div>

            <div><input type="email" placeholder="Email" /></div>

            <div><input type="tel" placeholder="Mobile" /></div>

            <div><textarea id="" name="" rows="9" cols="80" placeholder="Message" /></div>

            <input id="buttun" type="button" value="submit" />
            </form>


        </section>
    );
}
 
export default SectionContact;