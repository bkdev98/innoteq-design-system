# Innoteq design system 🧜🏿‍

`yarn add innoteq-design-system`

### Setup Instructions

- TODO

### Directory Structure

    .
    └── src
        ├── atoms                  # Contains all the atoms
        ├── components             # Contains all the components
        ├── molecules              # Contains all the molecules
        ├── customStyleSystem.js   # Defines custom style methods which are unavailable in styled-system
        ├── theme.js               # Defines theme for the design system
        └── utils                  # Contains utility functions

### Building blocks

#### Atoms

Atoms are indivisible components which are built on top of html elements with basic style over it. Every atom will have its own constraints defined.

An Example of atom is: `Box`. Box is a styled div but only the following styles can be configured for the Box. - display - height, width - maxHeight, maxWidth - margin and padding - color - boxSizing

#### Molecules

Molecules are components which are built on top of html elements and/or atom components with basic style over it. Every molecule will have its own constraints defined.

An Example of molecule is: `Container`. Container is a styled Box but only `maxWidth` can be configured for it.

#### Components

Components are made of atoms and molecules. Complex molecules which are specific to the use case (innoteq website) of the design system are grouped under components.

An Example of Component is: `Feature` which displays heading, description and image. `Feature` is a re-usable component on innoteq website.

### Docs

- TODO
