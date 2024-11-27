import {Component} from 'react'
import {
  ContainerEle,
  CardContainer,
  HeadingEle,
  InputEle,
  InputContainer,
  ButtonELe,
  Para,
} from '../StyledComponents'
class Editabletext extends Component {
  state = {inputText: '', shouldDisplay: false}
  onChangeInp = event => {
    this.setState({inputText: event.target.value})
  }
  onClickButton = () => {
    this.setState(prevState => ({shouldDisplay: !prevState.shouldDisplay}))
  }
  render() {
    const {inputText, shouldDisplay} = this.state
    console.log(inputText, shouldDisplay)
    const buttontext = shouldDisplay ? 'Edit' : 'Save'
    return (
      <ContainerEle>
        <CardContainer>
          <HeadingEle>Editable Text Input</HeadingEle>
          <InputContainer>
            {shouldDisplay ? (
              <Para>{inputText}</Para>
            ) : (
              <InputEle
                type="text"
                placeholder="enter text"
                onChange={this.onChangeInp}
                value={inputText}
              ></InputEle>
            )}
            <ButtonELe type="button" onClick={this.onClickButton}>
              {buttontext}
            </ButtonELe>
          </InputContainer>
        </CardContainer>
      </ContainerEle>
    )
  }
}

export default Editabletext
