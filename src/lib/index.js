import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clipboard extends Component {
  _copyToClipboard(){
    return document.execCommand('copy');
  }

  copy(text){
    const isRTL = document.documentElement.getAttribute('dir') == 'rtl';

    const fakeElem = document.createElement('textarea');
    // Prevent zooming on iOS
    fakeElem.style.fontSize = '12pt';
    // Reset box model
    fakeElem.style.border = '0';
    fakeElem.style.padding = '0';
    fakeElem.style.margin = '0';
    // Move element out of screen horizontally
    fakeElem.style.position = 'absolute';
    fakeElem.style[ isRTL ? 'right' : 'left' ] = '-9999px';
    // Move element to the same position vertically
    const yPosition = window.pageYOffset || document.documentElement.scrollTop;
    fakeElem.style.top = `${yPosition}px`;

    fakeElem.setAttribute('readonly', '');
    fakeElem.value = text;

    document.body.appendChild(fakeElem);

    fakeElem.select();

    let succeeded, error;

    try {
        succeeded = this._copyToClipboard();
    } catch (err) {
        succeeded = false;
        error = err;
    }

    document.body.removeChild(fakeElem);

    this.handleResult(succeeded, error);
  }

  handleResult(succeeded, error){
    if(succeeded){
      this.props.onSuccess && this.props.onSuccess();
    } else {
      this.props.onError && this.props.onError(error);
    }
  }

  render() {
    const { render, text, props } = this.props;
    return render({...props, copy: () => this.copy(text)});
  }
}

Clipboard.propTypes = {
  render: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  props: PropTypes.object,
  onSuccess: PropTypes.func,
  onError: PropTypes.func
};

export default Clipboard;
