import React from "react";
import { Form } from "semantic-ui-react";

import "../App.css";

const SearchBar = ({ handleSubmit, handleSearch }) => {
  return (
    <div>
      <h1>Search ID</h1>
      <Form className="search-bar" onSubmit={handleSubmit}>
        <Form.Group onChange={handleSearch}>
          <Form.Input placeholder="Dota 2 ID" name="dota id" />
          <Form.Button content="Search" />
        </Form.Group>
      </Form>
    </div>
  );
};
//   <div>
//     <h1>Search ID</h1>
//     <Form className="search-bar" onSubmit={props.handleSubmit}>
//       <Form.Group onChange={props.handleSearch}>
//         <Form.Input placeholder="Dota 2 ID" name="dota id" />
//         <Form.Button content="Search" />
//       </Form.Group>
//     </Form>
//   </div>
// );

export default SearchBar;
// class SearchBar extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Search ID</h1>
//         <Form className="search-bar" onSubmit={this.handleSubmit}>
//           <Form.Group onChange={this.handleSearch}>
//             <Form.Input placeholder="Dota 2 ID" name="dota id" />
//             <Form.Button content="Search" />
//           </Form.Group>
//         </Form>
//       </div>
//     );
//   }
// }
