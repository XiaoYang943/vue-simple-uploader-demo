import Uploader from '../src/components/uploader.vue'
import UploaderBtn from '../src/components/btn.vue'
import UploaderDrop from '../src/components/drop.vue'
import UploaderUnsupport from '../src/components/unsupport.vue'
import UploaderList from '../src/components/list.vue'
import UploaderFiles from '../src/components/files.vue'
import UploaderFile from '../src/components/file.vue'

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
