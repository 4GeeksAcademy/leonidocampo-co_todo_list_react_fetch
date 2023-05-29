import React from "react";

 

//create your first component
const Home = () => {
	return (
	  <div className="text-center">
		<div className="card">
            <div className="card-header">
			<input type="email" className="form-control border-0" id="exampleFormControlInput1" placeholder="escriba nueva tarea"/>
            </div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">An item</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
			</ul>
			<div className="card-footer">
               Card footer
            </div>

        </div>
	  </div>
	);
};

export default Home;
