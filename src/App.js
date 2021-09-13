import React from 'react';

const App = () => {
    return (
        <div className="container">
            <div className="valid-keys">
                <span className="matched">Bel</span>
                <span className="remainder">miro</span>
            </div>
            <div className="typed-keys">sjdebelmas</div>
            <div className="completed-words">
                <ol>
                    <li>cidade</li>
                    <li>Aviao</li>
                    <li>Mundo</li>
                </ol>
            </div>
        </div>
    )

};

export default App;