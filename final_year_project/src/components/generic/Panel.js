import { useState } from 'react';
import './Panel.scss';

export function Panel({title,children,level,initialState}) {
  
  const [isThisPanelOpen, setThisPanelState] = useState(initialState); // Hooks

  const togglePanelState = () => isThisPanelOpen ? setThisPanelState(0) : setThisPanelState(1); // Methods

  const panelStateClass = isThisPanelOpen ? "PanelOpen" : "PanelClosed"; // View
  
  return (
  <article className={"Panel PanelLevel"+level+" "+panelStateClass}>
    <header className="PanelHeader">
      <span className="PanelTitle">{title}</span>
      <span className="PanelControl" onClick={togglePanelState}>
        <img className="OpenIcon" src="https://img.icons8.com/material-sharp/24/000000/expand-arrow.png" alt=""/>
        <img className="CloseIcon" src="https://img.icons8.com/material-sharp/24/000000/collapse-arrow.png" alt="" />
      </span>
    </header>
    <main className="PanelBody">
      {children}
    </main>
  </article>
  )
}


export function StaticPanel({children,level}) {
  return (
    <article className={"StaticPanel PanelLevel"+level}>
      <main className="PanelBody">
        {children}
      </main>
    </article>
  )
}