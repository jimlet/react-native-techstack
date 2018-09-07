import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    // Make the expansion of a card look cool.
    // You can call this at any point before the component renders
    // and it will make all changes animate.
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, isSelected } = this.props;

    if (isSelected) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
};

const mapStateToProps = (state, ownProps) => ({
  // We use ownProps (the props that were passed to this component) here
  // to distill a calculated property from state and hand that (instead of state values
  // themselves) to the component via props.
  // You can do anything here - you don't have to strictly map state to props 1:1.
  // This is a good place to centralie logic decisions so that they're not sprikled throught 
  // the component itself.
  isSelected: state.selectedLibraryId === ownProps.library.id,
});

export default connect(mapStateToProps, actions)(ListItem);
