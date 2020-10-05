import React, { Component } from "react";

import Searchbar from "../Searchbar/Searchbar";
import queryApi from "../Servise/drawingsApi";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Loader from "../Spinner/Spinner";
import Modal from "../Modal/Modal";
import style from "./App.module.css";

export default class App extends Component {
  state = {
    pictures: [],
    searchQuery: "",
    page: 1,
    error: null,
    isLoading: false,
    isLargeImageURL: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevQuery !== nextQuery) {
      this.fetchPictures();
    }
    if (prevPage !== nextPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
    // this.exitFromTheModal()
  }

  fetchPictures = () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });
    console.log("");

    queryApi
      .fetchArticlesWithQuery(searchQuery, page)
      .then((pictures) =>
        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...pictures],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  ModalWindow = (e) => {
    const {pictures} = this.state
    e.preventDefault();
    console.log(e.target.dataset.source);
    
    console.log(pictures);
    
    this.setState({
      isLargeImageURL: e.target.dataset.source,
    });
  };

  exitFromTheModal = (e) => {
    e.preventDefault();
    this.setState({
      isLargeImageURL: "",
    });
  };

  changeTheSearchStatus = (query) => {
    this.setState({ searchQuery: query, pictures: [], page: 1 });
  };

  render() {
    const { pictures, error, isLoading, isLargeImageURL } = this.state;
    return (
      <div className={style.App}>
        <Searchbar onSubmit={this.changeTheSearchStatus} />
        {error && <p>ERROR</p>}
        {isLoading && <Loader />}
        {pictures.length > 0 && (
          <ImageGallery
            newImage={pictures}
            openingModalWindow={this.ModalWindow}
            />
        )}



        {pictures.length > 0 && !isLoading && (
          <Button uploadTheFollowingPictures={this.fetchPictures} />
        )}
        {isLargeImageURL && <Modal closeModal={this.exitFromTheModal} largeImage = {isLargeImageURL}/>}
      </div>
    );
  }
}
