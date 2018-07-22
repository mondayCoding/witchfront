
//libs
import * as React from 'react';
import * as Prism from "prismjs";
import 'prismjs/components/prism-json.min.js';

import API from '../services/Todo_simple';
import API2 from '../services/ToDo_soon';


export default class ApiMockPage extends React.Component<any, any> {


    public func:string;
    public funcName = "to do simple API | JSON response";

    public func2:string;
    public funcName2 = "to do soon API | JSON response";

    public sampleJson = `{"menu": {
        "id": "file",
        "value": "File",
        "popup": {
          "menuitem": [
            {"value": "New", "onclick": "CreateNewDoc()"},
            {"value": "Open", "onclick": "OpenDoc()"},
            {"value": "Close", "onclick": "CloseDoc()"}
          ]
        }
    }}`;

    public componentDidMount(){
        Prism.highlightAll();
        this.fetchAPI();
    }

    public componentDidUpdate(){
        Prism.highlightAll();
    }

    public async fetchAPI(){
        this.func = await API.getTodoCollection() as string;
        this.func = JSON.stringify(this.func, null, 3);

        this.func2 = await API2.getTodoCollection() as string;
        this.func2 = JSON.stringify(this.func2, null, 3);

        this.forceUpdate();
    }


    public render() {
        return (
            <div className="api-mock content--lg">

               <h2 className="themeheading">sample data</h2>
                <pre>
                    <code className="language-json">
                        {this.sampleJson}
                    </code>
                </pre>

                {/* to do soon get method json response print */}
                <h3 className="themeheading">{this.funcName}</h3>
                <pre>
                    <code className="language-json">
                        {this.func && this.func}
                    </code>
                </pre>

                {/* to do simple get method response json print */}
                <h3 className="themeheading">{this.funcName2 + "| JSON Response "}</h3>
                <pre>
                    <code className="language-json">
                        {this.func2 && this.func2}
                    </code>
                </pre>
            </div>
        );
    }
}
