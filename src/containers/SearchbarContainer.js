import React, { Component } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';


@inject('todoStore')
@autobind
@observer
class SearchbarContainer extends Component {

  // TextField onChange 이벤트의 호출 함수, 화살표 함수 처리
  onChangeText = (e) => {
    console.log('onChangeSearchText');
    this.props.todoStore.setSearchText(e.target.value);
  }

  // TextField의 ClearIcon onClick 이벤트의 호출 함수, 화살표 함수 처리
  onClearText = () => {
    console.log('onClearSearchText');
    this.props.todoStore.setClearSearchText();
  }

  render(){

    const { searchText } = this.props.todoStore;

    return (
      <TextField 
        label="Search Title"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start"> { /* 돋보기 아이콘 좌측 맨 앞 position="start", 돋보기 아이콘 우측 끝 position="end" */} 
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: ( 
              <IconButton sx={{display: searchText.length > 0 ? "": "none"}} onClick={ this.onClearText }>
                  { searchText ? <ClearIcon /> : ''  /* "X" ClearIcon 처리   */ }            
              </IconButton>
          ),
        }}
        type="text"
        variant="outlined"
        fullWidth
        size="medium"
        onChange = { this.onChangeText }
        value = { searchText }
      />
    )}
}

export default SearchbarContainer;