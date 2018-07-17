


import * as React from 'react';
import axios, { AxiosError } from 'axios';
import DropZone from '../components/file_dropzone';
import Button from '../components/button';


interface State {
   file: File;
}

export default class FileUpload extends React.Component {

   public state:State = {
      file: null
   };

   public handleSubmit = (e:React.FormEvent) => {
      e.preventDefault();
      this.submitFile(this.state.file);
   }

   public submitFile = (file:File) => {

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

   public handleFileChange = (file:File) => {
      this.setState({file});
  }

   public render() {
      return (
         <form 
            action="/api/filehandler" 
            onSubmit={this.handleSubmit} 
            method="post" 
            encType="multipart/form-data"
         >
            <DropZone onFileChange={this.handleFileChange} />
            <Button type="submit" buttonText="Submit image" />
         </form>
      );
   }
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

