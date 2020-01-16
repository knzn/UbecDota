import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import { Card, Image, Icon } from "semantic-ui-react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      profile: "",
      obj: "",
      rank: ""
    };
  }

  componentDidMount() {
    fetch("https://api.opendota.com/api/players/107828036/").then(response =>
      response.json().then(datas => this.setState({ obj: datas }))
    );
  }

  handleSearch = e => {
    this.setState({ searchField: e.target.value });
  };

  handleSubmit = () => {
    fetch(
      `https://api.opendota.com/api/players/${this.state.searchField}/`
    ).then(response =>
      response
        .json()
        .then(data =>
          this.setState({ obj: data.profile, rank: data.mmr_estimate })
        )
    );
  };

  render() {
    console.log(this.state.obj);
    // const profiles = this.state.profile.map(prof => prof.personaname);

    return (
      <div className="App">
        <Navbar />
        <SearchBar
          handleSearch={this.handleSearch}
          handleSubmit={this.handleSubmit}
        />
        <Card className="card-info">
          <Image src={this.state.obj.avatarfull} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.state.obj.personaname}</Card.Header>
            <Card.Meta>
              <span className="date">{this.state.rank.estimate}</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
export default App;
