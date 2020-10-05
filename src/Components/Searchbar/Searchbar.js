import React, { Component } from "react";
import style from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    initialValue: "",
  };
  handelChange = (e) => {
    this.setState({
      initialValue: e.target.value,
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.initialValue);
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form onSubmit={this.handelSubmit} className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            onChange={this.handelChange}
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
