import React from "react";

class Profile extends React.Component {
	
    constructor(props) {
        console.log("constructor")
		super(props);
		this.state = {
            userInfo:{},
			//8.4
			// count:0,
			// count2:5,
			
		};
        
	}

	//8.5
	async componentDidMount() {
		//8.6
        console.log("componentDidMount")
		const info = await fetch("https://api.github.com/users/nimish3012");
		const json = await info.json();
        
        console.log(this.state.userInfo);
		this.setState({ 
            userInfo: json,
		});
        console.log("componentDidMount after api")
	}

    componentDidUpdate(){
        console.log("componentDidUpdate")
        // 8.7
    }

    componentWillUnmount(){
        //cleanup actions
        //8.8
        console.log("componentWIllUnmount")
    }

	render() {
		return (
            <div>
                {console.log("render")}
				<div>
					<img
						className="res-img"
						src={this.state.userInfo.avatar_url}
					/>
                    <h1>{this.state.userInfo.login}</h1>
                    <h1>{this.state.userInfo.id}</h1>
                    <h1>user since : {this.state.userInfo.created_at}</h1>
				</div>
				{/* till 8.6 learing */}
				<div>
					<h1>class based component</h1>
					<h2>{this.props.name}</h2>
					<h2>{this.props.id}</h2>
					<h3>Count = {this.state.count}</h3>
					<h3>Count2 = {this.state.count2}</h3>
					{/* we don not mutate state directly */}
					{/* <button onClick={()=>{this.setState({count:2, })}}>Count++</button> */}
					<button
						onClick={() => {
							this.setState({
								//multiple set state with same block
								count: this.state.count + 1,
								count2: 10,
							});
						}}>
						Count++
					</button>
				</div>
			</div>
		);
	}
}

export default Profile;
