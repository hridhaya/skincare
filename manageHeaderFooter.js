class FixedHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <header class="header-class">
                <div class="menu-bar">
                     <a href="index.html" class="logo">Skin@Care</a>
                    <ul id="navLinks">    
                    <b onclick="hideMenu()">x</b>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="aboutSkinType.html">Skin Type</a>
                        </li>
                        <li><a href="#">Skincare Routine</a>
                            <div class="dropdown-menu">
                                <ul>
                                    <li><a href="aboutSkincareRoutine.html" class="dropdown-link">Basic Routine</a></li>
                                    <li><a href="#">By Skin Type</a>
                                        <div class="dropdown-menu1">
                                            <ul>
                                                <li><a href="skincareOily.html" >Oily</a></li>
                                                <li><a href="skincareNormal.html" >Normal</a> </li>
                                                <li><a href="skincareSensitive.html" >Sensitive</a></li>
                                                <li><a href="skincareDry.html" >Dry</a></li>
                                                <li><a href="skincareCombination.html" >Combination</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="aboutActives.html">Skincare Actives</a>
                                    <li><a href="skinConcerns.html">Skincare Concerns</a>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#contact">Contact Us</a></li>

                    </ul>
                    <b onclick="showMenu()">=</b>
                </div>
        </header>
        `
    }
}
class FixedFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <footer class="footer-class" id="contact">
            <div class="footer-div">
                <p class="logo"><span>Skin@Care</span></p>
                
                <h3 class="follow-Us">Follow Us</h3>
                <div class="follow-Us">
                        <a href="#" class="follow">FaceBook</a>
                        <a href="#" class="follow">X</a>
                        <a href="#" class="follow">Instagram</a>
                    </div>
                
               
                    <ul>

                        <div class="contact-Us">
                            <li><h3>Contact Us</h3></li>
                            <form class="contact-us-form" method="POST">
                                <input type="text" id="email" placeholder="Enter you email" required="required"><br>
                                <textarea id="review" rows="1" cols="20" placeholder="Enter you message" required="required">
                                </textarea>
                                <div id="btn">
                                    <button type="button" class="submitbtn" onclick="">SEND</button>
                                </div>
                            </form>
                        </div>

                    </ul>
                
            </div>
        </footer>
        `
    }
}
customElements.define('fixed-header',FixedHeader);
customElements.define('fixed-footer',FixedFooter);
// code for close and show menus(resposive)
            var navLinks=document.getElementById("navLinks");
            function showMenu(){
                navLinks.style.right="0";
            }
            function hideMenu(){
                navLinks.style.right="-200px";
            }