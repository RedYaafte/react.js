import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
    state = {
        title: this.props.title,
        author: this.props.author
    }
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         author: props.author
    //     }
    // }
    handleClick = (event) => {
        // console.log(this.props.image);
        this.setState({
            title: 'Hola mundo',
            author: 'Yafté Muñoz'
        })
    }
    render() {
        const styles = {
            container: {
                width: 260,
                border: '1px solid #000',
                color: '#44546b',
                cursor: 'pointer',
            }
        }
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img
                        className="Media-image"
                        src={this.props.image}
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">{this.state.title}</h3>
                    <p className="Media-author">{this.state.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;