import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub } from "react-icons/ai";
 
import mush from "../images/mush.png"
import qc from "../images/Qc_lab.png"
import React from 'react'
import nutri from "../images/nutriscore.png"
const projectConfig = [
    {
        id: "project-3",
        title: "House of Mushroom",
        links: [
            {
                name: "repo",
                url: "https://github.com/Laxluther/Mushroom-prediction",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/Laxluther/Mushroom-prediction/fork",
                icon: <BiGitRepoForked/>,
            }
        ],
        image: mush,
        description: "Developed a Convolutional Neural Network (CNN) leveraging three advanced pre-trained models—InceptionV3, DenseNet121, and Xception. The models demonstrated strong performance, achieving accuracies of 82%, 80%, and 80%, respectively. I built a user-friendly web application using Flask to facilitate real-time mushroom species classification. Users can upload mushroom images, and the application utilizes the trained models to predict the species. To enrich the user experience, detailed descriptions of each predicted mushroom species are generated using GPT-2, providing comprehensive insights and enhancing the overall utility of the application.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Quality Control Software",
        links: [
            {
                name: "repo",
                url: "https://github.com/Laxluther/qc_lab",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/Laxluther/qc_lab/fork",
                icon: <BiGitRepoForked/>,
            }
        ],
        image: qc,
        description: "End-to-end quality control dashboard and data entry software for edible oil production, integrating web development, SQL, and data analytics for automated data collection and real-time processing.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Nutri-Score Predictor",
        links: [
            {
                name: "repo",
                url: "https://github.com/Laxluther/NutriScore",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/Laxluther/NutriScore/fork",
                icon: <BiGitRepoForked/>,
            }
        ],
        image: nutri,
        description: "Created a web application utilizing OpenFood Facts data to accurately predict the nutrient score of food products. The project involved comprehensive data analysis, feature engineering, and rigorous model evaluation through K-Fold cross-validation. A Random Forest model was selected for its exceptional accuracy. The application is built with Flask, offering a seamless and interactive user experience.",
        target: "_blank"
    }
]

export default projectConfig