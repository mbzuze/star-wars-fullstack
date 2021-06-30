import React from "react";

import MenuItem from "../menu-item/menu-item.component";

export default class Directory extends React.Component {

    constructor(props:any){
        super(props);
        

        this.state = {
            sections: [{
                
            }]
        }
    }

    render(){ 
        return(
            <div className="directory-menu">
            {
                // this.state.sections.map((section: any) => (
                //     <MenuItem />
                // ))
            }
            </div>
        );
    };
};