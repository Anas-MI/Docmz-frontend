import React, { Component } from 'react';
import { Layout , Menu , Icon ,Breadcrumb} from 'antd';

export default class Layout_footer extends Component {
	constructor(props) {
		super(props);
	
    }
    
    render() {
        const { Footer } = Layout;
       return (
           <div>
               <Footer style={{ textAlign: 'center' }}>DocMZ</Footer>
                    </div>
			
		);
	}
}
