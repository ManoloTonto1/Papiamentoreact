import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RoundButton } from "./RoundButton";
import { slidein } from "./animations";

function Info(){

      const navigate = useNavigate();
    return(
        <>
        <div className="outer-root">
          <RoundButton click={() => navigate('/')} />
        <div className='outer-info'>
        <motion.div
          variants={slidein}
          initial="hidden"
          animate="visible"
          exit="exit"
          className='info-container'>
            <div className='center'>
                <article>
                    <h1>Nos Team:</h1>
                    <div className="contact-container">
                    <img className="manolo-img" src='./manolo.png' alt="manolo-pic" />
                    <div className="icon-container">
                    <motion.a href="https://www.instagram.com/manolotonto.ml/" target="_blank"><i className="fa-brands fa-instagram"></i></motion.a>
                    <motion.a href=""><i className="fa-brands fa-linkedin"></i></motion.a>
                    <motion.a href=""><i className="fa-brands fa-github"></i></motion.a>
                    <motion.a href=""><i className="fa-brands fa-facebook"></i></motion.a>
                    <motion.a href=""><i className="fa-solid fa-envelope"></i></motion.a>
                    </div>
                    
                    
                    </div>
                    <p>
                      E team ta consisti di e cabayero Manuel Lopez, Actualmente Manuel ta bibando na Hulanda y e ta studiando Software engineering na Haagse Hogeschool. 
                      Manuel ta un persona apashona, atento y persistente semper buscando formanan pa inova y mehora e bida cotidiano.
                       
                      </p>
                    <h1>E Mission:</h1>
                    <p>E mission pa cual mi ta colectando informacion di nos dushi papiamento ta pa yega por yega na e fin di traha un translator
                       cu e huzo di un Inteligencia Artificial pa por traduci di papiamento na cualkier otro idioma gratuitamente.
                    </p>
                    <h1>E Vision:</h1>
                    <p>E vision dimi ta pa hasi e siñamento di e idioma papiamento mas facil y accisibel via internet. Mi kier hende pafo di Aruba,
                       Bonaire y Curaçao por tin e posibilidad pa siña di nos dushi papiamento. 
                       Ami tambe ta wak den futuro con e AI (inteligencia artifical) por yuda duna les den scolnan.
                        
                    </p>
                </article>
            </div>
        </motion.div>
        
        </div>
        </div> 
      </>
    );

}
export default Info;