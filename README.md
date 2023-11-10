# Visit the Site :  (https://www.sarvagya.live/)

# Project Documentation

## Overview

This project is a React application that serves as a personal website. It consists of several components, including a navigation bar (`NavBar`), a jumbotron (`Jumbotron`), a personal blog (`PersonalBlog`), and a footer (`Footer`). The application fetches blog posts from a specified API endpoint and displays them on the personal blog section.


## Components

### 1. NavBar

The `NavBar` component is responsible for rendering the navigation bar. It takes `mode` and `setMode` as props to handle the theme mode.

### 2. Jumbotron

The `Jumbotron` component displays a jumbotron with animated text and contact details. It also provides a link to the resume. It takes `mode`, `setMode`, `contactDetails`, `animatedText`, and `resume_link` as props.

### 3. PersonalBlog

The `PersonalBlog` component fetches and displays blog posts. It takes `posts`, `contactDetails`, `mode`, and `setMode` as props.

### 4. Footer

The `Footer` component renders social media links and contact details. It takes `links`, `contactDetails`, `mode`, and `setMode` as props.

## App Component

The `App` component is the main entry point for the application. It manages the overall structure of the page and integrates the aforementioned components. It fetches blog posts on component mount using the `useEffect` hook.
