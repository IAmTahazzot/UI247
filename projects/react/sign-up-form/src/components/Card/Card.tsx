// @flow
import * as React from 'react';

type Props = {
    name: string,
    url: string,
    bio: string,
};

type State = {}

export class Card extends React.Component<Props, State> {
    render() {
        return (
            <div style={{maxWidth: '258px', margin: '2rem auto', padding: '1.5rem', boxShadow:
                    ' rgb(65 75 86 / 14%) 5px 7px 40px 0px', fontFamily: 'Inter,' +
                    ' sans-serif'}}>
                <img src={this.props.url} alt={this.props.name} style={{height: '2.5rem', width: '2.5rem', borderRadius: '50%', display: 'block', margin: '1rem auto'}}/>
                <h3 style={{textAlign: 'center'}}>
                    {this.props.name}
                </h3>
                <p style={{textAlign: 'center'}}>{this.props.bio}</p>
            </div>
        );
    };
}