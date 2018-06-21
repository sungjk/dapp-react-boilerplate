import React, { PureComponent } from 'react';
import Link from 'next/link';

export default class Layout extends PureComponent {
    render() {
        return (
            <div className="layout">
                <header>
                    <menu>
                        <Link href="/">
                            <a>home</a>
                        </Link>
                    </menu>
                </header>
                {this.props.children}
            </div>
        );
    }
}
