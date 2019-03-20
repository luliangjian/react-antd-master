import React from 'react'
import { render } from 'react-dom'
// import { browserHistory  } from "react-router";

import ProjectRouter from './projectRouter'

render(
    <ProjectRouter />,
    document.getElementById('root')
)