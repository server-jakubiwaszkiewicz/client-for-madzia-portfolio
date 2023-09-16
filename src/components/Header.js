import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';  
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function Header() {
    return (
        <header className="bg-opacity-0 sticky top-0 flex flex-row items-start max-w-7xl mx-auto z-20 xl:items-center p-5">
          <motion.div
            initial={{
              
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center flex-1 mr-auto justify-start"
          >
            <SocialIcon
                url="https://www.instagram.com/calu.sfx/"
                className="cursor-pointer mx-2"
                network="instagram"
                fgColor="white"
                bgColor="transparent"
            />
        </motion.div>
        <motion.div
            initial={{
              
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center mx-12"
          >
            <Link to="/">
              <HomeOutlinedIcon style={{ height: 50, width: 50 }} className='cursor-pointer '/>
            </Link>
        </motion.div>
        <motion.div
          initial={{
              
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center flex-1 ml-auto justify-end"
        >
            <SocialIcon
              url="#contact"
              className="cursor-pointer mx-2"
              network="email"
              fgColor="white"
              bgColor="transparent"
            />
        </motion.div>
      </header>
    );
}

export default Header;