import { Component } from '@angular/core';
import * as fileSaver from 'file-saver'
import { UploadFileService } from './apps/services/upload-file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EXAMPLE03';

  items = [20, 30, 40]

  file: File;

  constructor(private uploadService: UploadFileService) {
  }

  handleFile(files: FileList) {
    this.file = files.item(0);
  }

  upload() {
    this.uploadService.upload(this.file).subscribe(data => {
      console.log(data)
      this.download(data, this.file.name)
    })
  }

  download(data: Blob, filename: string) {
    fileSaver.saveAs(data, filename)
  }

  downloadHelloWorld() {
    var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    this.download(blob, 'teste.txt')
  }

}
