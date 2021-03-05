# BoxofAfrica <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Box of Africa** is an e-commerce wellness platform that provides authentic African products build using ruby on rails for the backend and React.js client. Users on the frontend will be able to browse products, and have the ability to upload their own product. Those who have login in creditentials will be able to manage their inventory and post, creating and editing product description to their liking.


<br>

## MVP

The **B.O.A** MVP will consist of an easy to navigate site, that will display all the products within the current category chosen. Authentication will be provided allowing logged in users to create various products Also, logged in shop members are able to create, delete, and edit thier own producs that was rendered on the frontend.

<br>

### Goals

- Minimal and easy to navigate frontend site
- Implement authentication
- Execute full-stack applicateion development 


<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Powers the application functionality. |
|   React Router   | Rendering specific components. |
|      Ruby        | Dynamic, open source programming language that focuses on simplifying code. |
|     Rails     | Backend database management. |

<br>

### Client (Front End)

#### Wireframes

[Desktop Wireframe](https://whimsical.com/LDeXdErDDaayypLFRCSNRv)


#### Component Tree

[Component Tree](https://lucid.app/lucidchart/invitations/accept/a846c3ac-cf82-4d62-b674-cfb1dfba9d42)

#### Component Hierarchy

``` structure

src
|__ screens/
      |__ Register.jsx
      |__ Login.jsx
      |__ ProductCreate.jsx
|__ components/
      |__ Products.jsx
      |__ ProductsEdit.jsx
      |__ Sort.jsx
|__ containers/
      |__ MainContainer.jsx
|__layouts
      |__Layout.jsx

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create back-end architecture |    H     |     3 hrs      |     TBD     |     TBD     |
| Create seed data |    H     |     3 hrs      |     TBD    |     TBD     |
| Authorization functionality |    H     |     4 hrs      |     TBD    |     TBD     |
| Complete front-end architecture |    H     |     2 hrs      |     TBD     |     TBD     |
| React functionality |    H     |     6 hrs      |    TBD   |     TBD     |
| Full CRUD front-end |    H     |     6 hrs      |   TBD    |     TBD     |
| Header    |    H     |     3 hrs      |     TBD      |    TBD     |
| Footer |    M    |     3 hrs      |     TBD      |     TBD     |
| CSS |    H     |     9 hrs      |    TBD     |     TBD     |
| TOTAL               |          |     45 hrs      |     TBD     |     TBD     |


<br>

### Server (Back End)

#### ERD Model


[ERD Sample](https://drive.google.com/file/d/1coXnO47ltPAMUVFpcsITPRAdgFuSgRA4/view?usp=sharing)
<br>

***

## Post-MVP

- Embed a shopping cart
- Add a carousel with featred items
- Allow customers to create reviews for the individual product page
- Create inventory/favorites page for owners

***

## Code Showcase



## Code Issues & Resolutions
