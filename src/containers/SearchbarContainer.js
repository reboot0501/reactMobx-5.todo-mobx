import React, { Component } from 'react';
import { TextField, InputAdornment  } from '@material-ui/core';
import  SearchIcon  from '@material-ui/icons/Search';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';


@inject('todoStore')
@autobind
@observer
class SearchbarContainer extends Component {

  onChangeSearchText(searchText) {
    this.props.todoStore.setSearchText(searchText);
  }

  render(){
    return (
      <TextField
        InputProps={{
          startAdornment: ( // 돋보기 아이콘 좌측 맨 앞 startAdornment, 돋보기 아이콘 우측 끝 endadornment
            <InputAdornment position="start"> { /* 돋보기 아이콘 좌측 맨 앞 position="start", 돋보기 아이콘 우측 끝 position="end" */} 
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        
        onChange = { e => this.onChangeSearchText(e.target.value) }

      />
    )}
}

export default SearchbarContainer;