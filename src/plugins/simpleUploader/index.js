/**
 * MIT License
 *
 * Copyright (c) 2017 simple-uploader
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * here is source code link
 * https://github.com/simple-uploader/vue-uploader
 */
import Uploader from '../../components/SimpleUploader/uploader.vue'
import UploaderBtn from '../../components/SimpleUploader/btn.vue'
import UploaderDrop from '../../components/SimpleUploader/drop.vue'
import UploaderUnsupport from '../../components/SimpleUploader/unsupport.vue'
import UploaderList from '../../components/SimpleUploader/list.vue'
import UploaderFiles from '../../components/SimpleUploader/files.vue'
import UploaderFile from '../../components/SimpleUploader/file.vue'

const uploader = {
  install,
  Uploader,
  UploaderBtn,
  UploaderDrop,
  UploaderUnsupport,
  UploaderList,
  UploaderFiles,
  UploaderFile
}

export default uploader

function install (app, options) {
  app.component(Uploader.name, Uploader)
  app.component(UploaderBtn.name, UploaderBtn)
  app.component(UploaderDrop.name, UploaderDrop)
  app.component(UploaderUnsupport.name, UploaderUnsupport)
  app.component(UploaderList.name, UploaderList)
  app.component(UploaderFiles.name, UploaderFiles)
  app.component(UploaderFile.name, UploaderFile)
}
