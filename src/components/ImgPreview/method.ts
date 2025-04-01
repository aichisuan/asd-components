import type { ActiveImgStatus, ImgOptions } from "./types"

// 下载图片
const getBlob = (url: string) => (
  new Promise(resolve => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response)
      }
    }
    xhr.send()
  })
)

export const downloadFileByURL = (url:string, fileName = 'img') =>{
  getBlob(url).then(blob => {
    const blobURL = URL.createObjectURL(blob as Blob);
    const downloadLink = document.createElement("a");
    downloadLink.href = blobURL;
    downloadLink.download = fileName; // 设置下载文件的名称
    downloadLink.click();
    URL.revokeObjectURL(blobURL);
  })
}

export const getInitActiveImgStatus = (): ActiveImgStatus => ({
  scale: 1,
  x: 0,
  y: 0,
  rotate: 0,
});


export const getInitOptions = ():ImgOptions => {
  return {
    clickMaskClose: false, // 点击mask 关闭图片
    closeIcon: true, // 展示关闭按钮
    width: 800, // 图片默认显示宽度。 高度自适应
    scale: true, // 缩放 按钮
    rotateLeftIcon: true, // 顺时针旋转 按钮
    rotateRightIcon: true, // 逆时针旋转 按钮
    download: false, // 下载 按钮
    stepScale: 0.1, // 缩放step  （建议不修改）
    maxScale: 5, // 最大放大倍数 （建议不修改）
    minScale: 0.1, // 最小放大倍数 （建议不修改）
    stepRotate: 90, // 默认每次旋转度数 90 度 （建议不修改）
    isAnimation: true, // 是否执行缩放等动画 （建议不修改）
    downloadName: 'timp.jpg',
  };
};
