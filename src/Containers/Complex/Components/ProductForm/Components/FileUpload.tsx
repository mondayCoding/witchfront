import * as React from 'react';
import axios, { AxiosError } from 'axios';
import {Button, FileDropzone} from 'Components/Index';


export default class FileUpload extends React.Component {

   state:IState = {
      file: null
   };

   handleSubmit = (e:React.FormEvent) => {
      e.preventDefault();
      this.submitFile(this.state.file);
   }

   submitFile = (file:File) => {

      const url = '/api/filehandler';
      const formData = new FormData();
      const config = {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      };
      formData.append("file", file);
      axios.post(url, formData, config);
   }

   handleFileChange = (file:File) => {
      this.setState({file});
   }   

   render() {
      return (
         <form 
            action="/api/filehandler" 
            onSubmit={this.handleSubmit} 
            method="post" 
            encType="multipart/form-data"
         >
            <FileDropzone onFileChange={this.handleFileChange} />
            <Button type="submit" buttonText="Submit image" />
         </form>
      );
   }
}

interface IState {
   file: File;
}

// ARCHIVED: alternate implementation to 
//    public handleFileChange = (e:any) => {
//       let files = e.target.files || e.dataTransfer.files;
//       const file = files[0]
//       if (!files.length) {
//           console.log('no files');
//       }
//       this.setState({file});
//   }

