import React from 'react';
import CharacterizationsImg from '../assets/characterizations.png';
import Category from './Category';
import { Link } from 'react-router-dom';
import GraphicsImg from '../assets/madzia-seba.jpg';

function Projects() {
    
    

    return (
        <div className='
            h-screen
            relative
            flex
            overflow-hidden
            flex-col
            text-left
            md:flex-row
            max-2-full
            justify-evenly
            mx-auto
            items-center
            z-0'
        >
            <h1 className='sectionTitle'>
                &nbsp;Projects
            </h1>

            <div
                className='
                relative
                w-full
                flex
                z-20
                flex-col
                lg:flex-row
                justify-center
                items-center
                basis-full
                mt-20
            '> 
                <Link to='/projects/archtectural'>
                    <Category
                        categoryName='architecture'
                        categoryImg={CharacterizationsImg}
                    />
                </Link>
                <Link to='/projects/graphic'>
                    <Category
                        categoryName='graphics'
                        categoryImg={GraphicsImg}
                    />
                </Link>
                <Link to='/projects/characterization'>
                        <Category
                            categoryName='characterizations'
                            categoryImg={CharacterizationsImg}
                        />
                </Link>

            </div>
        </div>
    );
}

export default Projects;