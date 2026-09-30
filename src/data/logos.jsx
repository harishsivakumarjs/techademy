// Technology logos, shared by the course banners and the Home page tiles.
import { DiCss3, DiJava } from 'react-icons/di'
import {
  SiDjango, SiDocker, SiHtml5, SiJavascript, SiJenkins, SiKubernetes, SiMongodb, SiMysql, SiNodedotjs,
  SiLangchain, SiPandas, SiPostgresql, SiPython, SiReact, SiSap, SiScikitlearn, SiSelenium, SiSpring,
} from 'react-icons/si'
import aws from '../assets/logos/aws.svg'
import azure from '../assets/logos/azure.svg'
import excel from '../assets/logos/excel.svg'
import openai from '../assets/logos/openai.svg'
import powerbi from '../assets/logos/powerbi.svg'
import salesforce from '../assets/logos/salesforce.svg'
import tableau from '../assets/logos/tableau.svg'

// Icon = react-icons component drawn in the brand colour; src = SVG file from src/assets/logos;
// scale = enlarges Devicon glyphs, which have extra padding built in;
// wide = wordmark logo that needs a wider tile (official AWS logo)
export const LOGOS = {
  java: { name: 'Java', Icon: DiJava, color: '#E76F00', scale: 1.45 },
  spring: { name: 'Spring', Icon: SiSpring, color: '#6DB33F' },
  python: { name: 'Python', Icon: SiPython, color: '#3776AB' },
  django: { name: 'Django', Icon: SiDjango, color: '#092E20' },
  mongodb: { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  react: { name: 'React', Icon: SiReact, color: '#61DAFB' },
  node: { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  html: { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  css: { name: 'CSS3', Icon: DiCss3, color: '#1572B6', scale: 1.35 },
  js: { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  pandas: { name: 'Pandas', Icon: SiPandas, color: '#150458' },
  sklearn: { name: 'scikit-learn', Icon: SiScikitlearn, color: '#F7931E' },
  openai: { name: 'OpenAI', src: openai },
  langchain: { name: 'LangChain', Icon: SiLangchain, color: '#1C3C3C' },
  excel: { name: 'Microsoft Excel', src: excel },
  mysql: { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  powerbi: { name: 'Power BI', src: powerbi },
  tableau: { name: 'Tableau', src: tableau },
  postgres: { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  aws: { name: 'AWS', src: aws, wide: true },
  docker: { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  kubernetes: { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
  jenkins: { name: 'Jenkins', Icon: SiJenkins, color: '#D24939' },
  azure: { name: 'Microsoft Azure', src: azure },
  selenium: { name: 'Selenium', Icon: SiSelenium, color: '#43B02A' },
  salesforce: { name: 'Salesforce', src: salesforce },
  sap: { name: 'SAP', Icon: SiSap, color: '#0FAAFF' },
}
