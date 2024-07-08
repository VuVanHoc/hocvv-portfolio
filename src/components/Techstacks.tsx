import Image from "next/image";
import aws from "/public/techstacks/aws.webp";
import bitbucket from "/public/techstacks/bitbucket.png";
import couchdb from "/public/techstacks/couchdb.png";
import css from "/public/techstacks/css.png";
import express from "/public/techstacks/express.png";
import figma from "/public/techstacks/figma.webp";
import git from "/public/techstacks/git.png";
import github from "/public/techstacks/github.png";
import gitlab from "/public/techstacks/gitlab.png";
import html5 from "/public/techstacks/html5.png";
import jira from "/public/techstacks/jira.png";
import jsicon from "/public/techstacks/jsicon.webp";
import mongodb from "/public/techstacks/mongodb.png";
import mysql from "/public/techstacks/mysql.png";
import nestjs from "/public/techstacks/nestjs.png";
import nodejs from "/public/techstacks/nodejs.webp";
import nextjs from "/public/techstacks/nextjs.png";
import postgresql from "/public/techstacks/postgresql.png";
import react from "/public/techstacks/react.png";
import sass from "/public/techstacks/sass.png";
import tailwind from "/public/techstacks/tailwind.webp";
import trello from "/public/techstacks/trello.png";
import tsicon from "/public/techstacks/tsicon.png";

import { InfiniteMoving } from "./ui/InfiniteMoving";

const TECHSTACKS = [
    {
        name: "AWS",
        image: aws,
    },
    {
        name: "Bitbucket",
        image: bitbucket,
    },
    {
        name: "CouchDB",
        image: couchdb,
    },
    {
        name: "CSS",
        image: css,
    },
    {
        name: "Express",
        image: express,
    },
    {
        name: "Figma",
        image: figma,
    },
    {
        name: "Git",
        image: git,
    },
    {
        name: "GitHub",
        image: github,
    },
    {
        name: "GitLab",
        image: gitlab,
    },
    {
        name: "HTML5",
        image: html5,
    },

    {
        name: "jira",
        image: jira,
    },
    {
        name: "JS",
        image: jsicon,
    },
    {
        name: "Mongodb",
        image: mongodb,
    },
    {
        name: "mysql",
        image: mysql,
    },
    {
        name: "Nestjs",
        image: nestjs,
    },
    {
        name: "nodejs",
        image: nodejs,
    },
    {
        name: "nextjs",
        image: nextjs,
    },
    {
        name: "postgresql",
        image: postgresql,
    },
    {
        name: "react",
        image: react,
    },
    {
        name: "sass",
        image: sass,
    },
    {
        name: "tailwind",
        image: tailwind,
    },
    {
        name: "trello",
        image: trello,
    },
    {
        name: "tsicon",
        image: tsicon,
    },
];
export default function Techstacks() {
    return (
        <div className="pb-[100px] mt-[100px] text-center">
            <h3 className="md:text-5xl font-semibold text-center ">
                My Techstacks
            </h3>
            <p>Always looking for new technologies</p>
            <InfiniteMoving direction="left" speed="slow">
                {TECHSTACKS.slice(0, 12).map((techstack) => (
                    <div
                        key={techstack.name}
                        className="flex-shrink-0 flex items-center justify-center mx-8"
                    >
                        <Image
                            className="w-[120px] aspect-auto "
                            src={techstack.image}
                            alt={techstack.name}
                        />
                    </div>
                ))}
            </InfiniteMoving>
            <InfiniteMoving direction="right" speed="slow">
                {TECHSTACKS.slice(12).map((techstack) => (
                    <div
                        key={techstack.name}
                        className="flex-shrink-0 flex items-center justify-center mx-8"
                    >
                        <Image
                            className="w-[120px] aspect-auto "
                            src={techstack.image}
                            alt={techstack.name}
                        />
                    </div>
                ))}
            </InfiniteMoving>
        </div>
    );
}
